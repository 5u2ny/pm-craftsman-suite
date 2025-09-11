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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl"
          : "bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl"
      }`}
    >
      <div className="px-6 py-2">
        <div className="flex justify-center items-center h-16">
          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">

            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`p-3 rounded-xl transition-all duration-300 hover:bg-white/20 ${
                    location.pathname === item.path
                      ? "bg-white/30 text-white shadow-lg"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
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