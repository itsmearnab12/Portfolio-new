import "./Homepage.css"
import Profile from "../assets/Profile.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

export function HomePage() {
    return (
        <>
            <div className="Homepage">
                <div className="HomepageRightsec">
                    <h5>- Welcome To My Portfolio</h5>
                    <h1>Hello</h1>
                    <h1>I'm <span>Arnab</span></h1>
                    <h1>Frontend Developer | Data Analyst</h1>
                    <h4>I’m a third-year BCA (Hons.) student at Parul University with a strong interest in software development. I enjoy turning ideas into real-world applications and have a growing passion for working with data.</h4>
                    <div className="Button">
                        <button className="Resumebutton"><IoDocumentTextOutline />View Resume</button>
                        <button className="Myworkbutton">My Work <FaArrowRightLong /></button>
                    </div>
                    <div>
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
        </>
    );
}