import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import "./Projectcard.css";

export function ProjectCard({ title, description, tech, live, github }) {
  return (
    <div className="project-card">
      <div className="card-header">
        <h3>{title}</h3>
        <div className="card-action">
          {live && (
            <a href={live} target="_blank" rel="noreferrer">
              <LuExternalLink />
            </a>
          )}
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <p className="description">{description}</p>

      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
