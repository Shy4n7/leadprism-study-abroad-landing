"use client";

import Image from "next/image";

export default function Testimonials() {
    const scrollToForm = () => {
        document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden" id="success-stories">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                        Real Stories from <br />
                        <span className="text-primary">Global Students</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl font-light leading-relaxed">
                        Hear from our students who are currently pursuing their dreams at top-tier institutions around the world.
                    </p>
                </div>

                <div className="grid grid-cols-2 max-w-sm mx-auto gap-4 mb-20">
                    <div className="bg-primary p-6 rounded-2xl text-center shadow-xl shadow-primary/20">
                        <p className="text-3xl font-black text-white">98%</p>
                        <p className="text-[10px] font-black text-white/80 uppercase tracking-widest mt-1">Visa Success</p>
                    </div>
                    <div className="bg-primary p-6 rounded-2xl text-center shadow-xl shadow-primary/20">
                        <p className="text-3xl font-black text-white">150+</p>
                        <p className="text-[10px] font-black text-white/80 uppercase tracking-widest mt-1">Universities</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* David Chen */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative group transition-all hover:-translate-y-2">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-14 h-14">
                                <Image
                                    alt="David Chen"
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&q=80&fit=crop"
                                    fill
                                    className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-slate-50"
                                />
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 text-lg">David Chen</h4>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Masters at Oxford University</p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-light mb-8 italic">
                            &quot;The guidance I received at LeadPrism was instrumental in my acceptance to Oxford. They helped refine my SOP until it truly reflected my passion for Economics.&quot;
                        </p>
                        <div className="flex gap-1 text-primary">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                            ))}
                        </div>
                    </div>

                    {/* Sarah Miller */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative group transition-all hover:-translate-y-2 text-left">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-14 h-14">
                                <Image
                                    alt="Sarah Miller"
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&q=80&fit=crop"
                                    fill
                                    className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-slate-50"
                                />
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 text-lg">Sarah Miller</h4>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Undergraduate at MIT</p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-light mb-8 italic">
                            &quot;From initial application to visa approval, the entire journey was seamless. The expertise of their consultants in STEM programs is unmatched.&quot;
                        </p>
                        <div className="flex gap-1 text-primary">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                            ))}
                        </div>
                    </div>

                    {/* Priya Sharma */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 relative group transition-all hover:-translate-y-2 lg:col-span-1 md:col-span-2 lg:max-w-none md:max-w-md md:mx-auto text-left">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-14 h-14">
                                <Image
                                    alt="Priya Sharma"
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&q=80&fit=crop"
                                    fill
                                    className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ring-4 ring-slate-50"
                                />
                            </div>
                            <div>
                                <h4 className="font-black text-slate-900 text-lg">Priya Sharma</h4>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">MBA at London Business School</p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed font-light mb-8 italic">
                            &quot;LeadPrism didn&apos;t just help with my application; they helped me build a profile that was competitive for top-tier business schools globally.&quot;
                        </p>
                        <div className="flex gap-1 text-primary">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,transparent_100%)] from-primary/40"></div>
                    </div>
                    <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                        <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Your Elite Academic <br />
                            Journey Starts <span className="text-primary">Today</span>
                        </h3>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Join over 5,000 students who have achieved international excellence through our bespoke consulting services.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                            <button
                                onClick={scrollToForm}
                                className="bg-primary text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest"
                            >
                                Secure Your Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
