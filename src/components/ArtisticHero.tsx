import React from 'react';

const ArtisticHero: React.FC = () => {
  return (
    <section className="min-h-screen relative bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 artistic-grid opacity-30"></div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
          <div className="flex justify-between items-center p-6 md:p-8">
            <div className="text-white font-mono text-sm tracking-wider">
              MA
            </div>
            <div className="flex space-x-8 text-white text-sm">
              <button className="hover-underline tracking-wide">WORK</button>
              <button className="hover-underline tracking-wide">ABOUT</button>
              <button className="hover-underline tracking-wide">CONTACT</button>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-12 gap-4 items-end">
              
              {/* Left side - Main typography */}
              <div className="col-span-12 lg:col-span-8">
                <div className="fade-in">
                  <div className="text-giant font-extralight tracking-tighter mb-4">
                    MOHAMMAD
                  </div>
                  <div className="text-giant font-extralight tracking-tighter mb-8">
                    ASMA
                  </div>
                  <div className="text-large font-light tracking-tight text-gray-600 mb-12">
                    TARANNUM
                  </div>
                </div>
                
                <div className="fade-in fade-in-delay-2 max-w-md">
                  <p className="text-lg font-light leading-relaxed mb-8 text-gray-800">
                    Frontend Developer specializing in React & React Native.
                    Creating digital experiences with precision and purpose.
                  </p>
                  
                  <div className="flex items-center space-x-6 mono-text text-sm">
                    <span className="text-gray-500">CURRENTLY AVAILABLE</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Right side - Geometric elements */}
              <div className="col-span-12 lg:col-span-4 relative">
                <div className="fade-in fade-in-delay-3">
                  {/* Vertical line */}
                  <div className="absolute right-16 top-0 geometric-line h-64"></div>
                  
                  {/* Info blocks */}
                  <div className="space-y-12 text-right">
                    <div className="geometric-border p-6 bg-gray-50">
                      <div className="mono-text text-xs text-gray-500 mb-2">EDUCATION</div>
                      <div className="text-sm font-light">B.Tech CSE (Data Science)</div>
                      <div className="text-sm text-gray-600">CGPA: 8.82</div>
                    </div>
                    
                    <div className="geometric-border p-6 bg-white border">
                      <div className="mono-text text-xs text-gray-500 mb-2">LOCATION</div>
                      <div className="text-sm font-light">Secunderabad</div>
                      <div className="text-sm text-gray-600">Telangana, India</div>
                    </div>
                    
                    <div className="geometric-border p-6 bg-gray-50">
                      <div className="mono-text text-xs text-gray-500 mb-2">EXPERIENCE</div>
                      <div className="text-sm font-light">2+ Years</div>
                      <div className="text-sm text-gray-600">Frontend Development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="fade-in fade-in-delay-4 mt-24 pt-12 border-t border-gray-200">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3">
                  <div className="mono-text text-xs text-gray-500 mb-4">CONTACT</div>
                  <div className="text-sm space-y-2">
                    <div className="hover-underline cursor-pointer">mohammedasmatarannum@gmail.com</div>
                    <div className="hover-underline cursor-pointer">linkedin.com/in/mohammedasma</div>
                    <div className="hover-underline cursor-pointer">github.com/mohammedasma</div>
                  </div>
                </div>
                
                <div className="col-span-12 md:col-span-6 text-center">
                  <div className="mono-text text-xs text-gray-400 tracking-widest">
                    SCROLL TO EXPLORE
                  </div>
                  <div className="w-px h-12 bg-gray-300 mx-auto mt-4"></div>
                </div>
                
                <div className="col-span-12 md:col-span-3 text-right">
                  <div className="mono-text text-xs text-gray-500 mb-4">RESUME</div>
                  <button className="text-sm hover-underline font-light">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticHero;