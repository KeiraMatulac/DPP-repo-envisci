import { CheckCircle, Leaf, Recycle, Wrench, ShieldCheck, QrCode, ExternalLink } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
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
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const maxCarbon = 10; // baseline CO2 value for normalization (adjust if needed)

  const carbonScore = Math.max(
    0,
    Math.round(((maxCarbon - product.environmental.carbonFootprint) / maxCarbon) * 100)
  );
  
  const sustainabilityData = [
    {
      name: 'Carbon Impact',
      value: carbonScore,
      fill: '#2e7d32'
    },
    {
      name: 'Materials',
      value: product.circularity.recyclability,
      fill: '#66bb6a'
    },
    {
      name: 'Circularity',
      value: (product.circularity.recyclability + product.circularity.repairability) / 2,
      fill: '#81c784'
    },
    {
      name: 'Repairability',
      value: product.circularity.repairability,
      fill: '#a5d6a7'
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          <div>
            <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-muted mb-4 md:mb-6">
              <ImageWithFallback
                src={product.image.replace('w=400', 'w=800')}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-2 md:gap-3">
              <button className="flex-1 px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-primary text-primary-foreground rounded-lg md:rounded-xl hover:opacity-90 transition-opacity">
                View Lifecycle
              </button>
              <button className="flex-1 px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base border-2 border-primary text-primary rounded-lg md:rounded-xl hover:bg-primary/5 transition-colors">
                Verify Blockchain
              </button>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-0 mb-4 md:mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2">{product.name}</h1>
                <p className="text-sm md:text-base text-muted-foreground">Model: {product.modelId}</p>
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-[#2e7d32] text-white rounded-lg md:rounded-xl self-start">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Verified</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg">Digital Product Passport #{product.id}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{product.category}</p>
                </div>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
              <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-base md:text-lg">📊</span>
                </div>
                Sustainability Score
              </h3>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
                <div className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-medium text-primary mb-1">87</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Overall Score</div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-2 md:gap-3">
                  {sustainabilityData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1.5 md:gap-2">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.fill }} />
                      <div>
                        <div className="text-xs md:text-sm">{item.value}%</div>
                        <div className="text-xs text-muted-foreground hidden md:block">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={sustainabilityData} layout="vertical">
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 12 }} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 text-base md:text-lg">Product Information</h3>
            <div className="space-y-2 md:space-y-3">
              <InfoRow label="Model Name" value={product.modelName} />
              <InfoRow label="Serial Number" value={product.serialNumber} />
              <InfoRow label="Category" value={product.category} />
              <InfoRow label="Manufacturing Date" value={product.manufacturingDate} />
              <InfoRow label="Batch Number" value={product.batchNumber} />
              <InfoRow label="Weight" value={product.specifications.weight} />
              {product.specifications.connectivity && <InfoRow label="Connectivity" value={product.specifications.connectivity} />}
              {product.specifications.batteryLife && <InfoRow label="Battery Life" value={product.specifications.batteryLife} />}
              {product.specifications.chargingPort && <InfoRow label="Charging" value={product.specifications.chargingPort} />}
              <InfoRow label="Materials" value={product.materials.primary.join(', ')} />
              <InfoRow label="Origin" value={`${product.origin.country}`} />
              <InfoRow label="Facility" value={product.origin.facility} />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg">
              <Leaf className="w-5 h-5 text-primary" />
              Environmental Impact
            </h3>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              {product.environmental.ecoDesign}. {product.environmental.energyConsumption}. {product.environmental.packagingReduction}.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <MetricCard
                icon={<Leaf className="w-4 h-4 md:w-5 md:h-5" />}
                label="Carbon Footprint"
                value={product.environmental.carbonFootprint}
                subtext="Per unit"
              />
              <MetricCard
                icon={<Recycle className="w-4 h-4 md:w-5 md:h-5" />}
                label="Recyclability"
                value={`${product.circularity.recyclability}%`}
                subtext="Of materials"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg">
              <Recycle className="w-5 h-5 text-primary" />
              Circularity
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs md:text-sm text-muted-foreground">Recyclability</span>
                  <span className="text-sm md:text-base font-medium">{product.circularity.recyclability}%</span>
                </div>
                <div className="h-2.5 md:h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-[#2e7d32]" style={{ width: `${product.circularity.recyclability}%` }} />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs md:text-sm text-muted-foreground">Repairability</span>
                  <span className="text-sm md:text-base font-medium">{product.circularity.repairability}%</span>
                </div>
                <div className="h-2.5 md:h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-[#66bb6a]" style={{ width: `${product.circularity.repairability}%` }} />
                </div>
              </div>
            </div>

            {product.circularity.replaceableParts.length > 0 && (
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-secondary/10 rounded-lg md:rounded-xl">
                <div className="flex items-start gap-2 md:gap-3">
                  <Wrench className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm md:text-base font-medium mb-1">Replaceable Parts</div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {product.circularity.replaceableParts.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 text-base md:text-lg">Lifecycle Timeline</h3>

            <div className="relative">
              <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-4 md:space-y-6">
                {lifecycleStages.map((stage, index) => (
                  <div key={index} className="relative flex items-start gap-3 md:gap-4">
                    <div
                      className={`relative z-10 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        stage.status === 'complete'
                          ? 'bg-[#2e7d32]'
                          : stage.status === 'active'
                          ? 'bg-primary'
                          : 'bg-muted border-2 border-border'
                      }`}
                    >
                      {stage.status !== 'pending' && (
                        <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1 pt-0.5 md:pt-1">
                      <div className="text-sm md:text-base font-medium">{stage.stage}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stage.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Compliance & Certifications
            </h3>

            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {product.compliance.certifications.map((cert) => (
                <div
                  key={cert}
                  className="aspect-square bg-muted rounded-lg md:rounded-xl flex items-center justify-center p-2 md:p-3 border border-border"
                >
                  <div className="text-center">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary mx-auto mb-1" />
                    <div className="text-xs font-medium">{cert}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg">
              <Recycle className="w-5 h-5 text-primary" />
              Disposal & Recycling
            </h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {product.circularity.takeBackProgram}. Proper disposal helps support circular economy principles.
            </p>

            <div className="space-y-2 md:space-y-3">
              {product.disposal.guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3 p-2.5 md:p-3 bg-secondary/10 rounded-lg">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/20 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-xs">♻️</span>
                  </div>
                  <div className="text-xs md:text-sm">
                    <div className="text-muted-foreground">{guideline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 text-base md:text-lg">Warranty & Support</h3>

            <div className="space-y-2 md:space-y-3">
              <InfoRow label="Warranty Period" value={product.warranty.period} />
              <InfoRow label="Support" value={product.warranty.support} />
              <InfoRow label="Activated" value={product.warranty.activated} />
              {product.circularity.refurbishment && <InfoRow label="Refurbishment" value="Available" />}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
            <h3 className="mb-4 flex items-center gap-2 text-base md:text-lg">
              <QrCode className="w-5 h-5 text-primary" />
              Blockchain Verification
            </h3>

            <div className="space-y-3 md:space-y-4">
              <div>
                <div className="text-xs md:text-sm text-muted-foreground mb-1">Blockchain ID</div>
                <div className="font-mono text-xs md:text-sm bg-muted px-2.5 md:px-3 py-2 rounded-lg break-all">
                  {product.verification.blockchainId}
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-[#2e7d32]/10 rounded-lg md:rounded-xl border border-[#2e7d32]/20">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2e7d32] flex-shrink-0" />
                <div>
                  <div className="text-sm md:text-base font-medium text-[#2e7d32]">Verified on Blockchain</div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Tracking: {product.verification.lifecycleTracking.join(', ')}
                  </div>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 md:py-3 text-sm md:text-base border border-border rounded-lg md:rounded-xl hover:bg-muted transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span>View on Blockchain Explorer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0 gap-3">
      <span className="text-xs md:text-sm text-muted-foreground">{label}</span>
      <span className="text-xs md:text-sm font-medium text-right">{value}</span>
    </div>
  );
}

function MetricCard({ icon, label, value, subtext }: { icon: React.ReactNode; label: string; value: string; subtext: string }) {
  return (
    <div className="p-3 md:p-4 bg-secondary/10 rounded-lg md:rounded-xl">
      <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 text-primary">
        {icon}
        <span className="text-xs md:text-sm">{label}</span>
      </div>
      <div className="text-lg md:text-2xl font-medium mb-0.5">{value}</div>
      <div className="text-xs text-muted-foreground">{subtext}</div>
    </div>
  );
}
