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
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full"
          : "backdrop-blur-2xl border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.02)] rounded-full"
      }`}
      style={{
        backdropFilter: 'blur(60px) saturate(2)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.05)'
      }}
    >
      <div className="px-8 py-3">
        <div className="flex justify-center items-center h-16">
          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">

            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative p-3 rounded-full transition-all duration-300 group ${
                    location.pathname === item.path
                      ? "text-white shadow-[0_4px_16px_rgba(255,255,255,0.1)]"
                      : "text-white/60 hover:text-white/90"
                  }`}
                  style={{
                    backdropFilter: location.pathname === item.path ? 'blur(30px)' : 'none',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))'
                      : 'transparent'
                  }}
                >
                  <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  {/* Ultra-subtle glass highlight */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;