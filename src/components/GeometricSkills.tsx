import React from 'react';

const GeometricSkills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "TypeScript"],
      level: "Advanced"
    },
    {
      title: "Backend (Learning)",
      skills: ["Node.js", "Express.js", "REST APIs"],
      level: "Intermediate"
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm/yarn", "CLI Tools"],
      level: "Proficient"
    },
    {
      title: "Design & UX",
      skills: ["Responsive Design", "Accessibility", "User Experience", "Interface Design"],
      level: "Intermediate"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="mono-text text-xs text-gray-400 tracking-wider">
              002 / SKILLS
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-10">
            <div className="text-3xl md:text-4xl font-extralight leading-tight fade-in">
              TECHNICAL
              <br />
              <span className="text-gray-400">EXPERTISE</span>
            </div>
          </div>
        </div>

        {/* Compact Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`fade-in fade-in-delay-${index + 1} bg-white border border-gray-200 hover:border-gray-300 transition-colors`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-light">{category.title}</h3>
                  <div className="mono-text text-xs text-gray-500 bg-gray-100 px-2 py-1">
                    {category.level}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-gray-600 py-1"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeometricSkills;