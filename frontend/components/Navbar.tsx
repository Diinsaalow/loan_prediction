import React from 'react';
import { BarChart3, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] bg-white/80 backdrop-blur-md px-4 py-3 sm:px-10">
            <div className="flex items-center gap-4 text-[#111418]">
                <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BarChart3 size={20} />
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">LoanPred System</h2>
            </div>
            <nav className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <a className="text-[#111418] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Home</a>
                    <a className="text-[#111418] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">About Model</a>
                    <a className="text-[#111418] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact</a>
                </div>
            </nav>
            <div className="md:hidden">
                <Menu className="text-[#111418] cursor-pointer" size={24} />
            </div>
        </header>
    );
};

export default Navbar;
