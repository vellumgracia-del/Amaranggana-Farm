import React from 'react';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

export default function About() {
    const cards = [
        { icon: <Leaf size={32} />, title: "Sustainable", desc: "Eco-friendly practices that protect tomorrow." },
        { icon: <Droplets size={32} />, title: "Resource Efficient", desc: "Smart irrigation and resource management." },
        { icon: <Sun size={32} />, title: "Climate Adaptive", desc: "Resilient crops adapting to global changes." },
        { icon: <Wind size={32} />, title: "Air Quality", desc: "Minimizing carbon footprint locally." }
    ];

    return (
        <section id="about" className="section about">
            <div className="section-header">
                <h2>About <span>Amaranggana</span></h2>
                <p>We are pioneers in combining advanced data science, 3D topographical planning, and sustainable agriculture.</p>
            </div>

            <div className="features-grid">
                {cards.map((card, index) => (
                    <div key={index} className="feature-card glass-panel">
                        <div className="icon-wrapper">{card.icon}</div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
