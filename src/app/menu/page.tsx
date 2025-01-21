import { Cocktail } from '@/types/cocktail';

const cocktails: Cocktail[] = [
  {
    name: "Classic Martini",
    description: "Gin or vodka, dry vermouth, olive or lemon twist",
    price: "$14",
    category: "Classics"
  },
  {
    name: "Old Fashioned",
    description: "Bourbon, bitters, sugar cube, orange peel",
    price: "$15",
    category: "Classics"
  },
  {
    name: "Golden Hour",
    description: "Aged rum, passion fruit, vanilla, citrus",
    price: "$16",
    category: "Signature"
  },
  {
    name: "Velvet Dream",
    description: "Gin, lavender, elderflower, prosecco",
    price: "$17",
    category: "Signature"
  },
  {
    name: "Smoky Night",
    description: "Mezcal, blackberry, lime, agave",
    price: "$16",
    category: "Signature"
  },
  {
    name: "Midnight Rose",
    description: "Vodka, rose liqueur, lychee, sparkling wine",
    price: "$18",
    category: "Signature"
  }
];

export default function Menu() {
  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient bg-clip-text text-transparent">
          Cocktail Menu
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Each cocktail is crafted with precision and care, using the finest ingredients and techniques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cocktails.map((cocktail, index) => (
          <div
            key={index}
            className="bg-black/50 backdrop-blur-sm border border-gold-400/20 rounded-lg p-6 hover:border-gold-400/40 transition-colors"
          >
            <div className="text-gold-400 text-sm mb-2">{cocktail.category}</div>
            <h3 className="text-xl font-semibold mb-2">{cocktail.name}</h3>
            <p className="text-gray-400 mb-4">{cocktail.description}</p>
            <div className="text-gold-400 font-medium">{cocktail.price}</div>
          </div>
        ))}
      </div>
    </main>
  );
} 