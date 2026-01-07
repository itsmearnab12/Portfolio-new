import "./Homepage.css"
import Profile from "../assets/Profile.jpeg";
import Hero from "../Components/Hero";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Techstack } from "../Components/Techstack";
import { Projectcard } from "../Components/Projectcard";

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
                    <a href="">Know more about me <FaArrowRightLong /> </a>
                </div>
            </section>
            <section className="section tech-section">
                <Techstack />
            </section>
            <section className="section projectpage">
                <h5>-My Projects</h5>
                <h2>Code. Build. Improve.</h2>

                <div className="project-cards">
                    <Projectcard
                        Title="Chatapp"
                        Development="FULLSTACK"
                        Discription="A real-time chat application that allows users to communicate instantly, focusing on performance, usability, and a responsive design."
                        Tech="React.js Express.js Node.js Tailwind Css Socket.io"
                        Livelink="https://chat-app-wine-seven-52.vercel.app/"
                        Github="https://github.com/itsmearnab12/Chatapp"
                    />
                    <Projectcard
                        Title="News Website"
                        Development="FULLSTACK"
                        Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                        Tech="HTML Express.js Node.JS CSS News.io"
                        Livelink="https://chat-app-wine-seven-52.vercel.app/"
                        Github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                    />
                    <Projectcard
                        Title="Simple Portfolio website"
                        Development="FRONTEND"
                        Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                        Tech="HTML Express.js Node.JS CSS News.io"
                        Livelink="https://itsmearnab12.github.io/Portfolio/"
                        Github="https://github.com/itsmearnab12/Portfolio"
                    />
                    <Projectcard
                        Title="News Website"
                        Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                        Tech="HTML Express.js Node.JS CSS News.io"
                        Livelink="https://chat-app-wine-seven-52.vercel.app/"
                        Github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                    />
                </div>
            </section>
        </>
    );
}