import React from 'react';

const MinimalAbout: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-32">
          <div className="col-span-12 md:col-span-2">
            <div className="mono-text text-xs text-gray-400 tracking-wider">
              001 / ABOUT
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-10">
            <div className="text-large font-extralight leading-tight fade-in">
              CRAFTING DIGITAL
              <br />
              EXPERIENCES WITH
              <br />
              <span className="text-gray-400">PURPOSE</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left column - Story */}
          <div className="col-span-12 lg:col-span-7">
            <div className="fade-in fade-in-delay-1">
              <div className="text-medium font-light mb-12 text-gray-800 leading-relaxed">
                I'm Mohammad Asma Tarannum, a passionate frontend developer who 
                believes in the power of clean code and meaningful user experiences.
              </div>
              
              <div className="space-y-8 text-lg font-light leading-relaxed text-gray-700">
                <p>
                  Currently pursuing B.Tech in Computer Science Engineering with a 
                  specialization in Data Science from Malla Reddy Engineering College, 
                  maintaining a CGPA of 8.82.
                </p>
                
                <p>
                  My journey began with a diploma in Electronics and Instrumentation 
                  Engineering (8.4 CGPA), but my curiosity for web development led me 
                  to transition into creating digital solutions that people actually use.
                </p>
                
                <p>
                  I specialize in React and React Native development, focusing on 
                  responsive, accessible, and performant applications. Currently 
                  expanding my skill set with backend technologies including Node.js 
                  and Express.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Details */}
          <div className="col-span-12 lg:col-span-5">
            <div className="fade-in fade-in-delay-2 lg:pl-12">
              
              {/* Education */}
              <div className="mb-16">
                <div className="mono-text text-xs text-gray-500 mb-6 tracking-wider">
                  EDUCATION
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-gray-200 pl-6">
                    <div className="text-sm font-medium mb-1">
                      B.Tech Computer Science Engineering
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      Data Science Specialization
                    </div>
                    <div className="mono-text text-xs text-gray-500">
                      Malla Reddy Engineering College • CGPA 8.82
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-gray-200 pl-6">
                    <div className="text-sm font-medium mb-1">
                      Diploma in Electronics & Instrumentation
                    </div>
                    <div className="mono-text text-xs text-gray-500">
                      CGPA 8.4
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="geometric-border p-8 bg-gray-50">
                <div className="mono-text text-xs text-gray-500 mb-4 tracking-wider">
                  PHILOSOPHY
                </div>
                <blockquote className="text-sm font-light italic leading-relaxed">
                  "Code is poetry written for machines to understand, 
                  but crafted for humans to appreciate."
                </blockquote>
              </div>

              {/* Goals */}
              <div className="mt-16">
                <div className="mono-text text-xs text-gray-500 mb-6 tracking-wider">
                  CURRENT FOCUS
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <span>Full-stack development mastery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <span>Advanced React patterns</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <span>Backend with Node.js & Express</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <span>DevOps and deployment strategies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalAbout;