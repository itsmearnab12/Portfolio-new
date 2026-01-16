import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { HomePage } from './Pages/HomePage';
import { AboutPage } from './Pages/AboutPage';
import { ProjectPage } from './Pages/ProjectPage';
import { ExperiencePage } from './Pages/ExperiencePage';
import { CertificatePage } from './Pages/CertificatePage';
import { ContactPage } from './Pages/ContactPage';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<AboutPage />}></Route>
        <Route path="/Project" element={<ProjectPage />}></Route>
        <Route path="/Experience" element={<ExperiencePage />}></Route>
        <Route path="/Certificate" element={<CertificatePage />}></Route>
        <Route path="/Contact" element={<ContactPage />}></Route>
      </Routes>
    </>

  )
}

export default App
