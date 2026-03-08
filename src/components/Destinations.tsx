"use client";
import { useState } from "react";
import Image from "next/image";

const destinations = [
    {
        id: "uk",
        name: "United Kingdom",
        tagline: "World-class Heritage",
        universities: "150+",
        avgCost: "£15,000/yr",
        visaSuccess: "94%",
        accentColor: "#0ea5e9",
        bgGlow: "rgba(14,165,233,0.25)",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80&fit=crop",
    },
    {
        id: "canada",
        name: "Canada",
        tagline: "PR & Work Opportunities",
        universities: "200+",
        avgCost: "CAD 25,000/yr",
        visaSuccess: "91%",
        accentColor: "#14b8a6",
        bgGlow: "rgba(20,184,166,0.25)",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80&fit=crop",
    },
    {
        id: "australia",
        name: "Australia",
        tagline: "Quality Lifestyle",
        universities: "120+",
        avgCost: "AUD 30,000/yr",
        visaSuccess: "89%",
        accentColor: "#f59e0b",
        bgGlow: "rgba(245,158,11,0.25)",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop",
    },
    {
        id: "usa",
        name: "USA",
        tagline: "Innovation Hub",
        universities: "500+",
        avgCost: "$35,000/yr",
        visaSuccess: "87%",
        accentColor: "#f97316",
        bgGlow: "rgba(249,115,22,0.25)",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80&fit=crop",
    },
];

export default function Destinations() {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    return (
        <>
            <section id="destinations" className="py-24 bg-background-light dark:bg-background-dark px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                        <div>
                            <h2 className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4">Study Abroad</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Top Study Destinations</h3>
                            <p className="text-slate-500 dark:text-slate-400 mt-3 text-base">Explore universities and courses in your dream country.</p>
                        </div>
                        <a href="#consultation-form" className="text-primary font-semibold flex items-center gap-1 hover:gap-3 transition-all text-sm whitespace-nowrap">
                            View All Destinations <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </a>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {destinations.map((dest) => {
                            const isActive = activeCard === dest.id;
                            return (
                                <div
                                    key={dest.id}
                                    className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 group
                                        ${isActive ? "scale-[1.03] shadow-2xl ring-2" : "hover:scale-[1.02] hover:shadow-xl shadow-lg"}
                                    `}
                                    style={{
                                        background: `linear-gradient(135deg, ${isActive ? dest.accentColor + "33" : "rgba(30,30,40,0.95)"}, rgba(15,15,25,0.98))`,
                                        boxShadow: isActive ? `0 20px 60px ${dest.bgGlow}, 0 0 0 2px ${dest.accentColor}` : undefined,
                                        minHeight: "380px",
                                    }}
                                    onClick={() => setActiveCard(isActive ? null : dest.id)}
                                >
                                    {/* Landmark photo — fills top portion */}
                                    <div className="relative w-full overflow-hidden" style={{ height: "240px" }}>
                                        <Image
                                            src={dest.image}
                                            alt={dest.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* gradient overlay at bottom for text readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    </div>

                                    {/* Info at bottom */}
                                    <div className="px-5 pb-5">
                                        <h4 className="text-white text-xl font-bold leading-tight">{dest.name}</h4>
                                        <p className="text-slate-400 text-sm mt-0.5 mb-3">{dest.tagline}</p>

                                        {/* Expandable stats on hover/click */}
                                        <div
                                            className={`grid grid-cols-3 gap-2 transition-all duration-500 overflow-hidden ${isActive ? "max-h-32 opacity-100" : "max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100"}`}
                                        >
                                            <div className="text-center bg-white/5 rounded-xl py-2 px-1">
                                                <p className="text-white font-bold text-sm">{dest.universities}</p>
                                                <p className="text-slate-500 text-[10px] leading-tight mt-0.5">Universities</p>
                                            </div>
                                            <div className="text-center bg-white/5 rounded-xl py-2 px-1">
                                                <p className="font-bold text-sm" style={{ color: dest.accentColor }}>{dest.visaSuccess}</p>
                                                <p className="text-slate-500 text-[10px] leading-tight mt-0.5">Visa Success</p>
                                            </div>
                                            <div className="text-center bg-white/5 rounded-xl py-2 px-1">
                                                <p className="text-white font-bold text-[10px] leading-tight">{dest.avgCost}</p>
                                                <p className="text-slate-500 text-[10px] leading-tight mt-0.5">Avg Cost</p>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <div
                                            className={`mt-3 transition-all duration-500 overflow-hidden ${isActive ? "max-h-16 opacity-100" : "max-h-0 opacity-0 group-hover:max-h-16 group-hover:opacity-100"}`}
                                        >
                                            <a
                                                href="#consultation-form"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:brightness-110"
                                                style={{ background: dest.accentColor, color: "#fff" }}
                                            >
                                                Explore {dest.name}
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Programs / Roadmap section — unchanged */}
            <section id="programs" className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10 skew-y-3"></div>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-primary font-black uppercase tracking-[0.2em] text-sm mb-4">The Roadmap</h2>
                        <h3 className="text-4xl font-black text-slate-900 dark:text-white">5 Steps to Your Global Future</h3>
                    </div>
                    <div className="grid md:grid-cols-5 gap-8 relative">
                        <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>
                        {[
                            { icon: "forum", label: "Consultation", desc: "Personalized evaluation of your academic goals." },
                            { icon: "list_alt", label: "Shortlisting", desc: "Finding the perfect match among 2,000+ unis." },
                            { icon: "description", label: "Application", desc: "Expert guidance on SOPs, LORs, and essays." },
                            { icon: "credit_card", label: "Visa Guidance", desc: "Flawless documentation for successful visa grant." },
                        ].map((step) => (
                            <div key={step.label} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-background-light dark:bg-background-dark border-4 border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 shadow-xl">
                                    <span className="material-symbols-outlined text-3xl text-slate-400 dark:text-slate-600 group-hover:text-primary">{step.icon}</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">{step.label}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-primary border-4 border-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-primary/30">
                                <span className="material-symbols-outlined text-3xl text-white">flight_takeoff</span>
                            </div>
                            <h4 className="font-bold text-lg mb-2">Departure</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">Pre-departure briefing and on-ground support.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
