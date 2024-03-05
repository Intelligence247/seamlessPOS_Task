interface Product {
    id: number;
    name: string;
    description: string;
    price: number; // Ensures price is a number
    image: string; // Ensures image path is a string
    features: string[]; // Array of feature strings
    additionalDetails: {
      type: string;
      category: string;
      warranty: number; // Ensures warranty is a number
    };
  }
  
  const mockData: Product[] = [
    {
      id: 1,
      name: "Samsung Galaxy A Series",
      description: 'Capture life\'s moments in stunning detail with the triple rear camera system.  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 49.99,
      image: "/phone1.png",
      features: ['Large Display for Immersive Viewing', 'Triple Camera System for Versatile Photography', 'Long-lasting Battery for Uninterrupted Use'],
      additionalDetails: {
        type: "Samsung",
        category: "phone",
        warranty: 2,
      },
  
    },
    {
      id: 2,
      name: "Apple iPhone 12",
      description: 'Experience the power of 5G with the Apple iPhone 12. A14 Bionic chip for blazing fast performance. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 799.99,
      image: "/iphone12.png",
      features: ['5G Connectivity for Ultra-Fast Speeds', 'A14 Bionic Chip for Powerful Performance', 'Super Retina XDR Display for Crisp Visuals'],
      additionalDetails: {
        type: "Apple",
        category: "phone",
        warranty: 1,
      },
    },
    {
      id: 3,
      name: "Google Pixel 5",
      description: 'Capture stunning photos with Night Sight and take your mobile photography to the next level. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 699.99,
      image: "/pixel5.png",
      features: ['Night Sight for Low-Light Photography', 'OLED Display for Vibrant Colors', 'Google Assistant for Smart Assistance'],
      additionalDetails: {
        type: "Google",
        category: "phone",
        warranty: 2,
      },
    },
  
    {
      id: 4,
      name: "OnePlus 9 Pro",
      description: 'Experience flagship performance with the OnePlus 9 Pro. Fluid AMOLED display and Hasselblad camera system. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 899.99,
      image: "/oneplus9pro.png",
      features: ['Fluid AMOLED Display for Smooth Visuals', 'Hasselblad Camera System for Pro Photography', 'Fast Charging for Quick Power-ups'],
      additionalDetails: {
        type: "OnePlus",
        category: "phone",
        warranty: 1,
      },
    },
  
    {
      id: 5,
      name: "Xiaomi Mi 11",
      description: 'Unleash the power of the Snapdragon 888 with the Xiaomi Mi 11. Stunning AMOLED display and versatile camera setup. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 749.99,
      image: "/mi11.png",
      features: ['Snapdragon 888 for Powerful Performance', 'AMOLED Display for Brilliant Colors', 'Versatile Camera Setup for Creative Photography'],
      additionalDetails: {
        type: "Xiaomi",
        category: "phone",
        warranty: 1,
      },
    },
    {
      id: 6,
      name: "Dell Inspiron Desktop",
      description: 'Powerful and reliable, the Dell Inspiron Desktop is designed for productivity and entertainment. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 899.99,
      image: "https://example.com/dell_inspiron_desktop.png",
      features: ['10th Gen Intel Core Processor', 'Large Storage Capacity', 'Integrated Graphics for Smooth Visuals'],
      additionalDetails: {
        type: "Dell",
        category: "pc",
        warranty: 2,
      },
    },
    {
      id: 7,
      name: "HP Pavilion Gaming Desktop",
      description: 'Immerse yourself in gaming with the HP Pavilion Gaming Desktop. Powerful graphics and customizable RGB lighting. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 1299.99,
      image: "https://example.com/hp_pavilion_gaming_desktop.png",
      features: ['NVIDIA GeForce GTX Graphics', 'High Refresh Rate for Smooth Gameplay', 'Upgradeable Design for Future Enhancements'],
      additionalDetails: {
        type: "HP",
        category: "pc",
        warranty: 1,
      },
    },
    {
      id: 8,
      name: "Acer Aspire TC",
      description: 'The Acer Aspire TC offers a balance of performance and affordability. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 599.99,
      image: "https://example.com/acer_aspire_tc.png",
      features: ['Intel Core i5 Processor', 'Expandable Storage Options', 'Compact Form Factor'],
      additionalDetails: {
        type: "Acer",
        category: "pc",
        warranty: 2,
      },
    },
    {
      id: 9,
      name: "Custom-Built Gaming PC",
      description: 'Build your dream gaming rig with our custom-built gaming PC. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante blandit auctor. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.',
      price: 1499.99,
      image: "https://example.com/custom_built_gaming_pc.png",
      features: ['High-End Graphics Card Options', 'RGB Lighting for Personalization', 'Advanced Cooling Solutions'],
      additionalDetails: {
        type: "Custom",
        category: "pc",
        warranty: 1,
      },
    },
    
    
  ];
  
  export default mockData;