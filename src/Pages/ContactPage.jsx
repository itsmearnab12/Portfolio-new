import "./Contactpage.css"
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
export function ContactPage() {
    return (
        <>
            <div className="contactpage">
                <h5>- Let's get connected</h5>
                <h2>Have a Project in Mind?</h2>
                <h4>From building clean user interfaces to crafting engaging web experiences, I’m always excited to work on meaningful projects. Let’s talk.</h4>
                <div className="contactsection">
                        <a href="https://www.linkedin.com/in/arnab-choudhury12/" target="_blank"><FaLinkedin /></a>
                        <a href="https://wa.me/919707268812" target="_blank"><FaWhatsapp /></a>
                        <a href="https://x.com/itsarnab12" target="_blank"><FaXTwitter /></a>
                        <a href="mailto:arnabchoudhury2005@gmail.com" target="_blank"> <MdMailOutline /></a>
                </div>
            </div>
        </>
    );
}