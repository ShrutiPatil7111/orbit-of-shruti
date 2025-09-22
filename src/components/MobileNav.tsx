import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  onNavClick: (section: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (section: string) => {
    onNavClick(section);
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="relative md:hidden flex flex-col items-end">
      {/* Menu button with icon and text */}
      <div 
        className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        <span className="text-sm font-medium text-foreground">Menu</span>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu Panel - W3Schools inspired */}
          <div className="absolute top-full right-0 mt-2 w-30 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block py-2 px-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors border-b border-border/30 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;