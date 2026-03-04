import React from 'react';
import { Cpu, Sprout, BarChart, Plane } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: "Precision Farming",
            desc: "Utilize IoT sensors to monitor soil moisture, nutrients, and climatic conditions in real-time.",
            icon: <Sprout size={40} className="text-primary" />
        },
        {
            title: "Drone Surveying",
            desc: "High-resolution 3D topography and crop health analysis via autonomous drones.",
            icon: <Plane size={40} className="text-primary" />
        },
        {
            title: "Yield Analytics",
            desc: "Predictive algorithms that boost harvest quality and forecast seasonal yields.",
            icon: <BarChart size={40} className="text-primary" />
        },
        {
            title: "Smart Greenhouses",
            desc: "Automated climate control systems designed for optimal growth conditions.",
            icon: <Cpu size={40} className="text-primary" />
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="section-header">
                <h2>Our <span>Technology</span></h2>
                <p>Empowering agriculture with next-generation tools.</p>
            </div>

            <div className="services-list">
                {services.map((svc, i) => (
                    <div key={i} className="service-item glass-panel">
                        <div className="service-icon">{svc.icon}</div>
                        <div className="service-content">
                            <h3>{svc.title}</h3>
                            <p>{svc.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
