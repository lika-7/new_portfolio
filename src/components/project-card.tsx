import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.notionUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[420px] flex flex-col">
        <div className="relative h-48 w-full flex-shrink-0">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/20 transition-all duration-300"></div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-[#20344D] group-hover:text-[#8E6E5F] transition-colors duration-200">
              {project.title}
            </h3>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#8E6E5F]" />
          </div>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-shrink-0">
            {project.description}
          </p>

          {/* 태그 영역에 고정 높이와 스크롤 추가 */}
          <div className="h-20 overflow-y-auto pr-1 mb-4 scrollbar-thin">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-600 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* <div className="text-xs text-gray-500 mt-auto">
            {new Date(project.createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div> */}
        </div>
      </div>
    </Link>
  );
}
