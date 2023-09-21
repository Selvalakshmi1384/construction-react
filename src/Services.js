// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Service 1</h3>
            <p className="text-gray-700">Description of Service 1.</p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Service 2</h3>
            <p className="text-gray-700">Description of Service 2.</p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
            <p className="text-gray-700">Description of Service 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
