import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <>
      <Head>
        <title>Modern Web Design Studio</title>
        <meta name="description" content="Award-winning web design and development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <nav className="nav">
          <div className="logo">WEB<span>STUDIO</span></div>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn-primary">Contact</a>
          </div>
        </nav>

        <section className="hero" id="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Crafting Digital
              <span className="gradient-text"> Experiences</span>
            </h1>
            <p className="hero-subtitle">
              We transform ideas into stunning websites that captivate and convert
            </p>
            <div className="hero-cta">
              <button className="btn-primary">View Our Work</button>
              <button className="btn-secondary">Get Started</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1"></div>
            <div className="floating-card card-2"></div>
            <div className="floating-card card-3"></div>
          </div>
        </section>

        <section className="stats">
          <div className="stat-item">
            <div className="stat-number">250+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Awards Won</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Team Members</div>
          </div>
        </section>

        <section className="work" id="work">
          <h2 className="section-title">Featured Work</h2>
          <div className="work-grid">
            <div className="work-card">
              <div className="work-image" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
              <div className="work-info">
                <h3>E-Commerce Platform</h3>
                <p>Modern shopping experience with seamless checkout</p>
                <div className="work-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Stripe</span>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
              <div className="work-info">
                <h3>SaaS Dashboard</h3>
                <p>Analytics platform with real-time data visualization</p>
                <div className="work-tags">
                  <span>Next.js</span>
                  <span>D3.js</span>
                  <span>PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="work-card">
              <div className="work-image" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
              <div className="work-info">
                <h3>Portfolio Website</h3>
                <p>Creative showcase with smooth animations</p>
                <div className="work-tags">
                  <span>Vue.js</span>
                  <span>GSAP</span>
                  <span>WebGL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive interfaces that users love</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Fast, scalable websites built with modern tech</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile Apps</h3>
              <p>Native and cross-platform mobile solutions</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Performance</h3>
              <p>Optimization for speed and user experience</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>SEO</h3>
              <p>Rank higher and reach more customers</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Maintenance</h3>
              <p>Ongoing support and updates for your site</p>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <h2 className="section-title">What Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Outstanding work! They transformed our vision into a beautiful, functional website that exceeded expectations."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>CEO, TechStart</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Professional, creative, and incredibly responsive. The team delivered our project on time and on budget."
              </p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>Founder, GrowthLabs</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Best decision we made! Our conversion rate increased by 200% after the redesign. Highly recommended."
              </p>
              <div className="testimonial-author">
                <strong>Emily Rodriguez</strong>
                <span>Marketing Director, ShopNow</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something amazing together</p>
          <button className="btn-primary btn-large">Get in Touch</button>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>WEBSTUDIO</h4>
              <p>Crafting digital experiences since 2015</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <a href="#services">Web Design</a>
              <a href="#services">Development</a>
              <a href="#services">Mobile Apps</a>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#work">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 WebStudio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
