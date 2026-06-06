'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ntLogo from '@/assets/images/nt-logo.png';

const navItems = [
    { label: 'บริการ', href: '#services' },
    { label: 'การใช้งาน', href: '#use-cases' },
    { label: 'รูปแบบบริการ', href: '#models' },
    { label: 'โครงการอ้างอิง', href: '#proof' },
    { label: 'คำถาม', href: '#faq' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${isScrolled
                ? 'border-lineSoft bg-white/95 shadow-sm backdrop-blur'
                : 'border-white/70 bg-white/90 backdrop-blur'
                }`}
        >
            <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
                <Link
                    href="/"
                    className="flex min-w-0 items-center gap-4"
                    aria-label="NT Conduit"
                >
                    <Image
                        src={ntLogo}
                        alt="National Telecom"
                        priority
                        className="h-10 w-auto shrink-0"
                    />
                    <span className="hidden border-l border-lineSoft pl-4 text-sm font-bold uppercase tracking-normal text-charcoal sm:block">
                        Conduit Portal
                    </span>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex" aria-label="เมนูหลัก">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-bold text-ntGray transition-colors hover:text-charcoal"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-[8px] bg-charcoal px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-ntGray"
                    >
                        ติดต่อขอข้อมูล
                    </Link>
                </nav>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-lineSoft text-charcoal lg:hidden"
                    onClick={() => setIsMobileMenuOpen((open) => !open)}
                    aria-label="เปิดหรือปิดเมนู"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t border-lineSoft bg-white px-4 py-4 shadow-lg lg:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="เมนูหลักบนมือถือ">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-[8px] px-3 py-3 text-base font-bold text-charcoal hover:bg-surfaceMuted"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="mt-2 inline-flex items-center justify-center rounded-[8px] bg-charcoal px-5 py-3 text-base font-bold text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            ติดต่อขอข้อมูลบริการล่าสุด
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
