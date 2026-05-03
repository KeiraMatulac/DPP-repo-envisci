import {
  CheckCircle,
  Leaf,
  Recycle,
  Wrench,
  ShieldCheck,
  QrCode,
  ExternalLink,
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { products } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

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

  // ✅ SAFE CARBON PARSING (fixes 979% bug)
  const maxCarbon = 10;

  const carbonValue = Number.parseFloat(
    product.environmental.carbonFootprint
  ) || 0;

  const carbonScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(((maxCarbon - carbonValue) / maxCarbon) * 100)
    )
  );

  // ✅ FINAL SUSTAINABILITY DATA (CLEAN & SAFE)
  const sustainabilityData = [
    {
      name: 'Carbon Impact',
      value: carbonScore,
      fill: '#2e7d32',
    },
    {
      name: 'Materials',
      value: product.circularity.recyclability,
      fill: '#66bb6a',
    },
    {
      name: 'Circularity',
      value:
        (product.circularity.recyclability +
          product.circularity.repairability) /
        2,
      fill: '#81c784',
    },
    {
      name: 'Repairability',
      value: product.circularity.repairability,
      fill: '#a5d6a7',
    },
  ];

  const lifecycleStages = [
    { stage: 'Manufactured', date: product.manufacturingDate, status: 'complete' },
    { stage: 'Sold', date: product.warranty.activated, status: 'complete' },
    { stage: 'In Use', date: 'Current', status: 'active' },
    { stage: 'Repaired', date: 'Future', status: 'pending' },
    { stage: 'Recycled', date: 'End of Life', status: 'pending' },
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
              <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-xl">
                View Lifecycle
              </button>
              <button className="flex-1 px-6 py-3 border border-primary text-primary rounded-xl">
                Verify Blockchain
              </button>
            </div>
          </div>

          {/* INFO */}
          <div>
            <div className="flex justify-between mb-6">
              <div>
                <h1 className="text-3xl">{product.name}</h1>
                <p className="text-muted-foreground">
                  Model: {product.modelId}
                </p>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-[#2e7d32] text-white rounded-xl">
                <CheckCircle className="w-5 h-5" />
                Verified
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-card border rounded-2xl p-6 mb-6">
              <div className="flex gap-3 mb-3">
                <Leaf className="text-primary" />
                <div>
                  <h3>Digital Product Passport #{product.id}</h3>
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* SUSTAINABILITY */}
            <div className="bg-card border rounded-2xl p-6">
              <h3 className="mb-4">Sustainability Score</h3>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-4xl text-primary font-bold">
                    {product.score}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Overall Score
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {sustainabilityData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.fill }}
                      />
                      <div>
                        <div className="text-sm">
                          {Math.round(item.value)}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CHART */}
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={sustainabilityData}>
                  <XAxis dataKey="name" hide />
                  <YAxis domain={[0, 100]} hide />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* LIFECYCLE */}
        <div className="bg-card border rounded-2xl p-6">
          <h3 className="mb-4">Lifecycle Timeline</h3>

          <div className="space-y-4">
            {lifecycleStages.map((stage, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className={`w-3 h-3 mt-2 rounded-full ${
                    stage.status === 'complete'
                      ? 'bg-green-600'
                      : stage.status === 'active'
                      ? 'bg-blue-600'
                      : 'bg-gray-400'
                  }`}
                />
                <div>
                  <div className="font-medium">{stage.stage}</div>
                  <div className="text-sm text-muted-foreground">
                    {stage.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
