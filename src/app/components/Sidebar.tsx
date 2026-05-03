import { Home, Package, Grid3x3, Filter, QrCode, GitCompare, Recycle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Package, label: 'All Products', path: '/products' },
    { icon: Grid3x3, label: 'Categories', path: '/categories' },
  ];

  const filterItems = [
    { label: 'Sustainable Score', value: 'sustainable' },
    { label: 'Recyclability', value: 'recyclable' },
    { label: 'Repairability', value: 'repairable' },
    { label: 'Carbon Footprint', value: 'carbon' },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col sticky top-0 overflow-y-auto">
      <div className="p-6 flex-shrink-0">
        <h1 className="flex items-center gap-2 text-primary text-base">
          <Recycle className="w-6 h-6" />
          <span className="leading-tight">Digital Product Passport</span>
        </h1>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-1 mb-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 px-4 py-2 text-muted-foreground">
            <Filter className="w-4 h-4" />
            <span className="text-sm">Smart Filters</span>
          </div>
          <div className="space-y-1 mt-2">
            {filterItems.map((item) => (
              <button
                key={item.value}
                className="w-full text-left px-8 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Link
            to="/scanner"
            className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            <QrCode className="w-5 h-5" />
            <span>QR Scanner</span>
          </Link>

          <Link
            to="/compare"
            className="flex items-center gap-3 px-4 py-2.5 text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            <GitCompare className="w-5 h-5" />
            <span>Compare Products</span>
          </Link>

          <Link
            to="/recycling-guide"
            className="flex items-center gap-3 px-4 py-2.5 text-sidebar-foreground hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            <Recycle className="w-5 h-5" />
            <span>Recycling Guide</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
