"use client"; // This is needed for using client-side hooks like useState

import { useState } from "react";
import Link from "next/link"; // Import Link
import Image from "next/image"

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>I&apos;d love to hear from you! Send me a message and I&apos;ll get back to you as soon as possible.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows={6}
            placeholder="Your message here..."
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="success-message">
            ✅ Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            ❌ {errorMessage}
          </div>
        )}
      </form>

      <div className="contact-info">
        <p>You can also reach me directly at: <a href="mailto:me@balaganesh.in">me@balaganesh.in</a></p>
      </div>
    </section>
  );
}

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
            <div className="divider"></div>
            <div className="social-links">
              <a href="https://github.com/balaganeshbala" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://in.linkedin.com/in/balaganeshbala" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
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
        return <ContactForm />;
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
            <li><Link href="#" onClick={(e) => handleNavLinkClick(e, "hero")} className={activeSection === "hero" ? "active-link" : ""}>Home</Link></li>
            <li><Link href="#" onClick={(e) => { e.preventDefault(); console.log('Portfolio clicked!'); setActiveSection("portfolio"); setIsMenuOpen(false); }} className={activeSection === "portfolio" ? "active-link" : ""}>Portfolio</Link></li>
            <li><Link href="#" onClick={(e) => handleNavLinkClick(e, "contact")} className={activeSection === "contact" ? "active-link" : ""}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {renderSection()}
      </main>

      <footer>
        <p>&copy; 2025 Balaganesh Sevarkodiyon. All rights reserved.</p>
      </footer>
    </div>
  );
}
