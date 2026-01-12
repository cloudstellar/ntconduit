'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'เกี่ยวกับโครงการ', href: '#about' },
        { label: 'โครงข่ายท่อร้อยสาย', href: '#network' },
        { label: 'คำถามที่พบบ่อย', href: '#faq' },
        { label: 'ติดต่อ', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo Icon Placeholder - could be an SVG */}
                    <div className="w-8 h-8 bg-ntYellow rounded-md flex items-center justify-center">
                        <span className="text-charcoal font-bold text-xl">N</span>
                    </div>
                    <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-charcoal' : 'text-charcoal'} `}>
                        NT Conduit
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-ntYellow transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button className="bg-ntYellow hover:bg-yellow-400 text-charcoal px-5 py-2 rounded-md text-sm font-semibold transition-colors">
                        เข้าสู่ระบบ
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-charcoal p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden p-4 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-base font-medium text-charcoal py-2 border-b border-gray-50"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button className="bg-ntYellow text-charcoal px-5 py-3 rounded-md text-base font-semibold w-full mt-2">
                        เข้าสู่ระบบ
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
