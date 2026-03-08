"use client";

export default function Navbar() {
    const scrollToForm = () => {
        document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/90 backdrop-blur-xl transition-all duration-300">
            <div className="max-w-7xl mx-auto px-5 h-16 md:h-20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/30">
                        <span className="material-symbols-outlined text-white text-xl">school</span>
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-tight text-white">LeadPrism</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <a
                        className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors cursor-pointer"
                        href="#destinations"
                        onClick={(e) => scrollToSection(e, "destinations")}
                    >
                        Destinations
                    </a>
                    <a
                        className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors cursor-pointer"
                        href="#programs"
                        onClick={(e) => scrollToSection(e, "programs")}
                    >
                        Programs
                    </a>
                    <a
                        className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors cursor-pointer"
                        href="#success-stories"
                        onClick={(e) => scrollToSection(e, "success-stories")}
                    >
                        Success Stories
                    </a>
                </div>

                <div className="flex items-center">
                    <button
                        onClick={scrollToForm}
                        className="bg-primary text-white px-5 py-2.5 rounded-xl text-xs md:text-sm font-black hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
