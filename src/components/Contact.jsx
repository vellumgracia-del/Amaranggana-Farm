import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section contact">
            <div className="contact-wrapper glass-panel">
                <div className="contact-info">
                    <h2>Get in <span>Touch</span></h2>
                    <p>Ready to transform your agricultural operations with modern technology? Reach out today.</p>

                    <div className="contact-methods">
                        <div className="method">
                            <MapPin className="text-primary" />
                            <span>Bio-Tech Valley, AgTech District 4</span>
                        </div>
                        <div className="method">
                            <Phone className="text-primary" />
                            <span>+62 800 1234 5678</span>
                        </div>
                        <div className="method">
                            <Mail className="text-primary" />
                            <span>hello@amarangganafarm.tech</span>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn-primary">
                        Send Message <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                    </button>
                </form>
            </div>
        </section>
    );
}
