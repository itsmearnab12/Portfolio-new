import "./Certificatepage.css"
import cert1 from "../assets/Certificate 1_page-0001.jpg"
import cert2 from "../assets/Certificate 2_page-0001.jpg"
import cert3 from "../assets/Certificate 3_page-0001.jpg"
import cert4 from "../assets/Certificate 4_page-0001.jpg"
import cert5 from "../assets/Certificate 5_page-0001.jpg"
import cert6 from "../assets/Certificate 6_page-0001.jpg"
import cert7 from "../assets/Certificate 7_page-0001.jpg"

const CertficateData = [
  {
    id: 1,
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    issueDate: "December 31, 2024",
    image: cert1,
    skills: ["Spreadsheet", "Data Analysis", "SQL", "Data Visualization", "Data Cleaning"],
    link: "https://www.coursera.org/account/accomplishments/verify/9BQYMGK2LFKN"
  },
  {
    id: 2,
    title: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    issueDate: "January 13, 2025",
    image: cert2,
    skills: ["Decision-Making", "Spreadsheet", "Data Analysis", "Problem Solving", "Questioning"],
    link: "https://www.coursera.org/account/accomplishments/verify/0DHW98CZCW0H"
  },
  {
    id: 3,
    title: "Prepare Data for Exploration",
    issuer: "Google",
    issueDate: "Feburary 15, 2025",
    image: cert3,
    skills: ["Spreadsheet", "SQL", "Meta data", "Data Ethics", "Data Collection"],
    link: "https://www.coursera.org/account/accomplishments/verify/W4BJM35AK1RK"
  },
  {
    id: 4,
    title: "Process Data from Dirty to Clean",
    issuer: "Google",
    issueDate: "March 6, 2025",
    image: cert4,
    skills: ["Spreadsheet", "Data Integrity", "Sample Size Determination", "SQL", "Data Cleansing"],
    link: "https://www.coursera.org/account/accomplishments/verify/3UMMUKL1DH94"
  },
  {
    id: 5,
    title: "Analyze Data to Answer Question",
    issuer: "Google",
    issueDate: "June 2, 2025",
    image: cert5,
    skills: ["Data Validation", "Data Manipulation", "Data Transformation", "Excel Formulas", "Data Analysis", "Pivot Tables And Charts", "Data integration", "Analytics", "Data Compilation", "Spreadsheet", "Spreadsheet Software", "SQL", "User Feedback"],
    link: "https://www.coursera.org/account/accomplishments/verify/0CM9QM9YWYZV"
  },
  {
    id: 6,
    title: "Share Data Through the Art of Visualization",
    issuer: "Google",
    issueDate: "June 13, 2025",
    image: cert6,
    skills: ["Reactjs", "Java", "Nodejs"],
    link: "https://www.coursera.org/account/accomplishments/verify/PV9S8IT52EG2"
  },
  {
    id: 7,
    title: "Data Analysis with R Programming",
    issuer: "Google",
    issueDate: "June 28, 2025",
    image: cert7,
    skills: ["Reactjs", "Java", "Nodejs"],
    link: "https://www.coursera.org/account/accomplishments/verify/CMVU3RV94X7S"
  },
]

export function CertificatePage() {
  return (
    <>
      <div>
        <h3>-My Certificates</h3>
      </div>
      <div className="Cert-grid">
        {CertficateData.map((cert) => (
          <div className="Cert-card">
            <div key={cert.id} className="certsecone">
              <div className="certimage">
                <img src={cert.image} alt="" className="certimage" />
              </div>
              <div className="certsectwo">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer}</h4>
                <h4>{cert.issueDate}</h4>
              </div>
            </div>
            <div className="certsecthree">
              <h4>{cert.description}</h4>
              <div className="skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
              <a href={cert.link} target="_blank"className="CertBtn">Veiw Certificate</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}