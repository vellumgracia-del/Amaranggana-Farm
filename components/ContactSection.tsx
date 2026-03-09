"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = new FormData(e.currentTarget);
        // Add Web3Forms Access Key
        formData.append("access_key", "22915e37-d76d-4254-8675-ad97e6017390");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                (e.target as HTMLFormElement).reset(); // Clear the form
            } else {
                console.log("Error", data);
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Fetch error", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="kontak" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-alternative to-background pointer-events-none" />
            <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-[20%] -left-[10%] w-[30%] h-[50%] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Hubungi Kami</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 max-w-2xl mx-auto">
                        Mari Berkolaborasi untuk Masa Depan Bumi
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Tertarik dengan teknologi agrikultur kami atau ingin memesan produk organik segar? Tim Amaranggana Farm siap menjawab semua pertanyaan Anda.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Information Cards */}
                    <div className="w-full lg:w-5/12 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors" />
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Kantor Pusat & Lahan</h4>
                            <p className="text-slate-600 mb-4 leading-relaxed">
                                Jalan Hijau Lestari No. 102, Kawasan Agri-Tech Nusantara, Bandung, Jawa Barat 40164
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                                Lihat di Peta <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4"
                            >
                                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0 text-secondary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                                    <a href="mailto:amarangganafarm@gmail.com" className="text-slate-600 hover:text-primary transition-colors">amarangganafarm@gmail.com</a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4"
                            >
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0 text-blue-500">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Telepon/WhatsApp</h4>
                                    <a href="tel:+628112345678" className="text-slate-600 hover:text-primary transition-colors">+62 811-234-5678</a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-7/12 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    >
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan Langsung</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 block">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Budi Santoso"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 block">Alamat Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="budi@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700 block">Topik / Subjek</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900"
                                >
                                    <option value="">Pilih Topik Diskusi</option>
                                    <option value="Pemesanan Hasil Panen Organik">Pemesanan Hasil Panen Organik</option>
                                    <option value="Kemitraan atau Distribusi">Kemitraan atau Distribusi</option>
                                    <option value="Konsultasi Teknologi IoT/AI">Konsultasi Teknologi IoT/AI</option>
                                    <option value="Pertanyaan Umum Lainnya">Pertanyaan Umum Lainnya</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 block">Pesan Anda</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Ceritakan kebutuhan atau pertanyaan Anda di sini..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Mengirim..." : submitStatus === "success" ? "Terkirim!" : "Kirim Pesan Sekarang"}
                                {!isSubmitting && submitStatus !== "success" && <Send className="w-5 h-5" />}
                            </button>

                            {submitStatus === "success" && (
                                <p className="text-emerald-600 text-sm font-medium mt-2">Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
                            )}
                            {submitStatus === "error" && (
                                <p className="text-red-500 text-sm font-medium mt-2">Terjadi kesalahan. Silakan coba lagi nanti.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
