import React from 'react';

const BestClient = () => {
  // Sample client data - replace image paths with your actual image paths
  const clients = [
    { id: 1, name: "Martha Smiths", logo: "https://trydo.rainbowit.net/assets/images/brand/brand-01.png" },
    { id: 2, name: "JES Wedding Agency", logo: "https://trydo.rainbowit.net/assets/images/brand/brand-02.png" },
    { id: 3, name: "Hand Crafted Sara Ann", logo: "https://trydo.rainbowit.net/assets/images/brand/brand-03.png" },
    { id: 4, name: "Studio by A.Lin", logo: "https://trydo.rainbowit.net/assets/images/brand/brand-04.png" },
    { id: 5, name: "Fashion Live Style", logo: "https://trydo.rainbowit.net/assets/images/brand/brand-05.png" },
    { id: 6, name: "Pure James Handmade", logo: "https://trydo.rainbowit.net/assets/images/brand/brand-05.png" }
  ];

  return (
    <div className="py-28 px-4 max-w-7xl mx-auto">
      {/* Heading section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">My Best Client</h2>
        <p className="text-xl pt-3 text-gray-600 max-w-3xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the 
          majority have suffered alteration.
        </p>
      </div>

      {/* Client logo grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div
            key={client.id}
            className="group relative bg-white border border-gray-200 rounded transition-all duration-300 hover:bg-red-500 p-8 flex items-center justify-center h-64"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-20 max-w-full object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestClient;