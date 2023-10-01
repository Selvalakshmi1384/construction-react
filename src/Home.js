import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-8 bg-cover bg-center bg-no-repeat p"style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOe-RS4kgpAXMIj7OPHTHQ8rjUHE3BeO88J0bH3ZL&s")'}}>
      <div className="container mx-auto px-4">
        <h2 className="mt-10 text-6xl font-bold text-black">Welcome to Selva's Construction Services</h2>
        <p className="mt-8 text-2xl text-black leading-relaxed">We provide high-quality construction services...<br/><br/>At Selva's Company, we take pride in delivering top-notch construction services tailored to meet your unique needs. With years of experience in the industry, we have built a solid reputation for excellence, quality craftsmanship, and unmatched attention to detail.</p>
      </div>
    </section>
  );
};

export default Home;
