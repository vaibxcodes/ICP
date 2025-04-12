// App.js
import React from 'react';

function App() {
  return (
    <div className="App bw">
      <header className="header">
        <h1 className="logo">MonoStudio</h1>
        <nav>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Bold Ideas. Simple Execution.</h2>
        <p>We build sleek, high-impact websites and brands.</p>
        <a className="btn" href="#contact">Start a Project</a>
      </section>

      <section id="services" className="section">
        <h3>Our Services</h3>
        <div className="card-container">
          <div className="card bw-card">Brand Design</div>
          <div className="card bw-card">UI/UX</div>
          <div className="card bw-card">Web Development</div>
        </div>
      </section>

      <section id="testimonials" className="section alt">
        <h3>What Clients Say</h3>
        <div className="card-container">
          <div className="card bw-dark">“Incredible attention to detail.” – Maya R.</div>
          <div className="card bw-dark">“Sleekest site we’ve had.” – Theo B.</div>
        </div>
      </section>

      <section id="contact" className="section">
        <h3>Contact</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} MonoStudio</p>
      </footer>
    </div>
  );
}

export default App;
