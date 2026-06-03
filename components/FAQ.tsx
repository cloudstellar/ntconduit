'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const faqs = [
    {
        question: 'บริการท่อร้อยสายสื่อสารเหมาะกับใคร?',
        answer:
            'บริการนี้เหมาะสำหรับหน่วยงานราชการและผู้ประกอบการโทรคมนาคมที่มีความประสงค์เช่าใช้ท่อร้อยสายใต้ดิน เพื่อทดแทนการพาดสายสื่อสารบนเสาไฟฟ้าและสนับสนุนการจัดระเบียบโครงสร้างพื้นฐานในเขตพื้นที่ให้บริการ',
    },
    {
        question: 'Communication Conduit ต่างจาก Single Last Mile อย่างไร?',
        answer:
            'Communication Conduit คือบริการเช่าใช้ท่อร้อยสายใต้ดินและองค์ประกอบของระบบท่อ ส่วน Single Last Mile คือบริการโครงข่ายสายปลายทางที่เชื่อมต่อจากโครงข่ายหลักไปยังจุด POI และปลายทาง ซึ่งอาจใช้รูปแบบแขวนอากาศหรือแบบลงใต้ดินตามสภาพพื้นที่',
    },
    {
        question: 'ระบบท่อร้อยสายรองรับการใช้งานแบบใดบ้าง?',
        answer:
            'ตัวอย่างการใช้งาน ได้แก่ การติดตั้งสาย Fiber Optic จาก OLT ไปยัง Splitter, การเชื่อมโยงสถานีฐาน 5G, Data Center, Edge Data Center, POP, Node Access, วงจรเช่า, เส้นทางสำรอง, IXP / Peering, IoT และโครงสร้าง Smart City',
    },
    {
        question: 'ส่วนประกอบหลักของระบบท่อมีอะไรบ้าง?',
        answer:
            'องค์ประกอบหลักตามเอกสารบริการ ได้แก่ Main Duct, Manhole, Pull Box, Riser และ Steel Pole โดยการเลือกใช้วัสดุและรูปแบบการติดตั้งให้เป็นไปตามมาตรฐาน แบบงาน และลักษณะพื้นที่',
    },
    {
        question: 'รูปแบบการวางท่อร้อยสายมีอะไรบ้าง?',
        answer:
            'รูปแบบบริการที่ระบุไว้ ได้แก่ แบบวางท่อร้อยสายสองฝั่งถนน แบบวางท่อร้อยสายฝั่งเดียว และแบบวางท่อร้อยสายข้ามฝั่งถนน เพื่อให้เหมาะกับข้อจำกัดของพื้นที่และรูปแบบการเชื่อมต่อของผู้เช่า',
    },
    {
        question: 'สามารถดูราคาเช่าใช้ท่อหรือ SLA บนหน้าเว็บได้ไหม?',
        answer:
            'ข้อมูลราคาและ SLA ยังไม่เผยแพร่บนหน้าเว็บนี้ เนื่องจากเงื่อนไขบริการอาจขึ้นกับพื้นที่ รูปแบบการใช้งาน และข้อกำหนดล่าสุด กรุณาติดต่อฝ่ายท่อร้อยสายเพื่อขอข้อมูลบริการที่เป็นปัจจุบัน',
    },
    {
        question: 'ขั้นตอนเริ่มต้นสำหรับการขอเช่าใช้บริการคืออะไร?',
        answer:
            'โดยสรุป ผู้สนใจกรอกแบบฟอร์ม จากนั้น NT ตรวจสอบความพร้อมให้บริการและออกหนังสือแจ้งอนุญาตใช้ท่อ ก่อนเข้าสู่ขั้นตอนดำเนินการร้อยสายและสรุปยืนยันการใช้งานพร้อมแจ้งค่าบริการ',
    },
];

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="border-b border-lineSoft last:border-0">
            <button
                type="button"
                className="group flex w-full items-center justify-between gap-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ntYellow"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="text-base font-bold leading-7 text-charcoal transition-colors group-hover:text-ntGray md:text-lg">
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-ntGray" />
                ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-ntGray transition-colors group-hover:text-charcoal" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-72 opacity-100 pb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="max-w-3xl text-base leading-8 text-ntGray">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-18 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-10 w-2 rounded-full bg-ntYellow" aria-hidden="true" />
                            <p className="text-sm font-bold uppercase tracking-normal text-ntGray">FAQ</p>
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-charcoal md:text-4xl">
                            คำถามสำคัญก่อนวางแผนใช้บริการ
                        </h2>
                        <p className="mt-4 text-base leading-8 text-ntGray">
                            รวมคำอธิบายเบื้องต้นจากเอกสารบริการ เพื่อให้ทีมเทคนิคและผู้ประสานงานใช้ประกอบการพิจารณาก่อนติดต่อขอข้อมูลล่าสุด
                        </p>

                        <div id="contact" className="mt-8 rounded-[8px] bg-surfaceMuted p-6">
                            <h3 className="text-xl font-bold text-charcoal">ติดต่อฝ่ายท่อร้อยสาย</h3>
                            <p className="mt-3 text-sm leading-7 text-ntGray">
                                สายงานโครงสร้างพื้นฐาน บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน)
                            </p>
                            <div className="mt-5 grid gap-3 text-sm font-bold text-charcoal">
                                <Link href="https://www.ntplc.co.th" className="hover:text-ntGray">
                                    www.ntplc.co.th
                                </Link>
                                <span>Contact Center 1888</span>
                            </div>
                            <Link
                                href="#services"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-[8px] bg-charcoal px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ntGray"
                            >
                                กลับไปดูภาพรวมบริการ
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[8px] border border-lineSoft bg-white p-5 md:p-8">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={faq.question}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
