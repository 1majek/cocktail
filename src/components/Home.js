import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('/public/hero-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Craft Cocktails & Elegant Atmosphere
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience the art of mixology in a sophisticated setting
            </p>
            <Link
              to="/menu"
              className="inline-block bg-gold-400 text-black px-8 py-3 text-lg font-semibold rounded-full hover:bg-gold-500 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 