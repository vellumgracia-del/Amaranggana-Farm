import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Amaranggana Farm | Pertanian Berkelanjutan",
    description: "Inovasi Hijau untuk Masa Depan Bumi. Solusi pertanian organik, teknologi irigasi pintar, dan distribusi berkelanjutan.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className={`${inter.className} antialiased bg-background overflow-x-hidden`}>
                <Navbar />
                {children}
                <footer className="bg-footer text-white py-12 px-6 flex flex-col items-center justify-center">
                    <div className="text-center font-semibold mb-2">Amaranggana Farm</div>
                    <p className="opacity-80 text-sm">© 2026 Amaranggana Farm. Inovasi Hijau untuk Masa Depan Bumi.</p>
                </footer>
            </body>
        </html>
    );
}
