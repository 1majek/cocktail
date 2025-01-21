const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a question or want to make a reservation? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm border border-gold-400/20 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/50 border border-gold-400/20 rounded-lg px-4 py-2 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-gold-400/20 rounded-lg px-4 py-2 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black/50 border border-gold-400/20 rounded-lg px-4 py-2 text-white focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold-400">Location</h3>
              <p className="text-gray-300">123 Cocktail Street</p>
              <p className="text-gray-300">New York, NY 10001</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold-400">Hours</h3>
              <p className="text-gray-300">Tuesday - Thursday: 5pm - 12am</p>
              <p className="text-gray-300">Friday - Saturday: 5pm - 2am</p>
              <p className="text-gray-300">Sunday - Monday: Closed</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gold-400">Contact</h3>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
              <p className="text-gray-300">Email: info@cocktailbar.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 