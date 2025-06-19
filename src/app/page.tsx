"use client"; // This is needed for using client-side hooks like useState

import { useState } from "react";
import Link from "next/link"; // Import Link
import Image from "next/image"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero"); // Default to 'hero'
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    console.log(`Setting active section to: ${section}`); // Debugging log
    setActiveSection(section);
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return (
          <section id="hero" className="hero-section">
            <h1>Balaganesh Sevarkodiyon</h1>
            <div className="about-content">
            <Image src="/profile.jpg" alt="Balaganesh's Profile Photo" className="profile-photo" width={200} height={200} />
            <h2>About Me</h2>
            <p>I&apos;m Balaganesh from Virudhunagar, Tamil Nadu, currently working as a Software Development Engineer at Juspay in Bangalore. I specialize in iOS development, with a strong focus on building robust and scalable payment software.</p>
            <h3>Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2010</div>
                <div className="timeline-content">
                  <strong>SSLC</strong>
                  <p>Government Higher Secondary School, Sankaralingapuram</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2013</div>
                <div className="timeline-content">
                  <strong>Diploma in Computer Engineering</strong>
                  <p>VSVN Polytechnic College, Virudhunagar</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2016</div>
                <div className="timeline-content">
                  <strong>Bachelor of Engineering in Computer Science</strong>
                  <p>Mepco Schlenk Engineering College, Sivakasi</p>
                </div>
              </div>
            </div>
            <h3>Interests</h3>
            <div className="interests-container">
              <div className="interest-box">Problem Solving</div>
              <div className="interest-box">Programming</div>
              <div className="interest-box">Learning New Technologies</div>
              <div className="interest-box">Personal Finance</div>
              <div className="interest-box">UI Designing</div>
            </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/balaganeshbala" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://in.linkedin.com/in/balaganeshbala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </section>
        );
      case "portfolio":
        return (
          <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="project">
              <h3>Project 1</h3>
              <p>Description of Project 1.</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>Description of Project 2.</p>
            </div>
          </section>
        );
      case "contact":
        return (
          <section id="contact">
            <h2>Contact</h2>
            <p>You can reach me at example@example.com</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li><Link href="#" onClick={(e) => handleNavLinkClick(e, "hero")}>Home</Link></li>
            <li><Link href="#" onClick={(e) => { e.preventDefault(); console.log('Portfolio clicked!'); setActiveSection("portfolio"); setIsMenuOpen(false); }}>Portfolio</Link></li>
            <li><Link href="#" onClick={(e) => handleNavLinkClick(e, "contact")}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {renderSection()}
      </main>

      <footer>
        <p>&copy; 2025 My Personal Website</p>
      </footer>
    </div>
  );
}
