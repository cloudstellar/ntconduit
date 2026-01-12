'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="flex items-center justify-between w-full py-5 text-left focus:outline-none group"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-ntYellow' : 'text-charcoal group-hover:text-ntYellow'}`}>
                    {question}
                </span>
                {isOpen ? (
                    <ChevronUp className="text-ntYellow flex-shrink-0 ml-4" />
                ) : (
                    <ChevronDown className="text-gray-400 group-hover:text-ntYellow flex-shrink-0 ml-4 transition-colors" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 leading-relaxed pl-0 md:pl-0">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "ท่อร้อยสายสื่อสารใต้ดินคืออะไร?",
            answer: "ระบบท่อที่ถูกติดตั้งไว้ใต้พื้นดินสำหรับร้อยสายสื่อสารต่างๆ เช่น สายใยแก้วนำแสง (Fiber Optic) เพื่อจัดระเบียบสายสื่อสารให้มีความปลอดภัย ไม่บดบังทัศนียภาพ และง่ายต่อการบำรุงรักษา"
        },
        {
            question: "ทำไมต้องนำสายสื่อสารลงใต้ดิน?",
            answer: "เพื่อความเป็นระเบียบเรียบร้อยของบ้านเมือง (Smart City) เพิ่มความปลอดภัยต่อชีวิตและทรัพย์สินของประชาชน ลดอุบัติเหตุจากสายสื่อสาร และเพิ่มความมั่นคงให้กับระบบโทรคมนาคมจากภัยธรรมชาติ"
        },
        {
            question: "ซับดักต์ (Sub-duct) คืออะไร?",
            answer: "ท่อย่อยขนาดเล็กที่อยู่ภายในท่อร้อยสายหลัก (Main Duct) ช่วยให้สามารถบริหารจัดการพื้นที่ในท่อหลักได้คุ้มค่า และรองรับการใช้งานจากผู้ให้บริการหลายรายในท่อชุดเดียวกัน"
        },
        {
            question: "ผู้ให้บริการสามารถใช้โครงสร้างร่วมกันได้อย่างไร?",
            answer: "ระบบท่อร้อยสายของเราออกแบบมาเพื่อรองรับ Infrastructure Sharing หรือการใช้โครงสร้างพื้นฐานร่วมกัน ช่วยลดการลงทุนซ้ำซ้อนของผู้ให้บริการ และลดผลกระทบจากการขุดเจาะถนนซ้ำซาก"
        },
        {
            question: "บ่อพักและบ่อดึงสายมีบทบาทอย่างไร?",
            answer: "เป็นจุดสำหรับติดตั้ง รอยสาย และซ่อมบำรุงสายสื่อสาร โดยจะติดตั้งเป็นระยตามแนวท่อ เพื่อให้ช่างเทคนิคสามารถเข้าถึงระบบได้โดยไม่ต้องขุดเจาะผิวจราจร"
        },
        {
            question: "การดำเนินการก่อสร้างมีมาตรฐานความปลอดภัยอย่างไร?",
            answer: "เราปฏิบัติตามมาตรฐานวิศวกรรมระดับสากล มีมาตรการป้องกันผลกระทบต่อสิ่งแวดล้อมและการจราจร รวมถึงใช้วัสดุท่อ HDPE ที่มีความทนทานสูง อายุการใช้งานยาวนาน"
        },
        {
            question: "ประชาชนทั่วไปจะได้ประโยชน์อะไรบ้าง?",
            answer: "ทัศนียภาพเมืองที่สวยงามขึ้น ทางเดินเท้าปลอดภัยไม่มีสายระโยงระยาง และระบบอินเทอร์เน็ตที่มีเสถียรภาพมากขึ้น ลดปัญหาไฟดับหรือเน็ตล่มจากอุบัติเหตุเกี่ยวกับสายสื่อสาร"
        },
        {
            question: "มีแผนจะขยายโครงข่ายครอบคลุมพื้นที่ใดบ้าง?",
            answer: "โครงการจะเริ่มดำเนินการในพื้นที่เศรษฐกิจหลักและเส้นทางวิกฤต ตามนโยบายของภาครัฐ และจะทยอยขยายครอบคลุมทั่วประเทศตามแผนแม่บทการพัฒนาโครงสร้างพื้นฐานดิจิทัล"
        }
    ];

    return (
        <section id="faq" className="py-20 bg-surfaceMuted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Header */}
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-bold text-charcoal mb-4">คำถามที่พบบ่อย</h2>
                        <p className="text-gray-600 mb-8">
                            รวบรวมข้อสงสัยเกี่ยวกับระบบท่อร้อยสายสื่อสารใต้ดิน
                            และประโยชน์ที่จะเกิดขึ้น
                        </p>
                        <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="font-semibold text-charcoal mb-2">มีข้อสงสัยเพิ่มเติม?</h3>
                            <p className="text-gray-500 text-sm mb-4">ติดต่อทีมงานเพื่อสอบถามข้อมูลเชิงลึก</p>
                            <button className="w-full py-2.5 px-4 bg-charcoal text-white rounded-lg text-sm font-medium hover:bg-black transition-colors">
                                ติดต่อสอบถาม
                            </button>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="md:w-2/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => toggleFAQ(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
