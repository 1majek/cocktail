import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/cocktail" className="text-2xl font-bold text-white">
            COCKTAIL BAR
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/cocktail" className="text-white hover:text-gold-400 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/menu" className="text-white hover:text-gold-400 px-3 py-2 text-sm font-medium">
                Menu
              </Link>
              <Link href="/about" className="text-white hover:text-gold-400 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-gold-400 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 