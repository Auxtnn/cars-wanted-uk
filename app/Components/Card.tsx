import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  items: string[];
  closure: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  items,
  closure,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h4 className="text-xl font-semibold text-gold mb-2">{title}</h4>
      <p className="text-gray-700 text-lg mb-4">{description}</p>
      <ul className="list-disc text-lg pl-5 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="text-gray-700 mb-4">{closure}</p>
    </div>
  );
};

export default ProjectCard;
