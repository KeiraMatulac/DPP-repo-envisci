import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { ProductListing } from './components/ProductListing';
import { ProductDetail } from './components/ProductDetail';
import { QRScanner } from './components/QRScanner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListing />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="scanner" element={<QRScanner />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="recycling-guide" element={<RecyclingGuidePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function CategoryPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">DPP Product Categories</h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
          Browse products across all categories covered under Digital Product Passport regulations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              name: 'Consumer Electronic Device',
              icon: '',
              count: 3,
              desc: 'Smartphones, wearables, headphones, and electronic devices'
            },
            {
              name: 'Personal Care & Hygiene',
              icon: '',
              count: 1,
              desc: 'Cosmetics and various bathroom products'
            },
            {
              name: 'Home Goods',
              icon: '',
              count: 1,
              desc: 'Curtains, upholstery, towels, napkins, and tablecloths'
            },
            {
              name: 'Kitchenware',
              icon: '',
              count: 1,
              desc: 'Glassware and ceramic products'
            },
            {
              name: 'Toys',
              icon: '',
              count: 1,
              desc: 'All children\'s toys to ensure safety and chemical transparency'
            },
            {
              name: 'Appliances',
              icon: '',
              count: 1,
              desc: 'Kitchen and household appliances'
            },
            {
              name: 'Luxury Goods',
              icon: '',
              count: 0,
              desc: 'High-end leather goods, watches, and jewelry'
            },
            {
              name: 'Building Materials',
              icon: '',
              count: 0,
              desc: 'Doors, windows, insulation, and various construction components'
            },
            {
              name: 'Paper & Pulp',
              icon: '',
              count: 0,
              desc: 'Paper-based packaging and stationary products'
            },
          ].map((category) => (
            <div key={category.name} className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl md:text-6xl mb-3 md:mb-4">{category.icon}</div>
              <h2 className="text-lg md:text-xl lg:text-2xl mb-2">{category.name}</h2>
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{category.desc}</p>
              <p className="text-sm md:text-base text-primary font-medium">{category.count} verified products</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparePage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">Compare Products</h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">Select up to 3 products to compare their sustainability metrics</p>
        <div className="bg-card border border-border rounded-xl md:rounded-2xl p-8 md:p-12 text-center">
          <div className="text-4xl md:text-6xl mb-3 md:mb-4"></div>
          <h3 className="text-lg md:text-xl mb-2">No products selected</h3>
          <p className="text-sm md:text-base text-muted-foreground">Browse products and add them to comparison</p>
        </div>
      </div>
    </div>
  );
}

function RecyclingGuidePage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8">Recycling Guide</h1>

        <div className="space-y-4 md:space-y-6">
          {[
            {
              category: 'Electronics',
              icon: '',
              items: ['Smartphones', 'Laptops', 'Tablets', 'Headphones'],
              instructions: 'Take to certified e-waste collection centers. Remove batteries before recycling.',
            },
            {
              category: 'Batteries',
              icon: '',
              items: ['Lithium-ion', 'Alkaline', 'Rechargeable'],
              instructions: 'Return to authorized battery collection points. Never dispose in regular trash.',
            },
            {
              category: 'Plastics',
              icon: '',
              items: ['Packaging', 'Cases', 'Containers'],
              instructions: 'Check recycling symbols. Clean and sort by type before recycling.',
            },
          ].map((item) => (
            <div key={item.category} className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="text-3xl md:text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl mb-2">{item.category}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3">{item.items.join(' • ')}</p>
                  <p className="text-xs md:text-sm bg-secondary/10 text-foreground p-3 md:p-4 rounded-lg md:rounded-xl">
                    {item.instructions}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}