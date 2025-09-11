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
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 rounded-full"
      style={{
        backdropFilter: 'blur(80px) saturate(2.5) brightness(1.1)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005))',
        border: '1px solid rgba(255,255,255,0.03)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02), 0 20px 40px rgba(0,0,0,0.02), 0 8px 16px rgba(0,0,0,0.01)'
      }}
    >
      <div className="px-3 py-1">
        <div className="flex justify-center items-center h-16">
          {/* Navigation Icons */}
          <div className="flex items-center space-x-1">

            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative p-1.5 rounded-full transition-all duration-300 group ${
                    location.pathname === item.path
                      ? "text-white/15"
                      : "text-white/8 hover:text-white/12"
                  }`}
                  style={{
                    backdropFilter: location.pathname === item.path ? 'blur(40px)' : 'none',
                    background: location.pathname === item.path 
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))'
                      : 'transparent'
                  }}
                >
                  <IconComponent className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
                  {/* Glass highlight */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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