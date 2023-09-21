import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-8 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOe-RS4kgpAXMIj7OPHTHQ8rjUHE3BeO88J0bH3ZL&s")'}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-bold mb-4">About Us</h2>
        <p className="text-black text-2xl leading-relaxed">
        Our team of highly skilled professionals, including architects, engineers, and project managers, work collaboratively to ensure every project is executed with precision and quality craftsmanship. We take pride in our attention to detail and adherence to industry-best practices, resulting in structures that not only meet but exceed our client's expectations.
        At Selva's Construction, we prioritize innovation and sustainability, incorporating cutting-edge technologies and eco-friendly practices into our projects. This not only enhances the efficiency and longevity of our constructions but also reflects our commitment to a greener future.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
