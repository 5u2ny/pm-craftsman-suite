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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-transparent rounded-full border border-gray-300/30">
      <div className="px-4 py-2">
        <div className="flex justify-center items-center h-16">
          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">

            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-200/30 ${
                    location.pathname === item.path
                      ? "text-black bg-gray-200/40 scale-105"
                      : "text-black/70 hover:text-black"
                  }`}
                >
                  <IconComponent className="h-4 w-4 transition-transform duration-300" />
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