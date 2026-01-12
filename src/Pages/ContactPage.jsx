import "./Contactpage.css"
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
export function ContactPage() {
    return (
        <>
            <div className="contactpage">
                <h5>- Get in Touch</h5>
                <h2>Have a Project in Mind?</h2>
                <h4>From building clean user interfaces to crafting engaging web experiences, I’m always excited to work on meaningful projects. Let’s talk.</h4>
                <div className="contactsection">
                    <p>Let's get connected</p>
                    <div>
                        <button><FaLinkedin />Linkedin</button>
                        <button><FaWhatsapp />Whatapp</button>
                    </div>
                    <div>
                        <button><FaXTwitter />Twitter</button>
                        <button><MdMailOutline />Email</button>
                    </div>
                </div>
            </div>
        </>
    );
}