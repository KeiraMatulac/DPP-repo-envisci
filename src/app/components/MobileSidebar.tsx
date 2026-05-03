import { Home, Package, Grid3x3, QrCode, Menu, X, Recycle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Package, label: 'All Products', path: '/products' },
    { icon: Grid3x3, label: 'Categories', path: '/categories' },
    { icon: QrCode, label: 'QR Scanner', path: '/scanner' },
  ];

  return (
    <>
      <div className="sticky top-0 z-40 bg-sidebar border-b border-sidebar-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <Recycle className="w-6 h-6" />
          <span className="font-medium">DPP</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-sidebar-accent rounded-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[57px] z-30 bg-sidebar">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
