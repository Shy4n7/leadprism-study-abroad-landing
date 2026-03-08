export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-200/50 dark:border-slate-800/50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-white text-xl">school</span>
                        </div>
                        <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">LeadPrism</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        The premier educational consultancy empowering students to achieve their academic aspirations across the globe.
                    </p>

                </div>
                <div>
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Explore</h4>
                    <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                        <li><a className="hover:text-primary transition-colors" href="#">Find a University</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#destinations">Study Destinations</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#scholarships">Scholarship Finder</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Upcoming Events</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Admissions</h4>
                    <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                        <li><a className="hover:text-primary transition-colors" href="#">Entry Requirements</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Visa Process</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">IELTS Coaching</a></li>
                    </ul>
                </div>

            </div>
            <div className="max-w-7xl mx-auto pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-400">© 2024 LeadPrism Global Education. All rights reserved.</p>
                <div className="flex gap-6 text-xs text-slate-400">
                    <a className="hover:text-primary" href="#">Privacy Policy</a>
                    <a className="hover:text-primary" href="#">Terms of Service</a>
                    <a className="hover:text-primary" href="#">Cookie Settings</a>
                </div>
            </div>
        </footer>
    );
}
