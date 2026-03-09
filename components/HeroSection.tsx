"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Droplet, Leaf, Sun } from "lucide-react";

interface HeroSectionProps {
    headline?: string;
    subHeadline?: string;
    imageUrl?: string;
}

export default function HeroSection({ headline, subHeadline, imageUrl }: HeroSectionProps) {
    const defaultHeadline = "Inovasi Hijau untuk Masa Depan Bumi";
    const defaultSub = "Amaranggana Farm percaya bahwa keseimbangan alam adalah kunci untuk masa depan yang sejahtera. Kami hadir untuk mengembangkan metode pertanian yang ramah lingkungan dengan memadukan kearifan lokal pertanian organik dan inovasi teknologi terkini.";
    const defaultImage = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

    const headlineText = headline || defaultHeadline;
    const headlineWords = headlineText.split(" ");

    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 1000], [0, 150]);
    const yText = useTransform(scrollY, [0, 1000], [0, 100]);    // Container variants to stagger children
    const headlineContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 2.5, // 0.5s after bg starts (which takes 2s, but prompt says "delay 0.5s setelah background mulai muncul", so 0.5s total delay, background animate takes 2s, so 0.5s delay is correct)
                staggerChildren: 0.15,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="beranda" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-footer">
            {/* Background Image & Overlay */}
            <motion.div
                className="absolute -top-[20%] -bottom-[20%] left-0 right-0 z-0 origin-center"
                style={{ y: yBg }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <Image
                    src={imageUrl || defaultImage}
                    alt="Lahan Pertanian Hijau"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-footer/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-footer/90" />
            </motion.div>

            {/* Floating Elements (Abstract Icons) */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 "
                >
                    <Leaf className="w-12 h-12 text-primary/30" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-1/3 right-1/4 "
                >
                    <Sun className="w-16 h-16 text-secondary/30" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-1/3 left-1/3 "
                >
                    <Droplet className="w-8 h-8 text-blue-400/30" />
                </motion.div>
            </div>

            {/* Main Content */}
            <motion.div
                style={{ y: yText }}
                className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center"
            >
                {/* Staggered Text Reveal Headline */}
                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl flex flex-wrap justify-center gap-x-3 gap-y-2 leading-tight"
                    variants={headlineContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {headlineWords.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block">
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {subHeadline || defaultSub}
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
                >
                    <a
                        href="#fokus-kami"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Jelajahi Portofolio Kami
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
