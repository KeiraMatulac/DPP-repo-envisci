import { Leaf, Wrench, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../data/products';

export function ProductListing() {
  const getGradeColor = (grade: string) => {
    if (grade === 'A') return 'bg-[#2e7d32] text-white';
    if (grade === 'B') return 'bg-[#66bb6a] text-white';
    return 'bg-[#a5d6a7] text-[#1B5E20]';
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2">All Products</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Browse our catalog of verified sustainable products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border"
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-2 md:top-4 right-2 md:right-4 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl ${getGradeColor(product.grade)}`}>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl">{product.grade}</div>
                    <div className="text-xs opacity-90">{product.score}/100</div>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-5">
                <h3 className="mb-3 text-base md:text-lg">{product.name}</h3>

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 bg-secondary/20 text-primary text-xs md:text-sm rounded-full"
                    >
                      {tag === 'Recyclable' && <Recycle className="w-3 h-3 md:w-3.5 md:h-3.5" />}
                      {tag === 'Repairable' && <Wrench className="w-3 h-3 md:w-3.5 md:h-3.5" />}
                      {tag === 'Low Carbon' && <Leaf className="w-3 h-3 md:w-3.5 md:h-3.5" />}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
