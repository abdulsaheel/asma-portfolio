import React from 'react';

const MinimalProjects: React.FC = () => {
  const projects = [
    {
      id: "01", 
      title: "Responsive Blog Application",
      description: "Dynamic blog platform with routing and state management. Features clean UI design and mobile-first responsive approach.",
      tech: ["React.js", "React Router", "CSS3"],
      type: "Web Application",
      status: "Completed"
    },
    {
      id: "02",
      title: "Task Management Mobile App",
      description: "Cross-platform mobile application for personal task management with local storage and intuitive user interface.",
      tech: ["React Native", "AsyncStorage", "JavaScript"],
      type: "Mobile App",
      status: "Completed"
    },
    {
      id: "03",
      title: "Weather Forecast App",
      description: "Real-time weather application using OpenWeatherMap API. Fully responsive design with CSS Grid and Flexbox layout.",
      tech: ["JavaScript", "REST API", "CSS Grid", "Flexbox"],
      type: "Web Application",
      status: "Live"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-32">
          <div className="col-span-12 md:col-span-2">
            <div className="mono-text text-xs text-gray-400 tracking-wider">
              003 / PROJECTS
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-10">
            <div className="text-large font-extralight leading-tight fade-in">
              SELECTED
              <br />
              <span className="text-gray-400">WORK</span>
            </div>
          </div>
        </div>

        {/* Projects list */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`fade-in fade-in-delay-${index + 1} group cursor-pointer transform transition-all duration-700 hover:scale-[1.02]`}
              onMouseEnter={(e) => {
                // Subtle sparkle effect on hover
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.cssText = `
                  position: absolute;
                  pointer-events: none;
                  font-size: 12px;
                  opacity: 0;
                  animation: sparkle 1.5s ease-out forwards;
                  left: ${Math.random() * 100}%;
                  top: ${Math.random() * 100}%;
                `;
                
                const style = document.createElement('style');
                style.textContent = `
                  @keyframes sparkle {
                    0% { opacity: 0; transform: translateY(0) scale(0); }
                    50% { opacity: 1; transform: translateY(-20px) scale(1); }
                    100% { opacity: 0; transform: translateY(-40px) scale(0); }
                  }
                `;
                document.head.appendChild(style);
                
                e.currentTarget.appendChild(sparkle);
                setTimeout(() => {
                  if (e.currentTarget.contains(sparkle)) {
                    e.currentTarget.removeChild(sparkle);
                  }
                  if (document.head.contains(style)) {
                    document.head.removeChild(style);
                  }
                }, 1500);
              }}
            >
              <div className="grid grid-cols-12 gap-8 items-start">
                
                {/* Project number */}
                <div className="col-span-2 md:col-span-1">
                  <div className="mono-text text-xs text-gray-400 group-hover:text-black transition-colors duration-500">
                    {project.id}
                  </div>
                </div>

                {/* Project details */}
                <div className="col-span-10 md:col-span-7">
                  <div className="mb-6">
                    <h3 className="text-medium font-light mb-4 group-hover:translate-x-4 transition-transform duration-500 relative">
                      {project.title}
                      <span className="absolute -right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-gray-400">
                        →
                      </span>
                    </h3>
                    <p className="text-lg font-light leading-relaxed text-gray-700 mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={tech}
                          className="mono-text text-xs px-3 py-1 border border-gray-300 text-gray-600 transition-all duration-300 hover:border-black hover:text-black hover:shadow-sm transform hover:-translate-y-0.5"
                          style={{
                            animationDelay: `${techIndex * 100}ms`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project meta */}
                <div className="col-span-12 md:col-span-4 text-right">
                  <div className="space-y-4">
                    <div>
                      <div className="mono-text text-xs text-gray-500 mb-1">TYPE</div>
                      <div className="text-sm font-light">{project.type}</div>
                    </div>
                    
                    <div>
                      <div className="mono-text text-xs text-gray-500 mb-1">STATUS</div>
                      <div className={`text-sm font-light ${
                        project.status === 'Live' ? 'text-green-600' : 'text-gray-800'
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex space-x-4 justify-end">
                        <button className="mono-text text-xs hover-underline">
                          VIEW CODE
                        </button>
                        {project.status === 'Live' && (
                          <button className="mono-text text-xs hover-underline">
                            LIVE DEMO
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-12 h-px bg-gray-200 group-hover:bg-black transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalProjects;