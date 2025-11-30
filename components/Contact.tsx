import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-wide">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                        Contáctame
                    </span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    <a
                        href="https://www.instagram.com/56gumer?igsh=MWhvbWVtNXIzcGI0bQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 transition-transform hover:scale-110 animate-float"
                    >
                        <div className="p-4 rounded-full bg-slate-800/50 border border-white/10 group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white group-hover:text-pink-500 transition-colors"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-pink-400 transition-colors">Instagram</span>
                    </a>

                    <a
                        href="https://www.tiktok.com/@peli.777_7?_r=1&_t=ZS-91op5Xw0rKR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 transition-transform hover:scale-110 animate-float"
                        style={{ animationDelay: '0.5s' }}
                    >
                        <div className="p-4 rounded-full bg-slate-800/50 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white group-hover:text-cyan-400 transition-colors"
                            >
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                            </svg>
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-cyan-400 transition-colors">TikTok</span>
                    </a>

                    <a
                        href="https://wa.me/50257152765"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 transition-transform hover:scale-110 animate-float"
                        style={{ animationDelay: '1s' }}
                    >
                        <div className="p-4 rounded-full bg-slate-800/50 border border-white/10 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white group-hover:text-green-500 transition-colors"
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-green-400 transition-colors">WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
