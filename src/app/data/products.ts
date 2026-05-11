export interface Product {
  id: string;
  name: string;
  modelId: string;
  category: string;
  image: string;
  score: number;
  grade: string;
  tags: string[];
  description: string;

  // Product Details
  modelName: string;
  serialNumber: string;
  manufacturingDate: string;
  batchNumber: string;
  manufacturingLocation: string;

  // Specifications
  specifications: {
    connectivity?: string;
    driverSize?: string;
    batteryLife?: string;
    chargingPort?: string;
    weight: string;
    anc?: string;
    waterResistance?: string;
  };

  // Materials
  materials: {
    primary: string[];
    hazardousCompliance: string;
    packaging: string;
  };

  // Origin
  origin: {
    country: string;
    facility: string;
    sourcing: string[];
    laborStandards: string;
  };

  // Environmental Impact
  environmental: {
    carbonFootprint: string;
    energyConsumption: string;
    ecoDesign: string;
    packagingReduction: string;
  };

  // Circularity
  circularity: {
    recyclability: number;
    repairability: number;
    replaceableParts: string[];
    takeBackProgram: string;
    refurbishment: boolean;
  };

  // Compliance
  compliance: {
    certifications: string[];
    safetyStandards: string;
    qualityAssurance: string;
  };

  // Disposal
  disposal: {
    guidelines: string[];
  };

  // Warranty
  warranty: {
    period: string;
    support: string;
    activated: string;
  };

  // Verification
  verification: {
    blockchainId: string;
    lifecycleTracking: string[];
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'MPOW Rose Pink Headphones',
    modelId: 'MPW-ROS-2024-00147',
    category: 'Consumer Electronic Device',
    image: "/img-srcs/mpow-headphone-rose.webp",
    score: 87,
    grade: 'A',
    tags: ['Recyclable', 'Low Carbon', 'Repairable'],
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life',

    modelName: 'MPOW Rose Pink HC5 Pro',
    serialNumber: 'MPW-RP-483920174',
    manufacturingDate: 'March 15, 2024',
    batchNumber: 'CN-SZ-240315-HC5',
    manufacturingLocation: 'Shenzhen, China',

    specifications: {
      connectivity: 'Bluetooth 5.3',
      driverSize: '40mm Titanium Drivers',
      batteryLife: 'Up to 30 hours',
      chargingPort: 'USB-C Fast Charging (2 hours full charge)',
      weight: '245g',
      anc: '35dB',
      waterResistance: 'IPX5',
    },

    materials: {
      primary: [
        '75% Recycled Plastic (ear cups & housing)',
        'Rose Gold Aluminum Frame',
        'Memory Foam (ear cushions)',
      ],
      hazardousCompliance: 'RoHS compliant (no lead, mercury, cadmium)',
      packaging: '100% recyclable cardboard, soy-based inks',
    },

    origin: {
      country: 'China',
      facility: 'Shenzhen AudioTech Electronics Co., Ltd.',
      sourcing: [
        'Aluminum sourced from certified low-impact mining suppliers',
        'Plastics sourced from post-consumer recycled streams',
      ],
      laborStandards: 'Compliant with international labor and ethical sourcing guidelines',
    },

    environmental: {
      carbonFootprint: '2.1 kg CO₂e per unit',
      energyConsumption: 'Optimized low-power Bluetooth chipset',
      ecoDesign: 'Modular components for easy repair',
      packagingReduction: '40% less plastic vs previous model',
    },

    circularity: {
      recyclability: 95,
      repairability: 85,
      replaceableParts: ['Ear cushions', 'Battery module', 'Headband padding'],
      takeBackProgram: 'Available via MPOW recycling partners',
      refurbishment: true,
    },

    compliance: {
      certifications: ['CE', 'FCC', 'RoHS', 'WEEE'],
      safetyStandards: 'IEC 62368-1 compliant',
      qualityAssurance: 'ISO 9001 certified manufacturing',
    },

    disposal: {
      guidelines: [
        'Do not dispose in household waste',
        'Return via authorized e-waste collection points',
        'Battery must be removed and recycled separately',
        'Participate in MPOW take-back or trade-in programs',
        'Follow local WEEE recycling regulations',
      ],
    },

    warranty: {
      period: '24 Months',
      support: 'Lifetime Firmware Updates, Global Support',
      activated: 'October 15, 2024',
    },

    verification: {
      blockchainId: 'MPW-ROS-2024-00147',
      lifecycleTracking: ['Ownership history', 'Repair records', 'Recycling status'],
    },
  },
  {
    id: '2',
    name: 'Apple Watch Series 9',
    modelId: 'APL-WCH-S9-2024-00021',
    category: 'Consumer Electronic Device',
    image: "/img-srcs/apple-watch-series-9.jpg",
    score: 92,
    grade: 'A',
    tags: ['Recyclable', 'Repairable', 'Carbon Neutral'],
    description: 'Premium smartwatch with advanced health tracking, GPS, and seamless ecosystem integration',

    modelName: 'Apple Watch Series 9 GPS + Cellular',
    serialNumber: 'APL-S9-948302174',
    manufacturingDate: 'February 10, 2024',
    batchNumber: 'CN-GD-240210-S9',
    manufacturingLocation: 'Guangdong, China',

    specifications: {
      connectivity: 'Bluetooth 5.3, Wi-Fi, LTE',
      batteryLife: 'Up to 18 hours',
      chargingPort: 'Magnetic Fast Charger',
      weight: '42g',
      waterResistance: '50m',
    },

    materials: {
      primary: ['Recycled Aluminum Case', 'Ion-X Glass Display', 'Fluoroelastomer Band'],
      hazardousCompliance: 'RoHS compliant (no lead, mercury, cadmium)',
      packaging: '100% fiber-based, plastic-free packaging',
    },

    origin: {
      country: 'China',
      facility: 'Apple Supplier Assembly Lines',
      sourcing: ['Aluminum sourced from certified recycled sources', 'Rare earth elements sourced responsibly'],
      laborStandards: 'Compliant with international labor and ethical sourcing guidelines',
    },

    environmental: {
      carbonFootprint: '3.5 kg CO₂e per unit',
      energyConsumption: 'Optimized low-power chipset',
      ecoDesign: 'Carbon-neutral product options available',
      packagingReduction: 'Eliminated plastic packaging',
    },

    circularity: {
      recyclability: 90,
      repairability: 70,
      replaceableParts: ['Battery module', 'Watch band', 'Display module'],
      takeBackProgram: 'Available via Apple Trade-In program',
      refurbishment: true,
    },

    compliance: {
      certifications: ['CE', 'FCC', 'RoHS', 'WEEE'],
      safetyStandards: 'IEC compliant',
      qualityAssurance: 'ISO 9001 certified manufacturing',
    },

    disposal: {
      guidelines: [
        'Do not dispose in household waste',
        'Return via authorized e-waste collection points',
        'Battery must be removed and recycled separately',
        'Participate in Apple trade-in programs',
        'Follow local WEEE recycling regulations',
      ],
    },

    warranty: {
      period: '12 Months',
      support: 'Regular Software Updates, Global Support',
      activated: 'March 1, 2024',
    },

    verification: {
      blockchainId: 'APL-WCH-S9-2024-00021',
      lifecycleTracking: ['Ownership history', 'Repair records', 'Recycling status'],
    },
  },
  {
    id: '3',
    name: 'Dove Deeply Nourishing Body Wash',
    modelId: 'DOV-BW-2024-00311',
    category: 'Personal Care & Hygiene',
    image: "/img-srcs/dove-deeply-nourishing-bodywash.avif",
    score: 78,
    grade: 'B',
    tags: ['Low Carbon', 'Sustainable'],
    description: 'Moisturizing body wash formulated for gentle skin care and daily hydration',

    modelName: 'Dove Deeply Nourishing 1L',
    serialNumber: 'DOV-PL-829301',
    manufacturingDate: 'January 5, 2024',
    batchNumber: 'PH-MNL-240105-DV',
    manufacturingLocation: 'Manila, Philippines',

    specifications: {
      weight: '1kg',
    },

    materials: {
      primary: ['Recyclable PET Plastic Bottle', 'Surfactant-based cleansing agents', 'Fragrance compounds'],
      hazardousCompliance: 'Compliant with ASEAN cosmetic safety standards',
      packaging: '100% recyclable plastic bottle',
    },

    origin: {
      country: 'Philippines',
      facility: 'Unilever Philippines Manufacturing Plant',
      sourcing: ['Palm oil sourced from certified sustainable suppliers'],
      laborStandards: 'Compliant with ethical sourcing standards',
    },

    environmental: {
      carbonFootprint: '0.8 kg CO₂e per unit',
      energyConsumption: 'Optimized manufacturing processes',
      ecoDesign: 'Reduced plastic packaging',
      packagingReduction: '25% less plastic vs previous model',
    },

    circularity: {
      recyclability: 85,
      repairability: 0,
      replaceableParts: [],
      takeBackProgram: 'Available via local recycling partners',
      refurbishment: false,
    },

    compliance: {
      certifications: ['FDA Philippines', 'ASEAN Cosmetic Directive', 'RoHS'],
      safetyStandards: 'Dermatologically tested',
      qualityAssurance: 'ISO certified manufacturing',
    },

    disposal: {
      guidelines: ['Rinse and recycle bottle', 'Avoid burning plastic waste', 'Follow local recycling regulations'],
    },

    warranty: {
      period: '24 Months Shelf Life',
      support: 'Consumer Support Available, Global Brand Support',
      activated: 'January 10, 2024',
    },

    verification: {
      blockchainId: 'DOV-BW-2024-00311',
      lifecycleTracking: ['Supply chain tracking', 'Recycling status'],
    },
  },
  {
    id: '4',
    name: 'IKEA VITTSJÖ Coffee Table',
    modelId: 'IKEA-VT-2024-00981',
    category: 'Home Goods',
    image: "/img-srcs/ikea-vittsjö-coffee-table.avif",
    score: 85,
    grade: 'A',
    tags: ['Recyclable', 'Repairable', 'Low Carbon'],
    description: 'Minimalist coffee table with tempered glass top and durable metal frame',

    modelName: 'VITTSJÖ Coffee Table',
    serialNumber: 'IKEA-VT-293847',
    manufacturingDate: 'March 20, 2024',
    batchNumber: 'MY-JH-240320-VT',
    manufacturingLocation: 'Johor, Malaysia',

    specifications: {
      weight: '12kg',
    },

    materials: {
      primary: ['Steel Frame', 'Tempered Glass', 'Powder Coating Finish'],
      hazardousCompliance: 'RoHS compliant',
      packaging: 'Recyclable cardboard packaging',
    },

    origin: {
      country: 'Malaysia',
      facility: 'IKEA Supply Chain Manufacturer',
      sourcing: ['Steel sourced from recycled materials', 'Glass sourced responsibly'],
      laborStandards: 'Compliant with international labor standards',
    },

    environmental: {
      carbonFootprint: '5.2 kg CO₂e per unit',
      energyConsumption: 'Optimized production lines',
      ecoDesign: 'Flat-pack reduces transport emissions',
      packagingReduction: '30% less packaging waste',
    },

    circularity: {
      recyclability: 95,
      repairability: 80,
      replaceableParts: ['Glass top', 'Frame components'],
      takeBackProgram: 'Available via IKEA recycling program',
      refurbishment: true,
    },

    compliance: {
      certifications: ['FSC', 'ISO', 'RoHS'],
      safetyStandards: 'Furniture safety compliant',
      qualityAssurance: 'ISO 9001 certified',
    },

    disposal: {
      guidelines: ['Do not dispose in mixed waste', 'Separate glass and metal for recycling', 'Use furniture recycling programs'],
    },

    warranty: {
      period: '12 Months',
      support: 'Customer Support Available',
      activated: 'April 1, 2024',
    },

    verification: {
      blockchainId: 'IKEA-VT-2024-00981',
      lifecycleTracking: ['Ownership history', 'Repair records', 'Recycling status'],
    },
  },
  {
    id: '5',
    name: 'Corelle Livingware 16-Piece Set',
    modelId: 'CRL-DW-2024-00422',
    category: 'Kitchenware',
    image: "/img-srcs/corelle-livingware-16-piece-set.webp",
    score: 81,
    grade: 'B',
    tags: ['Recyclable', 'Durable'],
    description: 'Durable, lightweight, and chip-resistant glass dinnerware set for everyday use',

    modelName: 'Corelle Livingware Classic White Set',
    serialNumber: 'CRL-GW-582910',
    manufacturingDate: 'February 25, 2024',
    batchNumber: 'US-PA-240225-CRL',
    manufacturingLocation: 'Pennsylvania, USA',

    specifications: {
      weight: '6.5kg (set)',
    },

    materials: {
      primary: ['Vitrelle Tempered Glass', 'Triple-layer glass laminate'],
      hazardousCompliance: 'Lead-free and cadmium-free',
      packaging: 'Recyclable cardboard packaging',
    },

    origin: {
      country: 'USA',
      facility: 'Corelle Brands Manufacturing Plant',
      sourcing: ['Glass sourced from high-purity raw materials'],
      laborStandards: 'Compliant with international labor and safety standards',
    },

    environmental: {
      carbonFootprint: '2.9 kg CO₂e per unit',
      energyConsumption: 'High-efficiency glass tempering process',
      ecoDesign: 'Long lifespan reduces replacement frequency',
      packagingReduction: '20% less packaging material',
    },

    circularity: {
      recyclability: 80,
      repairability: 20,
      replaceableParts: ['Individual plates and bowls'],
      takeBackProgram: 'Not widely available',
      refurbishment: false,
    },

    compliance: {
      certifications: ['FDA Food Safe', 'Prop 65', 'RoHS'],
      safetyStandards: 'Food-grade safety certified',
      qualityAssurance: 'ISO certified manufacturing',
    },

    disposal: {
      guidelines: ['Check local recycling rules for tempered glass', 'Reuse or donate if possible'],
    },

    warranty: {
      period: '12 Months',
      support: 'Customer Support Available',
      activated: 'March 5, 2024',
    },

    verification: {
      blockchainId: 'CRL-DW-2024-00422',
      lifecycleTracking: ['Ownership history', 'Usage lifecycle', 'Recycling status'],
    },
  },
  {
    id: '6',
    name: 'LEGO Classic Medium Creative Brick Box',
    modelId: 'LEGO-10696-2024',
    category: 'Toys',
    image: "/img-srcs/lego-classic-medium-creative-brick-box.jpg",
    score: 75,
    grade: 'B',
    tags: ['Recyclable', 'Reusable'],
    description: 'Creative building block set designed to inspire imagination and learning in children',

    modelName: 'LEGO Classic 10696',
    serialNumber: 'LEGO-PL-774920',
    manufacturingDate: 'January 18, 2024',
    batchNumber: 'CZ-KL-240118-LG',
    manufacturingLocation: 'Kladno, Czech Republic',

    specifications: {
      weight: '1.2kg',
    },

    materials: {
      primary: ['ABS Plastic Bricks', 'Polyethylene packaging'],
      hazardousCompliance: 'Compliant with global toy safety regulations',
      packaging: 'Recyclable cardboard and plastic mix',
    },

    origin: {
      country: 'Czech Republic',
      facility: 'LEGO Production Plant',
      sourcing: ['Materials sourced from certified suppliers'],
      laborStandards: 'Compliant with international labor standards',
    },

    environmental: {
      carbonFootprint: '1.5 kg CO₂e per unit',
      energyConsumption: 'Optimized manufacturing processes',
      ecoDesign: 'Transitioning to plant-based plastics',
      packagingReduction: 'Reduced plastic bags',
    },

    circularity: {
      recyclability: 70,
      repairability: 60,
      replaceableParts: ['Individual bricks'],
      takeBackProgram: 'LEGO Replay program available',
      refurbishment: true,
    },

    compliance: {
      certifications: ['CE Toy Safety', 'ASTM F963', 'RoHS', 'EN71'],
      safetyStandards: 'EN71 compliant',
      qualityAssurance: 'ISO certified',
    },

    disposal: {
      guidelines: ['Reuse, donate, or recycle where possible', 'Avoid burning plastic components'],
    },

    warranty: {
      period: 'No fixed warranty',
      support: 'Customer Support Available',
      activated: 'February 1, 2024',
    },

    verification: {
      blockchainId: 'LEGO-10696-2024',
      lifecycleTracking: ['Ownership history', 'Reuse tracking', 'Recycling status'],
    },
  },
  {
    id: '7',
    name: 'Philips Airfryer HD9200',
    modelId: 'PH-AF-2024-00811',
    category: 'Appliances',
    image: "/img-srcs/philips-airfryer-hd9200.webp",
    score: 88,
    grade: 'A',
    tags: ['Recyclable', 'Repairable', 'Energy Efficient'],
    description: 'Energy-efficient air fryer designed for low-oil cooking and healthier meals',

    modelName: 'Philips Airfryer HD9200/90',
    serialNumber: 'PH-AF-992104',
    manufacturingDate: 'March 8, 2024',
    batchNumber: 'CN-SZ-240308-AF',
    manufacturingLocation: 'Shenzhen, China',

    specifications: {
      weight: '4.5kg',
    },

    materials: {
      primary: ['Plastic Housing', 'Metal Heating Element', 'Non-stick coated basket'],
      hazardousCompliance: 'RoHS compliant',
      packaging: 'Recyclable cardboard packaging',
    },

    origin: {
      country: 'China',
      facility: 'Philips Manufacturing Plant',
      sourcing: ['Materials sourced from certified suppliers'],
      laborStandards: 'Compliant with international labor guidelines',
    },

    environmental: {
      carbonFootprint: '6.8 kg CO₂e per unit',
      energyConsumption: '1400W optimized heating system',
      ecoDesign: 'Reduced oil usage lowers environmental impact',
      packagingReduction: '25% less plastic',
    },

    circularity: {
      recyclability: 85,
      repairability: 75,
      replaceableParts: ['Basket', 'Heating element', 'Control panel'],
      takeBackProgram: 'Available via Philips recycling partners',
      refurbishment: true,
    },

    compliance: {
      certifications: ['CE', 'FCC', 'RoHS', 'WEEE'],
      safetyStandards: 'IEC 60335 compliant',
      qualityAssurance: 'ISO 9001 certified manufacturing',
    },

    disposal: {
      guidelines: [
        'Do not dispose in household waste',
        'Return to e-waste recycling centers',
        'Separate electronic components properly',
        'Participate in take-back programs',
      ],
    },

    warranty: {
      period: '24 Months',
      support: 'Global Support',
      activated: 'March 15, 2024',
    },

    verification: {
      blockchainId: 'PH-AF-2024-00811',
      lifecycleTracking: ['Ownership history', 'Repair records', 'Recycling status'],
    },
  },
  {
    id: '8',
    name: 'Samsung Galaxy A54 5G',
    modelId: 'SMS-A54-2024-00123',
    category: 'Consumer Electronic Device',
    image: "/img-srcs/samsung-galaxy-a54-5g.webp",
    score: 86,
    grade: 'A',
    tags: ['Recyclable', 'Repairable', 'Low Carbon'],
    description: 'Mid-range smartphone with 5G connectivity, long battery life, and extended software support',

    modelName: 'Galaxy A54 5G',
    serialNumber: 'SMS-A54-883920',
    manufacturingDate: 'February 28, 2024',
    batchNumber: 'VN-HN-240228-SMS',
    manufacturingLocation: 'Hanoi, Vietnam',

    specifications: {
      connectivity: '5G, Bluetooth 5.3, Wi-Fi',
      batteryLife: 'Up to 2 days usage',
      chargingPort: 'USB-C Fast Charging',
      weight: '202g',
      waterResistance: 'IP67',
    },

    materials: {
      primary: ['Gorilla Glass front/back', 'Aluminum frame', 'Lithium-ion battery'],
      hazardousCompliance: 'RoHS compliant',
      packaging: 'Recyclable packaging materials',
    },

    origin: {
      country: 'Vietnam',
      facility: 'Samsung Electronics Manufacturing Plant',
      sourcing: ['Metals sourced from certified suppliers', 'Plastics sourced responsibly'],
      laborStandards: 'Compliant with global labor standards',
    },

    environmental: {
      carbonFootprint: '4.8 kg CO₂e per unit',
      energyConsumption: 'Energy-efficient processor',
      ecoDesign: 'Reduced packaging and charger omission',
      packagingReduction: '30% less packaging',
    },

    circularity: {
      recyclability: 90,
      repairability: 75,
      replaceableParts: ['Battery module', 'Display', 'Camera module'],
      takeBackProgram: 'Samsung recycling program available',
      refurbishment: true,
    },

    compliance: {
      certifications: ['CE', 'FCC', 'RoHS', 'WEEE'],
      safetyStandards: 'IEC 62368-1 compliant',
      qualityAssurance: 'ISO 9001 certified manufacturing',
    },

    disposal: {
      guidelines: [
        'Do not dispose in household waste',
        'Return to authorized e-waste centers',
        'Battery must be recycled separately',
        'Participate in trade-in programs',
        'Follow local WEEE recycling regulations',
      ],
    },

    warranty: {
      period: '24 Months',
      support: 'Software Updates Supported, Global Support',
      activated: 'March 10, 2024',
    },

    verification: {
      blockchainId: 'SMS-A54-2024-00123',
      lifecycleTracking: ['Ownership history', 'Repair records', 'Recycling status'],
    },
  },
  {
    id: '9',
    name: 'Sony DualShock 3 Wireless Controller',
    modelId: 'SONY-DS3-2009-00231',
    category: 'Consumer Electronic Device',
    image: '/img-srcs/ps4-controller.jpg',
    score: 88,
    grade: 'A',
    tags: ['Recyclable', 'Repairable', 'Low Carbon'],
    description: 'Wireless gaming controller designed for PlayStation gaming consoles with Bluetooth connectivity, dual analog sticks, vibration feedback, and rechargeable battery support',

    modelName: 'Sony DualShock 3 Wireless Controller',
    serialNumber: 'SNY-483920880155',
    manufacturingDate: 'August 12, 2009',
    batchNumber: 'JP-CN-090812-DS3',
    manufacturingLocation: 'China',

    specifications: {
      connectivity: 'Bluetooth Wireless / Mini-USB Wired Connection',
      batteryLife: 'Rechargeable Lithium-Ion Battery',
      chargingPort: 'Mini-USB',
      weight: '192g',
    },

    materials: {
      primary: [
        'ABS Plastic Housing',
        'Rubberized Analog Stick Covers',
        'Silicone Conductive Button Pads',
        'Copper Internal Wiring',
        'Rechargeable Lithium-Ion Battery Pack',
      ],
      hazardousCompliance: 'RoHS Compliant, Lead-free soldering process',
      packaging: 'Recyclable cardboard packaging, minimal plastic insert materials',
    },

    origin: {
      country: 'China',
      facility: 'Sony Computer Entertainment Inc.',
      sourcing: [
        'Electronic components sourced from certified suppliers',
        'Plastic materials sourced from industrial-grade recyclable polymers',
      ],
      laborStandards: 'Manufactured under international workplace and ethical sourcing standards',
    },

    environmental: {
      carbonFootprint: '1.8 kg CO₂e per unit',
      energyConsumption: 'Low-power Bluetooth technology for extended battery efficiency',
      ecoDesign: 'Replaceable battery and modular internal components',
      packagingReduction: 'Reduced plastic packaging compared to previous controller packaging designs',
    },

    circularity: {
      recyclability: 90,
      repairability: 80,
      replaceableParts: ['Analog stick caps', 'Internal battery', 'Button membranes', 'USB charging port'],
      takeBackProgram: 'Eligible through authorized Sony e-waste and electronics recycling partners',
      refurbishment: true,
    },

    compliance: {
      certifications: ['FCC', 'CE', 'RoHS', 'WEEE'],
      safetyStandards: 'IEC Electronic Device Safety Standards compliant',
      qualityAssurance: 'ISO-certified manufacturing process',
    },

    disposal: {
      guidelines: [
        'Do not dispose with household waste',
        'Return to certified e-waste recycling facilities',
        'Battery should be removed and recycled separately',
        'Participate in authorized electronics recycling programs',
        'Follow local WEEE and e-waste disposal regulations',
      ],
    },

    warranty: {
      period: '12 Months',
      support: 'Global Sony Support Services, Firmware Support through PlayStation system software updates',
      activated: 'August 20, 2009',
    },

    verification: {
      blockchainId: 'SONY-DS3-2009-00231',
      lifecycleTracking: ['Ownership registration', 'Repair and maintenance history', 'Battery replacement records', 'Recycling and refurbishment status'],
    },
  },
  {
    id: '10',
    name: 'Logitech MK120 Wired Keyboard and Mouse Combo',
    modelId: 'LOG-MK120-2025-01472',
    category: 'Consumer Electronic Device',
    image: '/img-srcs/logitech-keyboard.webp',
    score: 76,
    grade: 'B',
    tags: ['Recyclable', 'Repairable', 'Durable'],
    description: 'Durable full-size wired keyboard and optical mouse combo designed for office, educational, and everyday computing use',

    modelName: 'Logitech MK120 Wired Desktop Combo',
    serialNumber: 'MK120-552981-PH',
    manufacturingDate: 'January 18, 2025',
    batchNumber: 'CN-SZ-250118-MK',
    manufacturingLocation: 'Suzhou, China',

    specifications: {
      connectivity: 'Wired USB-A',
      weight: '0.82kg',
      waterResistance: 'Spill-resistant keyboard design',
    },

    materials: {
      primary: [
        'ABS Plastic Housing',
        'Silicone Membrane Keys',
        'Electronic PCB Components',
        'Copper Wiring',
        'Rubber Mouse Grip Components',
      ],
      hazardousCompliance: 'RoHS compliant',
      packaging: 'Recyclable cardboard and paper-based inserts',
    },

    origin: {
      country: 'China',
      facility: 'Logitech Certified Manufacturing Facility',
      sourcing: ['Components sourced from audited suppliers'],
      laborStandards: 'Compliant with international labor and workplace safety standards',
    },

    environmental: {
      carbonFootprint: '4.1 kg CO₂e per unit',
      energyConsumption: 'Low-power USB operation',
      ecoDesign: 'Durable long-life membrane switches reduce replacement frequency',
      packagingReduction: '30% reduced single-use plastic packaging',
    },

    circularity: {
      recyclability: 78,
      repairability: 60,
      replaceableParts: ['USB cable', 'Keycaps', 'Optical sensor module', 'Mouse switches'],
      takeBackProgram: 'Available through Logitech recycling initiatives',
      refurbishment: true,
    },

    compliance: {
      certifications: ['CE', 'FCC', 'RoHS', 'WEEE'],
      safetyStandards: 'IEC 62368-1 compliant',
      qualityAssurance: 'ISO 9001 certified manufacturing',
    },

    disposal: {
      guidelines: [
        'Do not dispose with regular household waste',
        'Return to certified e-waste recycling facilities',
        'Separate plastic and electronic components when possible',
        'Participate in manufacturer recycling and take-back programs',
      ],
    },

    warranty: {
      period: '36 Months',
      support: 'Global Logitech Support Services',
      activated: 'January 25, 2025',
    },

    verification: {
      blockchainId: 'LOG-MK120-2025-01472',
      lifecycleTracking: ['Ownership history', 'Repair and maintenance records', 'Refurbishment status', 'Recycling and disposal tracking'],
    },
  },
];
