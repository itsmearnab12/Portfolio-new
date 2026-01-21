import { ProjectCard } from "/src/Components/Projectcard.jsx"
import "./Projectpage.css"
export function ProjectPage() {
    return (
        <>
            <div className="Projectpage">
                <h5>-My Portfolio</h5>
                <h2>Projects I Worked on</h2>
                <h4>Each started with curiosity and ended with learning</h4>
            </div>
            <div className="Project">
                <div className="projects-grid">
                    <ProjectCard
                        title="CHAT APP"
                        description="This Chat Application Website enabling real-time communication through a clean and responsive interface."
                        tech={["React", "Tailwind", "Node.js", "Express.js", "Socket.io"]}
                        live="https://lnkd.in/g4KUKk9d"
                        github="https://lnkd.in/gyG5H5mK"
                    />
                    <ProjectCard
                        title="Quick NEWS"
                        description="A responsive news website that presents the latest articles across multiple categories with a clean layout and easy navigation for a smooth reading experience."
                        tech={["Html", "Css", "JavaScript", "Node.js", "Express.js"]}
                        live="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                        github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                    />
                    <ProjectCard
                        title="Oak & Roast"
                        description="A modern coffee shop website showcasing the brand story, menu, and contact details. Designed with a focus on visual aesthetics, smooth layout, and user-friendly navigation to create an engaging café experience online."
                        tech={["React", "CSS"]}
                        live="https://github.com/itsmearnab12/PROJECTS"
                        github="https://github.com/itsmearnab12/PROJECTS"
                    />
                    <ProjectCard
                        title="My Portfolio Website"
                        description="A responsive portfolio website developed with React, featuring reusable components, smooth navigation, and a clean UI to present projects and professional details effectively."
                        tech={["React", "CSS"]}
                        live="https://github.com/itsmearnab12/Portfolio-new"
                        github="https://github.com/itsmearnab12/Portfolio-new"
                    />
                </div>
            </div>
        </>
    )
}