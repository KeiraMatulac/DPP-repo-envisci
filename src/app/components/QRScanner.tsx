import { QrCode, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function QRScanner() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      navigate('/product/1');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3">QR Code Scanner</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Scan a product QR code to view its Digital Product Passport
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
          <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 relative flex items-center justify-center">
            {!isScanning ? (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary rounded-xl md:rounded-2xl relative">
                    <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-4 border-l-4 border-primary rounded-tl-lg md:rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-4 border-r-4 border-primary rounded-tr-lg md:rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-4 border-l-4 border-primary rounded-bl-lg md:rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-4 border-r-4 border-primary rounded-br-lg md:rounded-br-xl" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <QrCode className="w-16 h-16 md:w-24 md:h-24 text-muted-foreground/30" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 md:top-8 left-4 md:left-8 right-4 md:right-8 flex items-center justify-between">
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-card/90 backdrop-blur rounded-lg md:rounded-xl border border-border">
                    <Camera className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-card/90 backdrop-blur rounded-lg md:rounded-xl border border-border text-xs md:text-sm">
                    Camera Active
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3 md:mb-4" />
                <p className="text-base md:text-lg font-medium">Scanning...</p>
              </div>
            )}
          </div>

          <div className="p-4 md:p-6 bg-card">
            <p className="text-center text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              Position the QR code within the frame to scan
            </p>

            <button
              onClick={handleSimulateScan}
              disabled={isScanning}
              className="w-full px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-primary text-primary-foreground rounded-lg md:rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isScanning ? 'Scanning...' : 'Simulate QR Scan (Demo)'}
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-4">
          {[
            { icon: '', text: 'High accuracy scanning' },
            { icon: '', text: 'Instant verification' },
            { icon: '', text: 'Secure & private' },
          ].map((feature, i) => (
            <div key={i} className="text-center p-3 md:p-4">
              <div className="text-2xl md:text-3xl mb-1 md:mb-2">{feature.icon}</div>
              <p className="text-xs md:text-sm text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
