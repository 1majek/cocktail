'use client';

import { useState, FormEvent } from 'react';
import { ContactForm } from '@/types/cocktail';

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gold-400">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg">
              We&apos;d love to hear from you! Whether you&apos;re interested in making a 
              reservation, planning a special event, or have any questions about our 
              cocktail bar, please don&apos;t hesitate to reach out.
            </p>
            
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gold-400">Location</h2>
              <p>123 Cocktail Street</p>
              <p>New York, NY 10001</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gold-400">Hours</h2>
              <p>Tuesday - Thursday: 5pm - 12am</p>
              <p>Friday - Saturday: 5pm - 2am</p>
              <p>Sunday: 4pm - 11pm</p>
              <p>Monday: Closed</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gold-400">Contact</h2>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@cocktailbar.com</p>
            </div>
          </div>
          
          <div className="bg-black/30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gold-400">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-gold-400/20 rounded p-2 focus:border-gold-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/50 border border-gold-400/20 rounded p-2 focus:border-gold-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/50 border border-gold-400/20 rounded p-2 focus:border-gold-400 focus:outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold-400 text-black py-2 px-4 rounded hover:bg-gold-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 