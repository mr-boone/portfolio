import React from "react";

const projects = [
  { name: "project1", link: "/projects/3d-print-puzzle-game" },
  { name: "project2", link: "/projects/react-portfolio" },
  { name: "project3", link: "/projects/ocr-screen-capture" },
  { name: "project4", link: "/projects/ios-kids-video-game" },
  { name: "project5", link: "/projects/quant-finance-tools" },
];

export default function TreeDisplay() {
  return (
    <div className=" text-text font-mono leading-relaxed">
      <div>
        <span>marcoboone@umich:~/projects</span>{" "}
      </div>
      <div>├── projects</div>
      {projects.map((project, i) => (
        <div key={project.name}>
          {i === projects.length - 1 ? "│   └── " : "│   ├── "}
          <a
            href={project.link}
            className="text-green-500 hover:text-blue-400 underline"
          >
            {project.name}
          </a>
        </div>
      ))}
    </div>
  );
}
