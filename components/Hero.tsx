import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, PhoneCall } from 'lucide-react';
import heroImage from '@/CI/web-assets/conduit-hero.jpg';

const proofPoints = [
    'โครงสร้างพื้นฐานโทรคมนาคมของประเทศ',
    'รองรับการใช้โครงสร้างร่วมกัน',
    'สำหรับหน่วยงานรัฐและผู้ประกอบการโทรคมนาคม',
];

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white">
            <Image
                src={heroImage}
                alt="ระบบท่อร้อยสายสื่อสารและงานโครงสร้างพื้นฐานของ NT"
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.96)_36%,rgba(255,255,255,0.64)_72%,rgba(255,255,255,0.18)_100%)]" />

            <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl content-center px-4 py-20 md:min-h-[680px] md:px-8 lg:py-24">
                <div className="max-w-3xl">
                    <div className="mb-7 flex items-center gap-3">
                        <span className="h-12 w-2 rounded-full bg-ntYellow" aria-hidden="true" />
                        <div>
                            <p className="text-sm font-bold uppercase tracking-normal text-ntGray">NT Conduit Portal</p>
                            <p className="text-sm font-bold text-charcoal">Communication Conduit</p>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.12] text-charcoal md:text-6xl lg:text-7xl">
                        บริการท่อร้อยสายสื่อสาร
                    </h1>
                    <p className="mt-5 max-w-2xl text-2xl font-bold leading-snug text-charcoal md:text-3xl">
                        มั่นคงในโครงสร้างพื้นฐาน พร้อมเชื่อมต่อทุกการสื่อสาร
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-ntGray md:text-lg">
                        บริการให้เช่าใช้ท่อร้อยสายสื่อสารใต้ดินที่ได้มาตรฐาน
                        สำหรับหน่วยงานราชการและผู้ประกอบการโทรคมนาคม
                        เพื่อลดการพาดสายบนเสาไฟฟ้าและยกระดับภูมิทัศน์เมืองอย่างเป็นระบบ
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="#services"
                            className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-ntYellow px-6 py-3.5 text-base font-bold text-charcoal transition-colors hover:bg-[#E9BF00]"
                        >
                            ดูภาพรวมบริการ
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-charcoal/20 bg-white/85 px-6 py-3.5 text-base font-bold text-charcoal transition-colors hover:bg-white"
                        >
                            ขอข้อมูลบริการล่าสุด
                            <PhoneCall size={20} />
                        </Link>
                    </div>

                    <div className="mt-12 grid max-w-3xl gap-3 border-t border-lineSoft pt-6 sm:grid-cols-3">
                        {proofPoints.map((point) => (
                            <div key={point} className="flex items-start gap-3 text-sm font-bold leading-6 text-charcoal">
                                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-ntGray" aria-hidden="true" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
