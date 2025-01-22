import { Feature } from '@/types/cocktail';

const features: Feature[] = [
  {
    title: "Craft Cocktails",
    description: "Expertly mixed drinks using premium spirits and fresh ingredients"
  },
  {
    title: "Elegant Atmosphere",
    description: "Sophisticated ambiance perfect for special occasions"
  },
  {
    title: "Expert Mixologists",
    description: "Skilled bartenders with years of experience in craft cocktails"
  }
];

export default function About() {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gold-400">
          About Our Cocktail Bar
        </h1>
        
        <div className="space-y-6 text-lg mb-16">
          <p>
            Welcome to our sophisticated cocktail bar, where artisanal mixology meets elegant ambiance. 
            We&apos;ve created a space that combines classic charm with modern innovation.
          </p>
          
          <p>
            Our expert mixologists craft each drink with precision and creativity, using only the finest 
            ingredients and spirits. We take pride in offering both timeless classics and innovative 
            signature cocktails that push the boundaries of traditional mixology.
          </p>
          
          <p>
            The atmosphere we&apos;ve cultivated is one of refined comfort, where the lighting, music, 
            and decor come together to create the perfect setting for everything from intimate 
            conversations to celebratory gatherings.
          </p>
          
          <p>
            Whether you&apos;re a cocktail enthusiast or new to the world of craft beverages, 
            our knowledgeable staff is here to guide you through our menu and help you discover 
            your perfect drink.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/30 border border-gold-400/20 rounded-lg p-6 hover:border-gold-400/40 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3 text-gold-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 