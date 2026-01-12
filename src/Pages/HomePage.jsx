import "./Homepage.css"
import Profile from "../assets/Profile.jpeg";
import Hero from "../Components/Hero";
import { ProjectCard } from "/src/Components/Projectcard.jsx"
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Techstack } from "../Components/Techstack";
import { HiMiniArrowTurnDownRight } from "react-icons/hi2";
import { LuMessageSquareText } from "react-icons/lu";


export function HomePage() {

    const navigate = useNavigate();

    return (
        <>
            <section className="section home-section">
                <div className="Homepage">
                    <div className="HomepageRightsec">
                        <h5>- Welcome To My Portfolio</h5>
                        <h1>Hello</h1>
                        <h1>I'm <span>Arnab</span></h1>
                        <h1>
                            <Hero />
                        </h1>
                        <h4>I’m a third-year BCA (Hons.) student at Parul University with a strong interest in software development. I enjoy turning ideas into real-world applications and have a growing passion for working with data.</h4>
                        <div className="Button">
                            <button className="Resumebutton"><IoDocumentTextOutline />View Resume</button>
                            <button onClick={() => navigate("/Project")} className="Myworkbutton">My Work <FaArrowRightLong /></button>
                        </div>
                        <div className="Homesocialmedia">
                            <a href="https://www.linkedin.com/in/arnab-choudhury12/" target="_blank"><FaLinkedin /></a>
                            <a href="https://github.com/itsmearnab12" target="_blank"><FaGithub /></a>
                            <a href="mailto:arnabchoudhury2005@gmail.com" target="_blank"><FiMail /></a>
                            <a href="https://x.com/itsarnab12" target="_blank"><FaSquareXTwitter /></a>
                        </div>
                        <section className="stats-section">
                            <div className="stat-box">
                                <h2>2+</h2>
                                <p>Project Complete</p>
                            </div>

                            <div className="stat-box">
                                <h2>4+</h2>
                                <p>Github stars</p>
                            </div>

                            <div className="stat-box">
                                <h2>125+</h2>
                                <p>GitHub Contributions</p>
                            </div>
                        </section>
                    </div>
                    <div className="HomepageLeftsec">
                        <img src={Profile} alt="Profile" />
                    </div>
                </div>
            </section>
            <section className="section Aboutpage">
                <h5 className="AboutTilte">- About Me</h5>
                <h2>Change My idea to relaity</h2>
                <h4 className="AboutMyself">
                    Hi, I’m a third-year student at Parul University, pursuing my Bachelor of Computer Applications. I have a strong interest in development and data, and I believe in learning by building, problem-solving, and creating solutions for real-world challenges.
                    Currently, I’m strengthening my development skills by building projects using React.js, Express.js, and Node.js, while also solidifying my core foundation in data analytics.
                </h4>
                <div>
                    <a href="/About">Know more about me <FaArrowRightLong /> </a>
                </div>
            </section>
            <section className="section tech-section">
                <Techstack />
            </section>
            <section className="section projectpage">
                <h5>-My Projects</h5>
                <h2>Code. Build. Improve.</h2>

                <div className="project-cards">
                    <ProjectCard
                        title="CHAT APP"
                        description=" My journey into programming began with curiosity and perseverance. Until my higher studies, I had no prior exposure to coding."
                        tech={["React", "Tailwind", "Node.js", "Express.js", "Socket.io"]}
                        live="https://lnkd.in/g4KUKk9d"
                        github="https://lnkd.in/gyG5H5mK"
                    />
                    <ProjectCard
                        title="Quick NEWS"
                        description=" My journey into programming began with curiosity and perseverance. Until my higher studies, I had no prior exposure to coding."
                        tech={["Html", "Css", "JavaScript", "Node.js", "Express.js"]}
                        live="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                        github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                    />
                    <ProjectCard
                        title="Simple Portfolio Website"
                        description=" My journey into programming began with curiosity and perseverance. Until my higher studies, I had no prior exposure to coding."
                        tech={["HTML", "CSS"]}
                        live="https://your-live-link.com"
                        github="https://github.com/your-repo"
                    />
                    <ProjectCard
                        title="Simple Portfolio Website"
                        description=" My journey into programming began with curiosity and perseverance. Until my higher studies, I had no prior exposure to coding."
                        tech={["HTML", "CSS"]}
                        live="https://your-live-link.com"
                        github="https://github.com/your-repo"
                    />
                </div>
                <a href="/Project">Veiw My all Projects <FaArrowRightLong /></a>
            </section>
            <section className="section Whyhiremepage">
                <h5>-Why me?</h5>
                <h2>What I Bring to the Table</h2>
                <div className="why-me-content">
                    <div className="AboutIntro">
                        <h3>
                            <span><HiMiniArrowTurnDownRight /></span>I don’t just aim for working solutions—I focus on clean design, clear structure, and intuitive interactions. My goal is to deliver interfaces that feel polished, purposeful, and easy to use.
                        </h3>
                    </div>
                    <div className="AboutIntro">
                        <h3>
                            <span><HiMiniArrowTurnDownRight /></span>I prioritize learning how things work before using tools or libraries, which allows me to write maintainable, scalable code and adapt quickly to new technologies across the full stack.
                        </h3>
                    </div>
                    <div className="AboutIntro">
                        <h3>
                            <span><HiMiniArrowTurnDownRight /></span>I actively refine my projects by revisiting design decisions, optimizing performance, and improving clarity. This iterative mindset helps me deliver better results and grow consistently as a developer.
                        </h3>
                    </div>
                </div>
            </section>
            <section className="section Contactpage">
                <h2>
                    Let’s Build Something Meaningful Together
                </h2>
                <h4>
                    Have an idea, a project, or an opportunity in mind? I’m always open to discussing new work, collaborations, or just having a friendly conversation.
                </h4>
                <div className="Buttons">
                    <button className="btn"><IoDocumentTextOutline /><span>View Resume</span></button>
                    <button className="btn Msgbutton" onClick={()=> navigate("/Contact")}><LuMessageSquareText /><span>Send Me Message</span></button>
                </div>
                <span class="Working-status">
                    <span class="Available"></span>
                    <span class="Available-text">Available to work</span>
                </span>
            </section>
        </>
    );
}