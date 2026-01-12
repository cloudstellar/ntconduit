import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-ntYellow rounded-md flex items-center justify-center">
                                <span className="text-charcoal font-bold text-xl">N</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                NT Conduit
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            มุ่งมั่นพัฒนาโครงสร้างพื้นฐานท่อร้อยสายสื่อสารใต้ดิน
                            เพื่อภูมิทัศน์ที่สวยงามและความมั่นคงของระบบสื่อสารไทย
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">เมนูหลัก</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#about" className="hover:text-ntYellow transition-colors">เกี่ยวกับโครงการ</Link></li>
                            <li><Link href="#network" className="hover:text-ntYellow transition-colors">โครงข่ายท่อร้อยสาย</Link></li>
                            <li><Link href="#faq" className="hover:text-ntYellow transition-colors">คำถามที่พบบ่อย</Link></li>
                            <li><Link href="#contact" className="hover:text-ntYellow transition-colors">ติดต่อเรา</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">ข้อมูลเพิ่มเติม</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-ntYellow transition-colors">นโยบายความเป็นส่วนตัว</Link></li>
                            <li><Link href="#" className="hover:text-ntYellow transition-colors">เงื่อนไขการใช้งาน</Link></li>
                            <li><Link href="#" className="hover:text-ntYellow transition-colors">แผนแม่บท</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-white mb-6">ติดต่อ</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-ntYellow mt-0.5" />
                                <span>บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน) <br />99 ถนนแจ้งวัฒนะ แขวงทุ่งสองห้อง <br />เขตหลักสี่ กรุงเทพมหานคร 10210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-ntYellow" />
                                <span>02-104-3000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-ntYellow" />
                                <span>contact@ntconduit.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} National Telecom Public Company Limited. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Facebook</span>
                        <span>LinkedIn</span>
                        <span>Twitter</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
