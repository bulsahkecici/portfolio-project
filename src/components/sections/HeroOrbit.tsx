"use client";

import React from "react";

const defaultLogos = [
  { src: "https://cdn.simpleicons.org/tensorflow/FF6F00", alt: "TensorFlow", href: "https://www.tensorflow.org/" },
  { src: "https://cdn.simpleicons.org/python/3776AB", alt: "Python", href: "https://www.python.org/" },
  { src: "https://cdn.simpleicons.org/pytorch/EE4C2C", alt: "PyTorch", href: "https://pytorch.org/" },
  { src: "https://cdn.simpleicons.org/opencv/5C3EE8", alt: "OpenCV", href: "https://opencv.org/" },
  { src: "https://cdn.simpleicons.org/keras/D00000", alt: "Keras", href: "https://keras.io/" },
  { src: "https://cdn.simpleicons.org/numpy/013243", alt: "NumPy", href: "https://numpy.org/" },
  { src: "https://cdn.simpleicons.org/pandas/150458", alt: "pandas", href: "https://pandas.pydata.org/" },
  { src: "https://cdn.simpleicons.org/scikitlearn/F7931E", alt: "scikit-learn", href: "https://scikit-learn.org/" },
];

export default function HeroOrbit({
  centerText = "Hi, I'm Bulşah",
  logos = defaultLogos,
}: {
  centerText?: string;
  logos?: { src: string; alt: string; href?: string }[];
}) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bg text-fg">
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(122,162,247,0.12),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        <div className="relative h-[32rem] w-[32rem] max-w-[90vw] max-h-[90vh]">
          {/* rotating outline */}
          <div className="absolute inset-0 animate-orbit-slow rounded-full border border-border/60" />

          {/* dotted accent */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle_at_center,transparent_45%,rgba(255,255,255,0.06)_46%,transparent_47%),
                conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.12)_340deg_360deg)
              `
            }}
          />

          {/* center badge */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-2xl border border-border bg-surface/80 px-6 py-4 backdrop-blur-md shadow-[0_0_40px_rgba(122,162,247,0.35)]">
              <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
                {centerText}
              </h1>
            </div>
          </div>

          {/* orbiting balls */}
          <ul className="absolute inset-0 list-none">
            {logos.map((item, i) => {
              const angle = (i / logos.length) * 360;
              const delay = (i / logos.length) * -4;
              return (
                <li
                  key={i}
                  style={
                    {
                      ["--angle" as any]: `${angle}deg`,
                      ["--delay" as any]: `${delay}s`,
                      ["--orb" as any]: `64px`,
                    } as React.CSSProperties
                  }
                  className="orb absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2"
                >
                  <a
                    href={item.href || undefined}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noreferrer" : undefined}
                    className="group block h-full w-full"
                    aria-label={item.alt}
                    title={item.alt}
                  >
                    <div className="ball grid h-full w-full place-items-center rounded-full border border-border bg-surface/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                      <div className="pointer-events-none absolute inset-0 rounded-full [box-shadow:inset_0_0_36px_rgba(122,162,247,0.22)]" />
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-8 w-8 opacity-90"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* footer hint */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 mx-auto w-full max-w-6xl px-6 text-center text-sm text-muted">
        Hover logos • Click opens official site (if provided)
      </div>

      <style jsx>{`
        :root {
          --ring-size: 32rem;
          --ring-radius: calc(var(--ring-size) / 2);
        }
        @keyframes orbit-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .animate-orbit-slow { animation: orbit-slow 28s linear infinite; }

        .orb { transform-origin: center; }
        .orb::before {
          content: "";
          position: absolute; inset: 0;
          transform: rotate(var(--angle, 0deg))
                     translate(calc(var(--ring-radius) - calc(var(--orb, 64px) / 2)))
                     rotate(calc(-1 * var(--angle, 0deg)));
          transform-origin: center;
          animation: revolve 22s linear var(--delay, 0s) infinite;
        }
        @keyframes revolve {
          0% {
            transform: rotate(var(--angle, 0deg))
                       translate(calc(var(--ring-radius) - calc(var(--orb, 64px) / 2)))
                       rotate(calc(-1 * var(--angle, 0deg)));
          }
          100% {
            transform: rotate(calc(360deg + var(--angle, 0deg)))
                       translate(calc(var(--ring-radius) - calc(var(--orb, 64px) / 2)))
                       rotate(calc(-360deg - var(--angle, 0deg)));
          }
        }
        .ball { animation: floaty 3s ease-in-out var(--delay, 0s) infinite alternate; }
        @keyframes floaty { 0% { transform: translateY(0) scale(1); } 100% { transform: translateY(-6px) scale(1.02); } }
        @media (max-width: 640px) { :root { --ring-size: 22rem; } }
      `}</style>
    </div>
  );
}