import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center py-20">
          <h1 className="text-6xl font-bold mb-4 text-glow-strong">404</h1>
          <p className="text-xl text-gray-400 mb-6">Oops! Page not found</p>
          <Link to="/" className="bg-transparent text-white border border-gray-700 hover:border-regal-green px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-regal-green/10 btn-glow animate-border-glow inline-block">
            <span className="relative z-10">Return to Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
