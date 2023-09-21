import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOe-RS4kgpAXMIj7OPHTHQ8rjUHE3BeO88J0bH3ZL&s")'}}>
    
      <div className="container mx-auto px-4">
        <h2 className="text-black text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-black leading-relaxed">
          For inquiries or to request a quote, please use the form below or contact us at <strong>info@example.com</strong>.
        </p>

        {/* Add your contact form here */}
        <form className="mt-8">
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              id="message"
              placeholder="Your message here..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-400 hover:bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
