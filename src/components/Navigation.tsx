import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FolderOpen, User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/case-studies", icon: FolderOpen },
    { name: "Experience", path: "/", icon: Home },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
      style={{ backgroundColor: isScrolled ? 'rgba(10, 14, 26, 0.8)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Centered navigation pill exactly like reference */}
          <div className="hidden md:flex items-center bg-gray-800/50 backdrop-blur-lg rounded-full px-1 py-1 border border-gray-700/50">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-200 rounded-full ${
                    location.pathname === item.path
                      ? "text-white bg-gray-700"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg border border-gray-700/50 mx-4">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-white bg-gray-700"
                        : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;