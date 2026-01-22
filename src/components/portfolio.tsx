import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfoliocards";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Min Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}