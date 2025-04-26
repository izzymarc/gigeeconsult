import { Link } from "wouter";
import { Card, CardContent } from "../components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4 shadow-lg">
        <CardContent className="pt-6 pb-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-destructive mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">404 Page Not Found</h1>
            <p className="text-gray-600">
              The page you were looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link href="/">
                <ArrowLeft size={16} />
                Go Back
              </Link>
            </Button>
            <Button
              asChild
              className="flex items-center gap-2 bg-primary"
            >
              <Link href="/">
                <Home size={16} />
                Return Home
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
