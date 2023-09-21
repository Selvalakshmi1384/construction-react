import React from 'react';

const Services = () => {
  return (
    <section className="py-12 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOe-RS4kgpAXMIj7OPHTHQ8rjUHE3BeO88J0bH3ZL&s")'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Residential Construction</h3>
            <img src="resedential.jpg" alt="Residential Construction" className="mb-4 rounded-lg" />
           <p className="text-gray-700">Our experienced team specializes in crafting dream homes tailored to your unique preferences. From concept to completion, we handle everything, ensuring top-quality materials and impeccable craftsmanship. Whether it's a cozy cottage or a luxurious villa, we bring your vision to life.</p>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Commercial Building</h3>
            <img src="commercial.jpg" alt="Commercial Building" className="mb-4 rounded-lg" />
           
            <p className="text-gray-700">We excel in delivering high-quality commercial spaces that meet the demands of modern businesses. Our expertise spans from office complexes to retail spaces and industrial facilities. With a focus on functionality, aesthetics, and compliance, we create environments that foster productivity and success.</p>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Renovation and Remodeling</h3>
            <img src="renovation.jpg" alt="Renovation and Remodeling" className="mb-4 rounded-lg" />
            
            <p className="text-gray-700">Transform your existing space into something extraordinary with our renovation and remodeling services. Whether it's a single room or an entire property, we breathe new life into outdated or underutilized spaces. From structural enhancements to interior design, we enhance functionality and aesthetics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
