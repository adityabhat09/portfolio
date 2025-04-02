import React from 'react';

const Project = () => {
  // Sample project data - replace image paths with your actual image paths
  const projects = [
    {
      id: 1,
      title: "Getting tickets to the big show",
      category: "Development",
      image: "https://images.unsplash.com/photo-1742800073948-fccfaccf46e1?q=80&w=2753&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Replace with actual image path
      link: "/portfolio-details"
    },
    {
      id: 2,
      title: "Getting tickets to the big show",
      category: "Development",
      image: "https://images.unsplash.com/photo-1741715651744-81c5d5e6a3ff?q=80&w=4286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
      link: "/portfolio-details"
    },
    {
      id: 3,
      title: "Getting tickets to the big show",
      category: "Development",
      image: "https://plus.unsplash.com/premium_photo-1731501020024-4c5b02cebb71?q=80&w=4335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Replace with actual image path
      link: "/portfolio-details"
    },
    {
        id: 4,
        title: "New Project 1",
        category: "Design",
        image: "https://images.unsplash.com/photo-1741715651744-81c5d5e6a3ff?q=80&w=4286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/portfolio-details"
      },
      {
        id: 5,
        title: "New Project 2",
        category: "Marketing",
        image: "https://plus.unsplash.com/premium_photo-1731501020024-4c5b02cebb71?q=80&w=4335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/portfolio-details"
      },
      {
        id: 6,
        title: "New Project 3",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1742800073948-fccfaccf46e1?q=80&w=2753&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "/portfolio-details"
      }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Heading section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-gray-900 mb-4">My Latest Project</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but the 
          majority have suffered alteration.
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded"
          >
            {/* Project image */}
            <div className="relative h-96 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay - red gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Project content positioned over the image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <span className="text-sm mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                <a
                  href={project.link}
                  className="inline-block border border-white text-white py-2 px-6 w-max hover:bg-white hover:text-black transition-colors duration-300"
                >
                  VIEW DETAILS
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;