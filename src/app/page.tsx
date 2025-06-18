import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <h1>Welcome to My Personal Website</h1>
          <p>A place to showcase my work and connect with me.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>This is a placeholder for information about me.</p>
        </section>

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

        <section id="contact">
          <h2>Contact</h2>
          <p>You can reach me at example@example.com</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 My Personal Website</p>
      </footer>
    </div>
  );
}
