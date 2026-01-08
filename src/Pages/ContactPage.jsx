import "./Contactpage.css"
import { FaHandshake } from "react-icons/fa6";
import Profile from "../assets/Profile.jpeg";
export function ContactPage() {
    return (
        <>
            <div className="contactpage">
                <h5>- Get in Touch</h5>
                <div className="Contactprofile">
                    <img src={Profile} alt="Profile" className="center-img" />
                </div>
                <h1>Open to learning opportunities and collaborations <FaHandshake /></h1>
                <div class="status">
                    <span class="dot"></span>
                    <span class="text">Available to work</span>
                </div>
                <div className="Contact">
                    <i class="devicon-linkedin-plain colored"></i>
                    <i class="devicon-github-original"></i>
                    <i class="devicon-twitter-original"></i>
                </div>
            </div>
        </>
    );
}