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
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - simpler design */}
          <Link
            to="/"
            className="text-xl font-bold text-foreground hover:text-accent transition-colors duration-200"
          >
            Sunny Soni
          </Link>

          {/* Desktop Navigation - pill style like reference */}
          <div className="hidden md:flex items-center bg-muted/20 backdrop-blur-lg rounded-full px-6 py-2 border border-border/30">
            {navItems.map((item, index) => {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    location.pathname === item.path
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground"
                  } ${index > 0 ? 'ml-2' : ''}`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Resume button separate from nav pill */}
          <div className="hidden md:block">
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>

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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-border/50">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-accent hover:bg-accent/10"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="sm"
                className="w-full mt-2"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;