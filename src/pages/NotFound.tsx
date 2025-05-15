
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-7xl md:text-9xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! We can't find the page you're looking for.</p>
        <Button asChild size="lg" className="bg-skyliving-600 hover:bg-skyliving-700">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
