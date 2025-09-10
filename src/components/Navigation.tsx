import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Home, FolderOpen, User, Mail } from "lucide-react";
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
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/case-studies", icon: FolderOpen },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const handleDownloadResume = () => {
    // This would trigger a resume download
    console.log("Download resume clicked");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-glass shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 shadow-lg">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`p-3 rounded-xl transition-all duration-200 hover:bg-white/20 ${
                    location.pathname === item.path
                      ? "text-primary bg-white/20"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              );
            })}
            <button
              onClick={handleDownloadResume}
              className="p-3 rounded-xl transition-all duration-200 hover:bg-white/20 text-muted-foreground hover:text-primary"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="flex justify-center items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 mx-4 shadow-lg">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`p-3 rounded-xl transition-all duration-200 hover:bg-white/20 ${
                      location.pathname === item.path
                        ? "text-primary bg-white/20"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
              <button
                onClick={handleDownloadResume}
                className="p-3 rounded-xl transition-all duration-200 hover:bg-white/20 text-muted-foreground hover:text-primary"
              >
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;