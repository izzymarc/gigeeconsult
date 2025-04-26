import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  signal?: AbortSignal;
};

// Unified API request function that handles both basic and typed requests
export async function apiRequest<T = any>(
  methodOrEndpoint: string,
  urlOrOptions: string | RequestOptions = {},
  data?: unknown
): Promise<T | Response> {
  // Handle the simple method/url/data signature
  if (typeof urlOrOptions === 'string') {
    const res = await fetch(urlOrOptions, {
      method: methodOrEndpoint,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    await throwIfResNotOk(res);
    return res;
  } 
  
  // Handle the endpoint/options signature
  const endpoint = methodOrEndpoint;
  const options = urlOrOptions as RequestOptions;
  const { method = "GET", headers = {}, body, signal } = options;

  const requestOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    signal,
    credentials: "include",
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const response = await fetch(`/api${endpoint}`, requestOptions);

  // If the response is not ok, throw an error
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: "An error occurred with the API request",
    }));
    throw new Error(error.message || `API Error: ${response.status}`);
  }

  // Check if the response has content
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  }

  return {} as T;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
