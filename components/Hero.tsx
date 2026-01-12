import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-charcoal">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/hero.png"
                    alt="Underground conduit infrastructure"
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ntYellow/10 border border-ntYellow/30 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-ntYellow animate-pulse" />
                        <span className="text-ntYellow text-sm font-medium">โครงสร้างพื้นฐานโทรคมนาคมแห่งชาติ</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6 font-primary">
                        ท่อร้อยสายสื่อสารใต้ดิน <br />
                        <span className="text-gray-300">เพื่อโครงสร้างพื้นฐานดิจิทัลของประเทศ</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                        สร้างมาตรฐานใหม่ให้ภูมิทัศน์เมือง ความปลอดภัย และความมั่นคงของโครงข่ายสื่อสารไทย
                        ด้วยระบบท่อร้อยสายใต้ดินมาตรฐานสากล
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#about"
                            className="inline-flex items-center justify-center gap-2 bg-ntYellow hover:bg-yellow-400 text-charcoal px-8 py-3.5 rounded-md font-semibold text-base transition-all transform hover:-translate-y-0.5"
                        >
                            ภาพรวมท่อร้อยสาย
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            href="#faq"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-md font-semibold text-base transition-all backdrop-blur-sm"
                        >
                            คำถามที่พบบ่อย
                            <ChevronRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
