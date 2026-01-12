import { Zap, Network, Layers, ShieldCheck } from 'lucide-react';

const Overview = () => {
    const cards = [
        {
            title: "ท่อร้อยสายสื่อสาร",
            description: "ระบบท่อ HDPE มาตรฐานสูง รองรับการร้อยสายสื่อสารลงใต้ดินอย่างเป็นระเบียบ ป้องกันความเสียหายจากปัจจัยภายนอก",
            icon: <Network className="w-8 h-8 text-ntYellow" />
        },
        {
            title: "ซับดักต์ (Sub-duct)",
            description: "ท่อขนาดเล็กภายในท่อหลัก ช่วยบริหารจัดการพื้นที่ใช้สอยให้เกิดประโยชน์สูงสุด รองรับผู้ให้บริการได้หลายราย",
            icon: <Layers className="w-8 h-8 text-ntYellow" />
        },
        {
            title: "สายใยแก้วนำแสง",
            description: "รองรับโครงข่าย Fiber Optic ความเร็วสูง เพื่อการเชื่อมต่อดิจิทัลที่เสถียรและรวดเร็วสำหรับอนาคต",
            icon: <Zap className="w-8 h-8 text-ntYellow" />
        },
        {
            title: "การใช้โครงสร้างร่วมกัน",
            description: "ลดความซ้ำซ้อนของการลงทุนและการขุดเจาะถนน ด้วยหลักการ Infrastructure Sharing ที่เป็นธรรมและทั่วถึง",
            icon: <ShieldCheck className="w-8 h-8 text-ntYellow" />
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">องค์ประกอบโครงสร้างพื้นฐาน</h2>
                    <p className="text-gray-600">
                        เทคโนโลยีและมาตรฐานที่เราใช้ในการพัฒนาท่อร้อยสายสื่อสารใต้ดิน
                        เพื่อความยั่งยืนของโครงสร้างพื้นฐานไทย
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:border-ntYellow/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-surfaceMuted rounded-full flex items-center justify-center mb-6 group-hover:bg-ntYellow/10 transition-colors">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-ntYellow transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Overview;
