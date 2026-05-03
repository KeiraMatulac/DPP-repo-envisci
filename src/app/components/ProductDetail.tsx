import {
  CheckCircle,
  Leaf,
  Recycle,
  Wrench,
  ShieldCheck,
  QrCode,
  ExternalLink
} from 'lucide-react';

import { useParams } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-2">Product Not Found</h1>
          <p className="text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // -----------------------------
  // SAFE NUMERIC CONVERSION
  // -----------------------------
  const carbonFootprint =
    parseFloat(product.environmental.carbonFootprint as any) || 0;

  const recyclability = product.circularity.recyclability || 0;
  const repairability = product.circularity.repairability || 0;

  // -----------------------------
  // NORMALIZED CARBON SCORE (0–100)
  // -----------------------------
  const maxCarbon = 20; // adjust based on dataset

  const carbonScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(((maxCarbon - carbonFootprint) / maxCarbon) * 100)
    )
  );

  // -----------------------------
  // SUSTAINABILITY METRICS
  // -----------------------------
  const sustainabilityData = [
    {
      name: 'Carbon Impact',
      value: carbonScore,
      fill: '#2e7d32'
    },
    {
      name: 'Materials',
      value: recyclability,
      fill: '#66bb6a'
    },
    {
      name: 'Circularity',
      value: Math.round((recyclability + repairability) / 2),
      fill: '#81c784'
    },
    {
      name: 'Repairability',
      value: repairability,
      fill: '#a5d6a7'
    }
  ];

  // -----------------------------
  // OVERALL SCORE (NO HARDCODE)
  // -----------------------------
  const overallScore = Math.round(
    (carbonScore + recyclability + repairability) / 3
  );

  const lifecycleStages = [
    { stage: 'Manufactured', date: product.manufacturingDate, status: 'complete' },
    { stage: 'Sold', date: product.warranty.activated, status: 'complete' },
    { stage: 'In Use', date: 'Current', status: 'active' },
    { stage: 'Repaired', date: 'Future', status: 'pending' },
    { stage: 'Recycled', date: 'End of Life', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12">

        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* IMAGE */}
          <div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-6">
              <ImageWithFallback
                src={product.image.replace('w=400', 'w=800')}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-primary text-white rounded-xl">
                View Lifecycle
              </button>
              <button className="flex-1 py-3 border border-primary text-primary rounded-xl">
                Verify Blockchain
              </button>
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-muted-foreground">
                  Model: {product.modelId}
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded-xl">
                <CheckCircle className="w-5 h-5" />
                Verified
              </div>
            </div>

            {/* SUSTAINABILITY CARD */}
            <div className="bg-card border rounded-2xl p-6">

              <h3 className="text-lg mb-4 flex items-center gap-2">
                <span>📊</span>
                Sustainability Score
              </h3>

              {/* OVERALL SCORE */}
              <div className="flex items-center gap-6 mb-6">
                <div>
                  <div className="text-5xl font-bold text-primary">
                    {overallScore}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Overall Score
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 flex-1">
                  {sustainabilityData.map(item => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.fill }}
                      />
                      <div>
                        <div className="text-sm">{item.value}%</div>
                        <div className="text-xs text-muted-foreground">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BAR CHART */}
              <ResponsiveContainer width="100%" height={140}>
                <BarChart data={sustainabilityData} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* INFO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-card border rounded-2xl p-6">
            <h3 className="mb-4">Product Information</h3>

            <div className="space-y-2 text-sm">
              <div>Category: {product.category}</div>
              <div>Serial: {product.serialNumber}</div>
              <div>Weight: {product.specifications.weight}</div>
              <div>
                Materials: {product.materials.primary.join(', ')}
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-6">
            <h3 className="mb-4">Environmental Impact</h3>

            <p className="text-sm text-muted-foreground">
              {product.environmental.ecoDesign}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                Carbon: {carbonFootprint}
              </div>
              <div>
                Recyclable: {recyclability}%
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
