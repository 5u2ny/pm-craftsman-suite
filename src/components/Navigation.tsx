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
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/case-studies", icon: FolderOpen },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ];


  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      {/* Desktop Floating Navigation */}
      <div className="hidden md:flex">
        <div className="flex flex-col items-center space-y-4 bg-white/[0.02] backdrop-blur-[40px] border border-white/20 rounded-3xl px-3 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative overflow-hidden backdrop-saturate-150">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative p-3 rounded-full transition-all duration-300 group ${
                  location.pathname === item.path
                    ? "text-white bg-white/20 shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <IconComponent className="h-5 w-5 relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 glass-nav text-white/70 hover:text-white hover:bg-white/10"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-4 animate-fade-in">
          <div className="flex flex-col items-center space-y-3 bg-white/[0.02] backdrop-blur-[40px] border border-white/20 rounded-2xl px-3 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:via-white/5 before:to-transparent before:opacity-60 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-white/10 after:to-transparent after:opacity-30 relative overflow-hidden backdrop-saturate-150">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative p-2.5 rounded-full transition-all duration-300 group ${
                    location.pathname === item.path
                      ? "text-white bg-white/20 shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <IconComponent className="h-4 w-4 relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              );
             })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;