"use client";
import Image from "next/image";

type Project = {
  name: string;
  desc: string;
  role: string;
  result: string;
  image?: string;
};

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  if (!projects?.length) return null;

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <article key={i} className="rounded-xl border p-4 shadow-sm hover:shadow-md transition-shadow">
          {p.image ? (
            <div className="relative mb-3 aspect-[16/9] overflow-hidden rounded-lg">
              <Image src={p.image} alt={p.name} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
            </div>
          ) : null}
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="mt-1 text-sm opacity-80">{p.desc}</p>
          <ul className="mt-3 text-sm">
            <li><span className="font-medium">Role:</span> {p.role}</li>
            <li><span className="font-medium">Result:</span> {p.result}</li>
          </ul>
        </article>
      ))}
    </section>
  );
}
