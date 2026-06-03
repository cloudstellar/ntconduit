import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, MapPin, Phone } from 'lucide-react';
import ntLogo from '@/CI/NT_2_v3.png';

const footerLinks = [
    { label: 'บริการท่อร้อยสาย', href: '#services' },
    { label: 'การใช้งาน', href: '#use-cases' },
    { label: 'รูปแบบบริการ', href: '#models' },
    { label: 'โครงการอ้างอิง', href: '#proof' },
    { label: 'คำถามที่พบบ่อย', href: '#faq' },
];

const Footer = () => {
    return (
        <footer className="border-t border-lineSoft bg-white">
            <div className="bg-ntYellow">
                <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[1fr_auto] md:items-center md:px-8">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-normal text-charcoal">Official Contact</p>
                        <h2 className="mt-2 text-2xl font-bold leading-tight text-charcoal md:text-3xl">
                            ขอข้อมูลบริการ เส้นทาง และเงื่อนไขล่าสุด
                        </h2>
                    </div>
                    <Link
                        href="https://www.ntplc.co.th"
                        className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-charcoal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ntGray"
                    >
                        ไปที่เว็บไซต์ NT
                        <ExternalLink size={18} />
                    </Link>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.55fr_0.75fr]">
                    <div>
                        <Image
                            src={ntLogo}
                            alt="บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน)"
                            className="h-auto w-[132px]"
                        />
                        <p className="mt-5 max-w-xl text-sm leading-7 text-ntGray">
                            ข้อมูลบริการท่อร้อยสายสื่อสารและบริการโครงข่ายปลายทางที่เกี่ยวข้อง
                            จัดทำเพื่อประกอบการติดต่อประสานงานกับฝ่ายท่อร้อยสาย
                            สายงานโครงสร้างพื้นฐาน
                        </p>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-charcoal">เมนู</h3>
                        <nav className="mt-4 grid gap-3" aria-label="เมนูส่วนท้าย">
                            {footerLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-sm font-bold text-ntGray hover:text-charcoal">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-charcoal">ติดต่อ</h3>
                        <div className="mt-4 grid gap-4 text-sm leading-7 text-ntGray">
                            <div className="flex gap-3">
                                <MapPin className="mt-1 h-4 w-4 shrink-0 text-charcoal" aria-hidden="true" />
                                <p>
                                    ฝ่ายท่อร้อยสาย สายงานโครงสร้างพื้นฐาน<br />
                                    บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน)
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Phone className="mt-1 h-4 w-4 shrink-0 text-charcoal" aria-hidden="true" />
                                <p>Contact Center 1888</p>
                            </div>
                            <Link href="https://www.ntplc.co.th" className="font-bold text-charcoal hover:text-ntGray">
                                www.ntplc.co.th
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-lineSoft pt-6 text-xs font-bold text-ntGray">
                    <p>© {new Date().getFullYear()} National Telecom Public Company Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
