"use client";

import { motion } from "framer-motion";
import { Activity, CloudRain, ThermometerSun, Leaf, Zap, Wifi } from "lucide-react";

export default function AIIoTDashboard() {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden" id="ai-iot">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-emerald-400 font-medium text-sm mb-6 border border-white/10 backdrop-blur-md"
                    >
                        <Wifi className="w-4 h-4 animate-pulse" />
                        Live AI & IoT Integration
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Pusat Kendali Cerdas Amaranggana Farm
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Sistem prediksi bertenaga AI dan sensor IoT yang bekerja 24/7 memantau kondisi lahan secara real-time, mengoptimalkan setiap tetes air dan nutrisi tanaman.
                    </p>
                </div>

                {/* Dashboard Mockup */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 md:p-8 shadow-2xl"
                    >
                        {/* Top Bar */}
                        <div className="flex justify-between items-center border-b border-slate-700/50 pb-6 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                                    <Activity className="text-primary w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold">Status Lahan Alpha-01</h3>
                                    <p className="text-emerald-400 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Optimal
                                    </p>
                                </div>
                            </div>
                            <div className="text-right hidden sm:block">
                                <p className="text-slate-400 text-sm">Prediksi AI Cuaca</p>
                                <p className="text-white font-medium flex items-center justify-end gap-2">
                                    12 Menit Menuju Hujan Ringan <CloudRain className="w-4 h-4 text-blue-400" />
                                </p>
                            </div>
                        </div>

                        {/* Grid Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {/* Stat 1 */}
                            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/30">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <CloudRain className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <span className="text-emerald-400 text-xs font-medium px-2 py-1 bg-emerald-400/10 rounded-lg">Target: 40%</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-1">Kelembapan Tanah</p>
                                <div className="flex items-end gap-2">
                                    <h4 className="text-3xl font-bold text-white">42.5<span className="text-lg text-slate-500">%</span></h4>
                                </div>
                                {/* Progress Bar */}
                                <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1.5, delay: 0.2 }}
                                        className="h-full bg-blue-500 rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700/30">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <ThermometerSun className="w-6 h-6 text-secondary" />
                                    </div>
                                    <span className="text-slate-400 text-xs font-medium px-2 py-1 bg-slate-800 rounded-lg">Stabil</span>
                                </div>
                                <p className="text-slate-400 text-sm mb-1">Suhu Udara & Cahaya</p>
                                <div className="flex items-end gap-2">
                                    <h4 className="text-3xl font-bold text-white">28<span className="text-lg text-slate-500">°C</span></h4>
                                    <span className="text-secondary text-sm font-medium">/ 14,200 lx</span>
                                </div>
                                {/* Progress Bar */}
                                <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "60%" }}
                                        transition={{ duration: 1.5, delay: 0.4 }}
                                        className="h-full bg-secondary rounded-full"
                                    />
                                </div>
                            </div>

                            {/* Stat 3 - AI specific */}
                            <div className="bg-gradient-to-br from-primary/20 to-emerald-900/10 rounded-2xl p-6 border border-primary/30 relative overflow-hidden group">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                                        <Zap className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <span className="flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                    </span>
                                </div>
                                <p className="text-emerald-100 text-sm mb-1 relative z-10">AI Health Prediction</p>
                                <div className="flex items-end gap-2 relative z-10">
                                    <h4 className="text-3xl font-bold text-white">98.2<span className="text-lg text-emerald-500/80">%</span></h4>
                                </div>
                                <p className="text-xs text-emerald-300 mt-4 relative z-10 font-medium">Bebas penyakit, perkiraan panen maju 4 hari.</p>
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4 border-t border-slate-700/50">
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Irigasi otomatis sedang beroperasi di Sektor C.
                            </div>
                            <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors border border-white/5">
                                Lihat Panel Penuh
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
