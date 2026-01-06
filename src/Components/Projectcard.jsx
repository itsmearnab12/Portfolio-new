import "./Projectcard.css"
export function Projectcard({ Title, Development, Discription, Tech, Livelink, Github }) {
    return (
        <>
            <div className="Project-card">
                <h3>{Title}</h3>
                <h5>{Development}</h5>
                <p>{Discription}</p>
                <div className="tech">{Tech}</div>
                <div className="card-links">
                    <a href={Livelink} className="Livelink" target="_blank" rel="noreferrer">
                        Live
                    </a>
                    <a href={Github} className="Githublink" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </div>
        </> 
    );
}