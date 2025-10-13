import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, House, Briefcase, UserCircle, MessageSquare } from "lucide-react";
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
    { name: "Home", path: "/", icon: House },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "About", path: "/about", icon: UserCircle },
    { name: "Contact", path: "/contact", icon: MessageSquare },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 pointer-events-auto">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative flex items-center gap-2 text-sm font-medium transition-all duration-300 px-4 py-2.5 rounded-xl ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <IconComponent className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden pointer-events-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              {isOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10 shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
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