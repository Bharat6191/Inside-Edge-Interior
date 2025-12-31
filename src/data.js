// Mood Boards Data
export const moodBoards = [
  {
    id: 'modern-eclectic',
    title: 'Modern Eclectic',
    concept: 'Vibrant + Curated',
    description: 'A playful mix of colors, textures, and styles brought together with modern balance.',
    palette: ['#5C5C26', '#D6CFC9', '#A67B5B', '#C96530', '#632A15'],
    images: [
      '/images/uploaded_image_0_1767079152746.jpg', // Main Poster
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=600&auto=format&fit=crop', // Abstract Art/Texture
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop', // Interior Detail
    ],
    orientation: 'left'
  },
  {
    id: 'korean-minimal',
    title: 'Korean Minimal',
    concept: 'Soft + Serene',
    description: 'Clean lines, neutral bases, inspired by traditional art, craft, and culture.',
    palette: ['#F9F8F6', '#EBEBE9', '#D8D4CE', '#8E8680', '#2B2B2B'],
    images: [
      '/images/uploaded_image_1_1767079152746.png',
      'https://images.unsplash.com/photo-1594823677827-9177bed72e5d?auto=format&fit=crop&q=80&w=600', // Ceramic/Vase
      'https://images.unsplash.com/photo-1558346648-9757f2fa4474?auto=format&fit=crop&q=80&w=600', // Stone Texture
    ],
    orientation: 'right'
  },
  {
    id: 'biophilic-luxe',
    title: 'Biophilic Luxe',
    concept: 'Nature + Luxury',
    description: 'Fuses nature and luxury—greenery, natural textures, and rich finishes for calm, elegant living.',
    palette: ['#4F5D3B', '#8C9A74', '#D0CDBC', '#9C8867', '#765C48'],
    images: [
      '/images/uploaded_image_2_1767079152746.png',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop', // Green Luxury
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop', // Leaf/Texture
    ],
    orientation: 'left'
  },
  {
    id: 'industrial-chic',
    title: 'Industrial Chic',
    concept: 'Raw + Elegant',
    description: 'Blends raw textures with modern elegance for edgy, urban style.',
    palette: ['#1A1A1A', '#3E3C3A', '#6B5B4E', '#BDBDBD', '#F2F2F2'],
    images: [
      '/images/uploaded_image_3_1767079152746.png',
      'https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?auto=format&fit=crop&q=80&w=600', // Concrete
      'https://images.unsplash.com/photo-1558346648-9757f2fa4474?auto=format&fit=crop&q=80&w=600', // Material Detail
    ],
    orientation: 'right'
  },
  {
    id: 'mediterranean-blues',
    title: 'Mediterranean Blues',
    concept: 'Vibrant + Sun-soaked',
    description: 'A mix of cobalt, turquoise, and terracotta inspired by coastal warmth.',
    palette: ['#1C2E4A', '#415A77', '#778DA9', '#E0E1DD', '#B5651D'],
    images: [
      '/images/uploaded_image_4_1767079152746.png',
      'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=600&auto=format&fit=crop', // Tiles
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop', // Sea/Texture
    ],
    orientation: 'left'
  }
];

export const portfolioSections = [
  {
    id: 'living-room',
    title: 'Living Room',
    subtitle: 'Heart of the Home',
    description: 'Spaces designed for comfort, conversation, and connection. From minimalist lounges to maximalist gathering spots.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
        title: 'Modern Zen'
      },
      {
        url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800',
        title: 'Eclectic Warmth'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
        title: 'Urban Chic'
      },
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
        title: 'Minimalist Luxe'
      },
      {
        url: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&q=80&w=800',
        title: 'Scandi Light'
      }
    ]
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    subtitle: 'Sanctuary of Rest',
    description: 'Intimate retreats focused on serenity, softness, and personal style.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&q=80&w=800',
        title: 'Muted Earth'
      },
      {
        url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
        title: 'Dark Moody'
      },
      {
        url: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800',
        title: 'Boho Dream'
      },
      {
        url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800',
        title: 'Contemporary Grey'
      }
    ]
  },
  {
    id: 'kitchen-dining',
    title: 'Kitchen & Dining',
    subtitle: 'Gather & Feast',
    description: 'Functional culinary spaces that double as social hubs for family and friends.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
        title: 'Modern Kitchen'
      },
      {
        url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800',
        title: 'Modern Dining'
      },
      {
        url: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800',
        title: 'Wood Textures'
      },
      {
        url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800',
        title: 'Marble Island'
      }
    ]
  }
];
