import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileDown, House, Briefcase, UserCircle, MessageSquare } from "lucide-react";
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

  const handleDownloadResume = () => {
    window.open('/Sunny_Soni_Resume.pdf', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-background/60 backdrop-blur-sm border-b border-border/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-colors duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-accent p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-primary-foreground font-bold text-xl">SS</span>
              </div>
            </div>
            <span className="hidden sm:block text-xl font-hero font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Sunny Soni
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
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

          {/* Desktop Resume Button */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={handleDownloadResume}
              size="sm"
              className="group gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <FileDown className="h-4 w-4 group-hover:animate-bounce-once" />
              <span>Resume</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
              <div className="pt-2 mt-2 border-t border-border/50">
                <Button
                  onClick={() => {
                    handleDownloadResume();
                    setIsOpen(false);
                  }}
                  size="sm"
                  className="w-full gap-2 bg-gradient-to-r from-primary to-accent"
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;