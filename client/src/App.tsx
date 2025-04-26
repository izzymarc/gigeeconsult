import React from "react";
import { Route, Router, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme/theme-provider";
import { I18nProvider } from "./lib/i18n/i18n-provider";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./components/layout/MainLayout";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="gigee-theme">
        <I18nProvider>
          <Router>
            <MainLayout>
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </MainLayout>
          </Router>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
