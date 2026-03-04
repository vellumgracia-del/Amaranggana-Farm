import React from 'react';
import Scene from './components/Scene';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Scene />
            <div className="content-overlay">
                <header className="navbar">
                    <div className="logo">Amaranggana<span>Farm</span></div>
                    <nav>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#contact" className="btn-primary">Contact Us</a>
                    </nav>
                </header>

                <main>
                    <section className="hero">
                        <h1>Cultivating the Future <span>with Technology</span></h1>
                        <p>Modern agricultural solutions powered by data and 3D visualization. We bring precision farming to the next level.</p>
                        <div className="hero-actions">
                            <a href="#services" className="btn-primary" style={{ textDecoration: 'none' }}>Explore Solutions</a>
                            <a href="#about" className="btn-secondary" style={{ textDecoration: 'none' }}>Learn More</a>
                        </div>
                    </section>

                    <About />
                    <Services />
                    <Contact />
                </main>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Amaranggana Farm. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}

export default App;
