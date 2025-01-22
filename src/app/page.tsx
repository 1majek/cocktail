import Link from 'next/link';
import Image from 'next/image';

const featuredCocktails = [
  {
    name: "Tropical Paradise",
    image: "/cocktail/cocktails/tropical-paradise.jpg",
    description: "A refreshing blend of rum, pineapple, and coconut"
  },
  {
    name: "Island Sunset",
    image: "/cocktail/cocktails/island-sunset.jpg",
    description: "Tequila mixed with tropical fruits and a splash of grenadine"
  },
  {
    name: "Blue Lagoon",
    image: "/cocktail/cocktails/blue-lagoon.jpg",
    description: "Vodka, blue curaçao, and fresh citrus"
  },
  {
    name: "Mango Tango",
    image: "/cocktail/cocktails/mango-tango.jpg",
    description: "Fresh mango, white rum, and lime"
  }
];

export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/cocktail/hero-bg.jpg"
            alt="Cocktail bar atmosphere"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Craft Cocktails & Elegant Atmosphere
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience the art of mixology in a sophisticated setting
            </p>
            <Link
              href="/menu"
              className="inline-block bg-gold-400 text-black px-8 py-3 text-lg font-semibold rounded-full hover:bg-gold-500 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Cocktails Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gold-400">
            Featured Tropical Cocktails
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCocktails.map((cocktail, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-3 aspect-h-4 relative h-[400px]">
                  <Image
                    src={cocktail.image}
                    alt={cocktail.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{cocktail.name}</h3>
                  <p className="text-gray-200 text-sm">{cocktail.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
