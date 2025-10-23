"use client";

import { useEffect, useRef, useState } from "react";

interface TechLogo {
  name: string;
  logo: string;
  color: string;
}

// Skills categories with their respective tech logos
const skillsCategories = {
  languages: {
    title: "Programming Languages",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-yellow-400 to-yellow-600" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "from-yellow-500 to-yellow-700" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "from-blue-400 to-blue-600" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "from-purple-400 to-purple-600" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "from-blue-500 to-blue-700" }
    ]
  },
  ai_ml: {
    title: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "from-orange-400 to-orange-600" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "from-red-400 to-red-600" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", color: "from-orange-500 to-orange-700" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", color: "from-green-400 to-green-600" },
      { name: "NLP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "from-blue-400 to-blue-600" }
    ]
  },
  web: {
    title: "Web Development",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-cyan-600" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "from-gray-400 to-gray-600" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", color: "from-red-500 to-red-700" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-green-700" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "from-cyan-500 to-cyan-700" }
    ]
  },
  mobile: {
    title: "Mobile Development",
    items: [
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-blue-400 to-blue-600" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-cyan-600" }
    ]
  },
  tools: {
    title: "Tools & Platforms",
    items: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-500 to-orange-700" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "from-blue-500 to-blue-700" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "from-blue-400 to-blue-600" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "from-blue-600 to-blue-800" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-500 to-green-700" },
      { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "from-red-500 to-red-700" }
    ]
  }
};

export default function HeroOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);
        
        setMousePosition({
          x: Math.max(-1, Math.min(1, deltaX)),
          y: Math.max(-1, Math.min(1, deltaY))
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const tiltX = mousePosition.y * 15;
  const tiltY = mousePosition.x * 15;

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
      
      {/* Hand arc lines */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {/* Left hand arc */}
          <div className="absolute -left-32 top-0 w-32 h-16 border-t-2 border-l-2 border-blue-400/30 rounded-tl-full transform -rotate-12 origin-bottom" />
          {/* Right hand arc */}
          <div className="absolute -right-32 top-0 w-32 h-16 border-t-2 border-r-2 border-purple-400/30 rounded-tr-full transform rotate-12 origin-bottom" />
          {/* Glow effect for arcs */}
          <div className="absolute -left-32 top-0 w-32 h-16 border-t-2 border-l-2 border-blue-400/60 rounded-tl-full transform -rotate-12 origin-bottom blur-sm" />
          <div className="absolute -right-32 top-0 w-32 h-16 border-t-2 border-r-2 border-purple-400/60 rounded-tr-full transform rotate-12 origin-bottom blur-sm" />
        </div>
      </div>

      {/* Main orbit container */}
      <div
        ref={containerRef}
        className="relative w-96 h-96"
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transition: isHovered ? "none" : "transform 0.1s ease-out"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Central glowing text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-2xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Bulşah
              </span>
            </h1>
            <p className="text-lg text-gray-300 font-light">
              Data Scientist & Engineer
            </p>
          </div>
        </div>

        {/* 5 orbital rings for each skills category */}
        {Object.entries(skillsCategories).map(([categoryKey, category], ringIndex) => {
          const ringRadius = 100 + (ringIndex * 60); // 100px, 160px, 220px, 280px, 340px
          const rotationSpeed = 15 + (ringIndex * 5); // Different speeds: 15s, 20s, 25s, 30s, 35s
          const direction = ringIndex % 2 === 0 ? 1 : -1; // Alternate directions
          
          return (
            <div key={categoryKey} className="absolute inset-0">
              {/* Category title */}
              <div 
                className="absolute text-xs font-semibold text-white/60 text-center"
                style={{
                  left: `calc(50% - 60px)`,
                  top: `calc(50% - ${ringRadius + 40}px)`,
                  width: '120px'
                }}
              >
                {category.title}
              </div>
              
              {/* Orbital logos for this category */}
              {category.items.map((tech, index) => {
                const angle = (index * 360) / category.items.length;
                const x = Math.cos((angle * Math.PI) / 180) * ringRadius;
                const y = Math.sin((angle * Math.PI) / 180) * ringRadius;

                return (
                  <div
                    key={`${categoryKey}-${tech.name}`}
                    className="absolute w-10 h-10 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 1.25rem)`,
                      top: `calc(50% + ${y}px - 1.25rem)`,
                      transform: `rotate(${angle}deg)`,
                      animation: `orbit${ringIndex} ${rotationSpeed}s linear infinite ${direction > 0 ? 'normal' : 'reverse'}`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="relative group">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-20 blur-sm scale-110`} />
                      
                      {/* Logo container */}
                      <div className="relative w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg hover:scale-125 transition-all duration-300 hover:shadow-blue-500/25">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-5 h-5 object-contain filter brightness-0 invert"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        {tech.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Orbital path indicator */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-spin" style={{ animationDuration: "30s" }} />
        <div className="absolute inset-4 rounded-full border border-white/5 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes orbit0 {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        
        @keyframes orbit1 {
          from {
            transform: rotate(0deg) translateX(160px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(160px) rotate(-360deg);
          }
        }
        
        @keyframes orbit2 {
          from {
            transform: rotate(0deg) translateX(220px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(220px) rotate(-360deg);
          }
        }
        
        @keyframes orbit3 {
          from {
            transform: rotate(0deg) translateX(280px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(280px) rotate(-360deg);
          }
        }
        
        @keyframes orbit4 {
          from {
            transform: rotate(0deg) translateX(340px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(340px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
