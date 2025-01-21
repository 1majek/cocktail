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
    <main className="pt-24 pb-16">
      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient bg-clip-text text-transparent">
            Our Story
          </h1>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-lg mb-6">
            Founded in 2024, our cocktail bar brings together the art of mixology with an atmosphere of sophistication and style. We believe in creating more than just drinks – we craft experiences.
          </p>
          <p className="text-gray-300 text-lg">
            Every cocktail tells a story, and we're here to help you discover yours. Our expert mixologists combine classic techniques with innovative approaches to create unforgettable flavors.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gold-400/20 rounded-lg p-8 text-center hover:border-gold-400/40 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-gold-400">
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