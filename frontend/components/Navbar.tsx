'use client'
import { BarChart3, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 whitespace-nowrap border-b border-solid border-b-[#e5e7eb] bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between px-4 py-3 sm:px-10">
                <div className="flex items-center justify-between gap-4 text-[#111418]">
                    <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BarChart3 size={20} />
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LoanPred System</h2>
                </div>
                <nav className="hidden md:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <button
                            onClick={() => document.getElementById('predict')?.scrollIntoView({ behavior: 'smooth' })}
                            className="flex w-full md:w-auto min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]"
                        >
                            <span className="truncate">Check Loan Eligibility</span>
                        </button>
                    </div>
                </nav>
                <div className="md:hidden">
                    <Menu className="text-[#111418] cursor-pointer" size={24} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
