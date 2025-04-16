
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BarChart3, Map, Info, FileDigit, Download } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Map', icon: <Map className="h-4 w-4 mr-2" /> },
    { path: '/data-insights', label: 'Data Insights', icon: <BarChart3 className="h-4 w-4 mr-2" /> },
    { path: '/methodology', label: 'Methodology', icon: <FileDigit className="h-4 w-4 mr-2" /> },
    { path: '/about', label: 'About', icon: <Info className="h-4 w-4 mr-2" /> },
  ];

  const handleDownloadData = () => {
    toast({
      title: "Download started",
      description: "Your data is being prepared for download.",
    });
    // In a real app, this would trigger an actual download
    console.log("Download data triggered");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-8 flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="hidden text-xl font-bold sm:inline-block">
            Income Inequality Explorer
          </span>
          <span className="text-xl font-bold sm:hidden">
            IIE
          </span>
        </Link>
        <nav className="flex items-center space-x-2 lg:space-x-3">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={location.pathname === item.path ? "secondary" : "ghost"}
              size="sm"
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === item.path 
                  ? "bg-secondary text-secondary-foreground" 
                  : "text-muted-foreground hover:text-primary"
              )}
              asChild
            >
              <Link to={item.path} className="flex items-center">
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button size="sm" variant="outline" onClick={handleDownloadData}>
            <Download className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Download Data</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
