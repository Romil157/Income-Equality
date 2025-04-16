
import React from 'react';
import Navbar from './Navbar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn("flex-1", className)}>
        {children}
      </main>
      <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-sm text-muted-foreground">
            © 2024 Income Inequality Explorer. Data for educational purposes only.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/about" className="hover:underline">About</a>
            <a href="/methodology" className="hover:underline">Methodology</a>
            <a href="https://github.com" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
