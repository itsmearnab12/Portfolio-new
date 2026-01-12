import "./Contactpage.css"

export function ContactPage() {
    return (
        <>
            <div className="contactpage">
                <h5>- Get in Touch</h5>
                <h2>Have a Project in Mind?</h2>
                <h4>From building clean user interfaces to crafting engaging web experiences, I’m always excited to work on meaningful projects. Let’s talk.</h4>
                <div className="contactsection">
                    <div>
                        <button>Linkedin</button>
                        <button>Whatapp</button>
                    </div>
                    <div>
                        <button>Twitter</button>
                        <button>Email</button>
                    </div>
                </div>
            </div>
        </>
    );
}