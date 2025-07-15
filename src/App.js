import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';          // ✅ Import Skills
import Projects from './pages/Projects';
import Education from './pages/Education';    // ✅ Import Education
import Certifications from './pages/Certifications'; // ✅ Import Certifications
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Skills />           {/* 🆕 Skills Section */}
        <Projects />
        <Education />        {/* 🆕 Education Section */}
        <Certifications />   {/* 🆕 Certifications Section */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
