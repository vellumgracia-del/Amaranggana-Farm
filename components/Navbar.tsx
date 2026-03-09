"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className={`flex items-center gap-2 font-bold text-2xl tracking-tighter transition-colors ${isScrolled ? "text-primary" : "text-white"
                        }`}
                >
                    <Leaf className="w-6 h-6" />
                    Amaranggana Farm
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {["Beranda", "Tentang Kami", "Fokus Kami"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className={`font-medium transition-colors hover:text-secondary ${isScrolled ? "text-slate-700" : "text-white/90"
                                }`}
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="#kontak"
                        className={`px-5 py-2.5 rounded-full font-semibold transition-all ${isScrolled
                            ? "bg-primary text-white hover:bg-emerald-700"
                            : "bg-white text-primary hover:bg-slate-100"
                            }`}
                    >
                        Hubungi Kami
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden ${isScrolled ? "text-primary" : "text-white"
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
                    {["Beranda", "Tentang Kami", "Fokus Kami"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-slate-800 font-medium hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="#kontak"
                        className="bg-primary text-white text-center px-4 py-2 rounded-full font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Hubungi Kami
                    </Link>
                </div>
            )}
        </nav>
    );
}
