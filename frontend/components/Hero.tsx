'use client'
import { ShieldCheck, Clock, Lock, BarChart } from 'lucide-react';

const Hero = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="px-4 md:px-40 flex flex-col items-center py-5">
                <div className="flex flex-col max-w-[1000px] w-full">
                    <div className="flex flex-col gap-6 py-10 md:flex-row items-center">
                        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left md:items-start">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">
                                    Loan Approval Prediction System
                                </h1>
                                <h2 className="text-[#617589] text-lg font-normal leading-relaxed">
                                    Predict loan approval instantly using advanced machine learning algorithms. Fast, secure, and accurate risk assessment for modern finance.
                                </h2>
                            </div>
                            <button
                                onClick={() => document.getElementById('predict')?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex w-full md:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-500/20"
                            >
                                <span className="truncate">Check Loan Eligibility</span>
                            </button>
                        </div>
                        <div
                            className="w-full md:w-1/2 aspect-video bg-cover bg-center rounded-xl shadow-xl overflow-hidden relative group"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjEFTeqG5UwcHfKWoa_gAAqS8QOCz5Ya0-uAet6fQ-s5ObvWdxsa2k6nTBYxEi_aj_uY6gnKWjXl2Ee3LyHUwCJVtlNKdpfoCLRjZTQLRKGqreIML4CPZ6w8rQNTjXbowfr0WpRXiKxxY1ZUfhfe8cu1txmC4Dztz_GDZEXc54C3mt83_I60U7iqwI61O0B8lGyVNAvN8Ku6L5EbPBpMVjo7OFVWnsrUxBJEDEsFehNHpneXS9N-7S5uTphcV0KuVq4qR2RTeqLng")' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="text-green-400" size={20} />
                                    <span className="font-bold">98.5% Accuracy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="px-4 md:px-40 flex justify-center pb-12 bg-white">
                <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
                    <div className="flex flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-[#f6f7f8] p-6 transition-all hover:shadow-md">
                        <div className="text-primary size-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h3 className="text-[#111418] text-lg font-bold leading-tight">Instant Analysis</h3>
                            <p className="text-[#617589] text-sm mt-1">Get approval probability in seconds using optimized random forest models.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-[#f6f7f8] p-6 transition-all hover:shadow-md">
                        <div className="text-primary size-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                            <Lock size={24} />
                        </div>
                        <div>
                            <h3 className="text-[#111418] text-lg font-bold leading-tight">Secure Data</h3>
                            <p className="text-[#617589] text-sm mt-1">Your financial inputs are processed in-memory and never stored.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 rounded-xl border border-[#e5e7eb] bg-[#f6f7f8] p-6 transition-all hover:shadow-md">
                        <div className="text-primary size-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
                            <BarChart size={24} />
                        </div>
                        <div>
                            <h3 className="text-[#111418] text-lg font-bold leading-tight">High Accuracy</h3>
                            <p className="text-[#617589] text-sm mt-1">Trained on thousands of historical loan records for maximum precision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
