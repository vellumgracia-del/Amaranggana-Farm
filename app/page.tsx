import HeroSection from "@/components/HeroSection";
import AIIoTDashboard from "@/components/AIIoTDashboard";
import ContactSection from "@/components/ContactSection";
import { BookOpen, Cpu, Truck, ShoppingBag, ChevronRight } from "lucide-react";
import Image from "next/image";
import { getHeroBlock, getProducts, getFocusAreas } from "@/sanity/queries";
import { urlForImage } from "@/sanity/lib/image";

export default async function Home() {
    // Fetch data in parallel
    const [heroBlock, products, focusAreas] = await Promise.all([
        getHeroBlock(),
        getProducts(),
        getFocusAreas()
    ]);

    // Fallbacks
    const heroImage = heroBlock?.backgroundImage ? urlForImage(heroBlock.backgroundImage)?.url() : undefined;

    const displayProducts = products?.length > 0 ? products : [
        { title: 'Bayam Merah Organik', desc: 'Kaya akan zat besi dan antioksidan, dipanen pagi hari untuk menjaga kesegaran.', img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=800&auto=format&fit=crop' },
        { title: 'Tomat Ceri Manis', desc: 'Rasa manis alami tanpa rekayasa genetik, cocok untuk salad sehat Anda.', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop' },
        { title: 'Wortel Baby Super', desc: 'Renyah dan manis, ditanam di tanah subur bebas pestisida kimia.', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800&auto=format&fit=crop' },
        { title: 'Selada Hidroponik', desc: 'Dikembangkan dengan teknologi irigasi pintar, bebas dari hama dan tanah.', img: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=800&auto=format&fit=crop' },
    ];

    const displayFocus = focusAreas?.length > 0 ? focusAreas : [
        { title: 'Edukasi Petani', description: 'Program pendampingan komprehensif bagi petani lokal untuk beralih ke metode organik dan meningkatkan efisiensi lahan secara berkelanjutan.', icon: <BookOpen className="w-8 h-8 text-primary" />, colorClass: 'bg-primary/10 text-primary' },
        { title: 'Teknologi Irigasi Pintar', description: 'Pemanfaatan sensor IoT dan AI untuk mengoptimalkan penggunaan air dan nutrisi tanaman, menekan pemborosan sumber daya air.', icon: <Cpu className="w-8 h-8 text-secondary" />, colorClass: 'bg-secondary/10 text-secondary' },
        { title: 'Distribusi Organik', description: 'Sistem rantai pasok pintar yang mengurangi jejak karbon distribusi, memastikan produk sampai ke tangan konsumen dalam keadaan segar.', icon: <Truck className="w-8 h-8 text-footer" />, colorClass: 'bg-footer/10 text-footer' },
    ];

    // Helper map to match string icon name to Lucide Component
    const renderIcon = (name: string | undefined, fallbackIcon: React.ReactNode, wrapperClass: string) => {
        let IconElement = fallbackIcon;
        if (name === 'BookOpen') IconElement = <BookOpen className={`w-8 h-8 ${wrapperClass.split(' ')[1]}`} />;
        if (name === 'Cpu') IconElement = <Cpu className={`w-8 h-8 ${wrapperClass.split(' ')[1]}`} />;
        if (name === 'Truck') IconElement = <Truck className={`w-8 h-8 ${wrapperClass.split(' ')[1]}`} />;

        return (
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform ${wrapperClass}`}>
                {IconElement}
            </div>
        );
    }

    return (
        <main className="min-h-screen">
            <HeroSection
                headline={heroBlock?.headline}
                subHeadline={heroBlock?.subHeadline}
                imageUrl={heroImage}
            />

            {/* Tentang Kami Section */}
            <section id="tentang-kami" className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
                                alt="Pertanian Organik"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Tentang Kami</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Visi Pertanian Organik & Minim Limbah
                            </h3>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Amaranggana Farm percaya bahwa keseimbangan alam adalah kunci untuk masa depan yang sejahtera. Kami hadir untuk mengembangkan metode pertanian yang ramah lingkungan dengan memadukan kearifan lokal pertanian organik dan inovasi teknologi terkini.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Misi kami adalah menghasilkan produk pangan berkualitas tinggi dengan jejak karbon seminimal mungkin, menerapkan prinsip zero waste management, dan memberdayakan komunitas petani lokal.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border-l-4 border-secondary pl-4">
                                    <h4 className="font-bold text-2xl text-slate-900 mb-1">100%</h4>
                                    <p className="text-sm text-slate-500 font-medium">Bebas Pestisida Kimia</p>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <h4 className="font-bold text-2xl text-slate-900 mb-1">Zero</h4>
                                    <p className="text-sm text-slate-500 font-medium">Food Waste Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fokus Kami Section */}
            <section id="fokus-kami" className="py-24 bg-alternative">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Fokus Kami</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 max-w-2xl mx-auto">
                        Solusi Menyeluruh untuk Ekosistem Agrikultur
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {displayFocus.map((focus, i) => {
                            const isCMS = !!(focus as any)._id;
                            const title = isCMS ? (focus as any).title : focus.title;
                            const description = isCMS ? (focus as any).description : focus.description;
                            // Generate default styles based on index for variety
                            const colorClass = i % 3 === 0 ? 'bg-primary/10 text-primary' : i % 3 === 1 ? 'bg-secondary/10 text-secondary' : 'bg-footer/10 text-footer';
                            const fallbackIcon = (focus as any).icon || <BookOpen className={`w-8 h-8 ${colorClass.split(' ')[1]}`} />;

                            return (
                                <div key={i} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                                    {renderIcon(isCMS ? (focus as any).iconName : undefined, fallbackIcon, colorClass)}
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Pusat Kendali AI & IoT Section */}
            <AIIoTDashboard />

            {/* Produk Kami Section dengan Sidebar */}
            <section id="produk-kami" className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Sidebar Sticky */}
                        <div className="w-full lg:w-1/3">
                            <div className="sticky top-32 bg-alternative p-8 rounded-3xl border border-slate-100 shadow-sm">
                                <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Produk Kami</h2>
                                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                    Hasil Bumi Terbaik
                                </h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Kami menyediakan berbagai macam produk pertanian organik segar yang dipanen langsung dari kebun kami dengan standar kualitas tertinggi.
                                </p>
                                <div className="space-y-4">
                                    {['Sayuran Organik', 'Buah-buahan Segar', 'Benih Premium', 'Pupuk Kompos Alami'].map((cat, i) => (
                                        <a key={i} href={`#cat-${i}`} className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group border border-slate-50">
                                            <span className="font-medium text-slate-800 group-hover:text-primary transition-colors">{cat}</span>
                                            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content Products */}
                        <div className="w-full lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Product Cards */}
                                {displayProducts.map((prod, i) => {
                                    const isCMS = !!(prod as any)._id;
                                    const title = isCMS ? (prod as any).name : (prod as any).title;
                                    const desc = isCMS ? (prod as any).description : (prod as any).desc;
                                    const imgUrl = isCMS && (prod as any).image ? urlForImage((prod as any).image)?.url() : isCMS ? '' : (prod as any).img;
                                    const category = isCMS ? (prod as any).category : '';

                                    return (
                                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                                            <div className="relative h-64 overflow-hidden bg-slate-100">
                                                {imgUrl && (
                                                    <Image src={imgUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                )}
                                                {category && (
                                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm z-10">
                                                        {category}
                                                    </div>
                                                )}
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary z-10">
                                                    <ShoppingBag className="w-5 h-5" />
                                                </div>
                                            </div>
                                            <div className="p-6 flex-1 flex flex-col">
                                                <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
                                                <p className="text-slate-600 mb-4 flex-1">{desc}</p>
                                                <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                                    Lihat Detail <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Hubungi Kami Section */}
            <ContactSection />
        </main>
    );
}
