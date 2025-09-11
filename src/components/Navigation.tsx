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
          ? "bg-white/20 backdrop-blur-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-full"
          : "bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full"
      }`}
      style={{
        backdropFilter: 'blur(40px) saturate(1.8)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.1)'
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
                      ? "bg-white/30 text-white shadow-[0_4px_16px_rgba(255,255,255,0.2)]"
                      : "text-white/70 hover:text-white hover:bg-white/20"
                  }`}
                  style={{
                    backdropFilter: location.pathname === item.path ? 'blur(20px)' : 'none',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))'
                      : 'transparent'
                  }}
                >
                  <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  {/* Liquid glass highlight effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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