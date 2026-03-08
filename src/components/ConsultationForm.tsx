"use client";

import { useState } from "react";

export default function ConsultationForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        destination: "",
        qualification: "",
        ielts: "not-started",
        intake: "fall",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = "Invalid phone number format";
        }
        if (!formData.destination) newErrors.destination = "Please select a destination";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError("");

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

            if (!GOOGLE_SCRIPT_URL) {
                throw new Error("Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL environment variable");
            }

            // Submit using the exact logic requested by the user
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Crucial for GAS redirects and CORS issues on simple POSTs
                body: JSON.stringify(formData),
            });

            // Since we use no-cors, we assume success if no error is thrown
            setIsSuccess(true);
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitError("Something went wrong. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="glass-effect p-8 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-center space-y-6 min-h-[400px] border border-white/20 relative animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40">
                    <span className="material-symbols-outlined text-5xl font-black">check_circle</span>
                </div>
                <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white">Application <span className="text-primary">Received!</span></h3>
                    <p className="text-white/60 font-light max-w-xs mx-auto">
                        Thank you! A study abroad advisor will contact you shortly to begin your journey.
                    </p>
                </div>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-primary font-black uppercase tracking-widest text-xs hover:text-white transition-all transform hover:scale-105"
                >
                    Submit Another Enquiry
                </button>
            </div>
        );
    }

    return (
        <div className="glass-effect p-6 md:p-8 rounded-[2rem] shadow-2xl relative group border border-white/20">
            {/* Top highlight line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-6">Free Consultation</h3>

            <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
                {submitError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-[10px] font-bold text-center uppercase tracking-widest">
                        {submitError}
                    </div>
                )}

                {/* Full Name - 100% */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">Full Name</label>
                    <input
                        name="name"
                        className={`w-full bg-white/[0.04] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all`}
                        placeholder="Enter your full name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] ml-1 font-bold">{errors.name}</p>}
                </div>

                {/* Phone Number - 100% */}
                <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">Phone Number</label>
                    <input
                        name="phone"
                        className={`w-full bg-white/[0.04] border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all`}
                        placeholder="+1 (555) 000-0000"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] ml-1 font-bold">{errors.phone}</p>}
                </div>

                {/* Email & City - 50/50 */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">Email</label>
                        <input
                            name="email"
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all"
                            placeholder="email@example.com"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">City</label>
                        <input
                            name="city"
                            className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all"
                            placeholder="Your City"
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                    </div>
                </div>

                {/* Study Destination & Current Qualification - 50/50 */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">Study Destination</label>
                        <div className="relative">
                            <select
                                name="destination"
                                className={`w-full bg-white/[0.04] border ${errors.destination ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all appearance-none cursor-pointer`}
                                value={formData.destination}
                                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                            >
                                <option value="" className="bg-slate-900">Select Destination</option>
                                <option value="uk" className="bg-slate-900">United Kingdom</option>
                                <option value="usa" className="bg-slate-900">USA</option>
                                <option value="canada" className="bg-slate-900">Canada</option>
                                <option value="australia" className="bg-slate-900">Australia</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none text-lg">expand_more</span>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">Current Qualification</label>
                        <div className="relative">
                            <select
                                name="qualification"
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all appearance-none cursor-pointer"
                                value={formData.qualification}
                                onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                            >
                                <option value="" className="bg-slate-900">Select Level</option>
                                <option value="high-school" className="bg-slate-900">High School</option>
                                <option value="undergraduate" className="bg-slate-900">Undergraduate</option>
                                <option value="postgraduate" className="bg-slate-900">Postgraduate</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none text-lg">expand_more</span>
                        </div>
                    </div>
                </div>

                {/* IELTS Status & Preferred Intake - 50/50 */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">IELTS Status</label>
                        <div className="relative">
                            <select
                                name="ielts"
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all appearance-none cursor-pointer"
                                value={formData.ielts}
                                onChange={(e) => setFormData({ ...formData, ielts: e.target.value })}
                            >
                                <option value="not-started" className="bg-slate-900">Not Started</option>
                                <option value="preparing" className="bg-slate-900">Preparing</option>
                                <option value="taken" className="bg-slate-900">Taken</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none text-lg">expand_more</span>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-white/70 uppercase tracking-[0.15em] ml-1">Preferred Intake</label>
                        <div className="relative">
                            <select
                                name="intake"
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-2 focus:ring-primary/60 focus:bg-white/[0.08] focus:border-white/20 outline-none transition-all appearance-none cursor-pointer"
                                value={formData.intake}
                                onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                            >
                                <option value="fall" className="bg-slate-900">Fall</option>
                                <option value="spring" className="bg-slate-900">Spring</option>
                                <option value="next-year" className="bg-slate-900">Next Year</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none text-lg">expand_more</span>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-orange-600 text-white font-black py-4 rounded-xl shadow-xl shadow-primary/40 transition-all transform active:scale-95 mt-4 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                >
                    {isSubmitting ? "PROCESSING..." : "GET STARTED NOW"}
                </button>

                <p className="text-[9px] text-center text-white/40 uppercase tracking-[0.2em] mt-4 font-bold">
                    Your data is secured with enterprise-grade encryption
                </p>
            </form>
        </div>
    );
}
