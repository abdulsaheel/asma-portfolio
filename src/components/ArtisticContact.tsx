import React from 'react';

const ArtisticContact: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-32">
          <div className="col-span-12 md:col-span-2">
            <div className="mono-text text-xs text-gray-400 tracking-wider">
              004 / CONTACT
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-10">
            <div className="text-large font-extralight leading-tight fade-in">
              LET'S BUILD
              <br />
              <span className="text-gray-400">SOMETHING</span>
              <br />
              TOGETHER
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left column - Message */}
          <div className="col-span-12 lg:col-span-7">
            <div className="fade-in fade-in-delay-1">
              <div className="text-medium font-light mb-12 text-gray-300 leading-relaxed">
                Currently seeking opportunities in frontend development.
                Open to freelance projects and full-time positions.
              </div>
              
              <div className="space-y-8 text-lg font-light leading-relaxed text-gray-400">
                <p>
                  I'm passionate about creating digital experiences that matter. 
                  Whether you're a startup looking to build your first product 
                  or an established company seeking to enhance your web presence, 
                  I'd love to hear about your project.
                </p>
                
                <p>
                  I believe in clean code, thoughtful design, and collaborative 
                  problem-solving. Let's discuss how we can work together to 
                  bring your ideas to life.
                </p>
              </div>

              {/* Status indicators */}
              <div className="mt-16 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="mono-text text-sm text-gray-400">AVAILABLE FOR NEW PROJECTS</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="mono-text text-sm text-gray-400">OPEN TO REMOTE WORK</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="mono-text text-sm text-gray-400">QUICK RESPONSE TIME</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact details */}
          <div className="col-span-12 lg:col-span-5">
            <div className="fade-in fade-in-delay-2 lg:pl-12">
              
              {/* Contact methods */}
              <div className="space-y-12">
                
                {/* Email */}
                <div className="geometric-border bg-gray-900 p-8">
                  <div className="mono-text text-xs text-gray-500 mb-4 tracking-wider">
                    PRIMARY CONTACT
                  </div>
                  <div className="text-xl font-light mb-2 hover-underline cursor-pointer">
                    mohammedasmatarannum@gmail.com
                  </div>
                  <div className="text-sm text-gray-400">
                    Best for project inquiries and collaborations
                  </div>
                </div>

                {/* Social links */}
                <div className="space-y-6">
                  <div className="mono-text text-xs text-gray-500 tracking-wider">
                    CONNECT
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-lg font-light hover-underline cursor-pointer">
                        LinkedIn
                      </span>
                      <span className="mono-text text-xs text-gray-500">
                        /in/mohammedasma
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-lg font-light hover-underline cursor-pointer">
                        GitHub
                      </span>
                      <span className="mono-text text-xs text-gray-500">
                        /mohammedasma
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b border-gray-800">
                      <span className="text-lg font-light hover-underline cursor-pointer">
                        Portfolio
                      </span>
                      <span className="mono-text text-xs text-gray-500">
                        mohammedasma.dev
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="geometric-border bg-white text-black p-8">
                  <div className="mono-text text-xs text-gray-500 mb-4 tracking-wider">
                    LOCATION
                  </div>
                  <div className="text-lg font-light mb-2">
                    Secunderabad, Telangana
                  </div>
                  <div className="text-sm text-gray-600">
                    India • UTC+05:30
                  </div>
                </div>

                {/* Resume download */}
                <div className="text-center pt-8">
                  <button className="geometric-border bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-500 text-sm font-light tracking-wider w-full">
                    DOWNLOAD RESUME
                  </button>
                  <div className="mono-text text-xs text-gray-500 mt-3">
                    Last updated: January 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fade-in fade-in-delay-4 mt-32 pt-16 border-t border-gray-800">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <div className="text-large font-extralight leading-tight mb-8">
                MOHAMMAD ASMA
                <br />
                <span className="text-gray-400">TARANNUM</span>
              </div>
              <div className="mono-text text-xs text-gray-500">
                Frontend Developer • React & React Native Specialist
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-6 text-right">
              <div className="space-y-4">
                <div className="mono-text text-xs text-gray-500">
                  © 2025 Mohammad Asma Tarannum
                </div>
                <div className="mono-text text-xs text-gray-600">
                  Designed & Built with React + TailwindCSS
                </div>
                <div className="flex justify-end space-x-6 text-xs">
                  <span className="hover-underline cursor-pointer">Privacy</span>
                  <span className="hover-underline cursor-pointer">Terms</span>
                  <span className="hover-underline cursor-pointer">Sitemap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticContact;