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
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-72 bg-background/95 backdrop-blur-md border-l border-border z-50 md:hidden transform transition-transform duration-300 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="text-xl font-bold gradient-text">Navigation</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="hover:bg-primary/10"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6">
                <div className="space-y-3">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="block py-4 px-5 rounded-xl text-lg font-medium bg-card/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 border border-border/30 hover:border-primary/30"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileNav;