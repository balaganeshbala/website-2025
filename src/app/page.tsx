"use client"; // This is needed for using client-side hooks like useState

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero"); // Default to 'hero'

  const renderSection = () => {
    switch (activeSection) {
      case "hero":
        return (
          <section id="hero" className="hero-section">
            <h1>Welcome to My Personal Website</h1>
            <p>A place to showcase my work and connect with me.</p>
          </section>
        );
      case "about":
        return (
          <section id="about">
            <h2>About Me</h2>
            <p>This is a placeholder for information about me.</p>
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
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("hero"); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("about"); }}>About</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("portfolio"); }}>Portfolio</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection("contact"); }}>Contact</a></li>
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
