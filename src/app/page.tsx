import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="hero-bg.jpg"
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
    </main>
  );
}
