import { Download, Home, FolderOpen, User, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/case-studies", icon: FolderOpen },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
];

const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const handleDownloadResume = () => {
    console.log("Download resume clicked");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarContent className="bg-white/5 backdrop-blur-3xl border-r border-white/10 h-full">
        {/* Logo/Brand */}
        <div className="p-6 border-b border-white/10">
          <Link
            to="/"
            className={`block transition-all duration-200 ${
              collapsed ? "text-center" : ""
            }`}
          >
            {collapsed ? (
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
            ) : (
              <h1 className="text-xl font-bold text-gradient">Sunny Soni</h1>
            )}
          </Link>
        </div>

        <SidebarGroup className="flex-1 px-3 py-6">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const active = isActive(item.path);
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                          active
                            ? "text-white bg-white/20 shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-50"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        <IconComponent 
                          className={`h-5 w-5 transition-all duration-300 ${
                            active 
                              ? "text-primary-glow drop-shadow-sm" 
                              : "text-white/70 group-hover:text-white group-hover:drop-shadow-sm"
                          }`} 
                        />
                        {!collapsed && (
                          <span className="font-medium relative z-10">
                            {item.name}
                          </span>
                        )}
                        {active && (
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-glow rounded-l-full" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resume Button */}
        <div className="p-3 border-t border-white/10">
          <button
            onClick={handleDownloadResume}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10 group ${
              collapsed ? "justify-center" : ""
            }`}
          >
            <Download 
              className="h-5 w-5 transition-all duration-300 text-white/70 group-hover:text-white group-hover:drop-shadow-sm" 
            />
            {!collapsed && (
              <span className="font-medium">Resume</span>
            )}
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;