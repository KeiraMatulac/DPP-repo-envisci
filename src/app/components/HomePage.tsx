import { Search, QrCode, Leaf, Grid3x3 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/products');
  };

  return (
    <div className="min-h-screen">
      <div className="relative min-h-[60vh] lg:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20] via-[#2e7d32] to-[#66bb6a] opacity-90" />

        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-4 md:p-8 opacity-20">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm flex items-center justify-center">
              {i % 4 === 0 && <Recycle className="w-8 h-8 md:w-16 md:h-16 text-white" />}
              {i % 4 === 1 && <Leaf className="w-8 h-8 md:w-16 md:h-16 text-white" />}
              {i % 4 === 2 && <QrCode className="w-8 h-8 md:w-16 md:h-16 text-white" />}
              {i % 4 === 3 && <Grid3x3 className="w-8 h-8 md:w-16 md:h-16 text-white" />}
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-3xl px-4 md:px-6">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-center">
            Discover Product Sustainability
          </h1>

          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search product, brand, or passport ID..."
              className="w-full px-4 md:px-6 py-4 md:py-5 pr-14 rounded-xl md:rounded-2xl bg-white shadow-2xl text-base md:text-lg outline-none focus:ring-4 focus:ring-white/30 transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-primary text-white rounded-lg md:rounded-xl hover:bg-primary/90 transition-colors"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-white/95 backdrop-blur rounded-lg md:rounded-xl hover:bg-white transition-colors shadow-lg"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-sm md:text-base">Search Products</span>
            </Link>

            <Link
              to="/scanner"
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-white/95 backdrop-blur rounded-lg md:rounded-xl hover:bg-white transition-colors shadow-lg"
            >
              <QrCode className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-sm md:text-base">Scan QR Code</span>
            </Link>

            <Link
              to="/products?filter=sustainable"
              className="flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-white/95 backdrop-blur rounded-lg md:rounded-xl hover:bg-white transition-colors shadow-lg"
            >
              <Leaf className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-sm md:text-base">Sustainable Products</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8 text-center text-foreground">
            DPP Product Categories
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {[
              { name: 'Consumer Electronic Device', icon: '', desc: 'Smartphones, wearables, headphones' },
              { name: 'Personal Care & Hygiene', icon: '', desc: 'Cosmetics & bathroom products' },
              { name: 'Home Goods', icon: '', desc: 'Curtains, upholstery, towels' },
              { name: 'Kitchenware', icon: '', desc: 'Glassware & ceramic products' },
              { name: 'Toys', icon: '', desc: 'Children\'s toys & safety' },
              { name: 'Appliances', icon: '', desc: 'Kitchen & household appliances' },
              { name: 'Luxury Goods', icon: '', desc: 'Leather, watches, jewelry' },
              { name: 'Building Materials', icon: '', desc: 'Doors, windows, insulation' },
              { name: 'Paper & Pulp', icon: '', desc: 'Packaging & stationary' },
            ].map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="bg-card p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 text-center">{category.icon}</div>
                <h3 className="text-center text-foreground mb-1 md:mb-2 text-sm md:text-base">{category.name}</h3>
                <p className="text-xs text-center text-muted-foreground hidden md:block">{category.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Recycle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 19H6.5a2.5 2.5 0 0 1 0-5H14M17 5H17.5a2.5 2.5 0 0 1 0 5H10" />
      <path d="m7 19-4-4 4-4M17 5l4 4-4 4" />
    </svg>
  );
}
