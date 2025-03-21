
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, GitPullRequest, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between px-8 py-6 bg-background backdrop-blur-sm border-b border-black/5 dark:border-white/5 sticky top-0 z-10">
      <div className="flex items-center gap-2.5">
        <Scale className="w-6 h-6" />
        <h1 className="text-xl font-medium tracking-tight">2025 Smart Analyser</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground hidden md:block">Indian Legal AI Assistant</div>
        <ThemeToggle />
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleLogout} 
          className="text-muted-foreground hover:text-foreground"
          title="Logout"
        >
          <LogOut className="h-4 w-4" />
        </Button>
        <a 
          href="#" 
          className="flex items-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-full bg-foreground text-background transition-transform hover:scale-105 active:scale-95"
        >
          <GitPullRequest className="w-3.5 h-3.5" />
          <span>Feedback</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
