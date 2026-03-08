"use client";

import ConsultationForm from "./ConsultationForm";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col pt-24 md:pt-32 pb-20 px-6 overflow-hidden bg-background-dark">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    alt="Study Abroad Background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-fmPRnxkNYgEheDQZhBNuSDFwsu2XY5ethWQ2lFz9rEKe7Ig4f5HLcqSuQMHIz6AmT5O9EbaF54if7cRToaMso5YZwIwM4HaYoBrbwZWwdw-LzKZ90aNgxBteeDQIO__5M7BW6C-WL-bVD4nPtatLE5cA5-Hp-XXTDS73A2Ia4ICm5LOWxuGImMuJ-0qBUK43jAVkeWzw4qY_vUCmr5AN-pgjP4-1FDmqSKckvZT5zvm_fHiiNfcpjKGdskbgNn7ZajZtaeg2VMI"
                    fill
                    priority
                    className="object-cover opacity-40 md:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-transparent to-background-dark"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8 md:space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/90">Premium Study Abroad Partner</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tight">
                        Your Gateway to <br />
                        <span className="text-primary inline-block mt-2">Global Excellence</span>
                    </h1>

                    <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl font-light">
                        Navigate the complexities of international education with bespoke consulting for the world&apos;s most prestigious universities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="flex -space-x-3">
                            {[
                                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&q=80&fit=crop",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&q=80&fit=crop",
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&q=80&fit=crop",
                                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&q=80&fit=crop"
                            ].map((src, i) => (
                                <div key={i} className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-background-dark overflow-hidden shadow-2xl">
                                    <Image
                                        alt={`Successful Student ${i + 1}`}
                                        src={src}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-background-dark bg-primary flex items-center justify-center text-white text-xs font-black shadow-2xl">
                                5k+
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-black text-white">Trusted by 5,000+ Students</p>
                            <p className="text-xs text-slate-400 font-medium">Join the elite network of global scholars</p>
                        </div>
                    </div>
                </div>

                <div className="w-full relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-orange-600/30 blur-2xl opacity-20 rounded-[3rem]"></div>
                    <ConsultationForm />
                </div>
            </div>
        </section>
    );
}
