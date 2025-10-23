"use client";

import { useEffect, useRef, useState } from "react";

interface TechLogo {
  name: string;
  logo: string;
  color: string;
}

const techLogos: TechLogo[] = [
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    color: "from-orange-400 to-orange-600"
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "PyTorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    color: "from-red-400 to-red-600"
  },
  {
    name: "OpenCV",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    color: "from-green-400 to-green-600"
  },
  {
    name: "Keras",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    color: "from-red-500 to-red-700"
  },
  {
    name: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "pandas",
    logo: "https://pandas.pydata.org/static/img/pandas.svg",
    color: "from-purple-400 to-purple-600"
  },
  {
    name: "scikit-learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    color: "from-orange-500 to-orange-700"
  }
];

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

        {/* Orbiting tech logos */}
        {techLogos.map((tech, index) => {
          const angle = (index * 360) / techLogos.length;
          const radius = 180;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <div
              key={tech.name}
              className="absolute w-16 h-16 flex items-center justify-center"
              style={{
                left: `calc(50% + ${x}px - 2rem)`,
                top: `calc(50% + ${y}px - 2rem)`,
                transform: `rotate(${angle}deg)`,
                animation: `orbit 20s linear infinite`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-20 blur-lg scale-150`} />
                
                {/* Logo container */}
                <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/25">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                    loading="lazy"
                  />
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
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
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
