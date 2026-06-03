import Image from 'next/image';
import { CheckCircle2, Network, Route, ShieldCheck } from 'lucide-react';
import manholeImage from '@/CI/web-assets/conduit-manhole.jpg';

const benefits = [
    'ลดการลงทุนซ้ำซ้อน และใช้ทรัพยากรโครงสร้างพื้นฐานร่วมกันให้เกิดประโยชน์สูงสุด',
    'ยกระดับความปลอดภัยและประสิทธิภาพของระบบสื่อสารโทรคมนาคม',
    'ปรับภูมิทัศน์เมืองให้เป็นระเบียบ ลดความเสี่ยงจากสายสัญญาณร่วงหล่น',
    'รองรับสายสื่อสารได้ในปริมาณมากกว่าแนวแขวนอากาศในพื้นที่ที่เหมาะสม',
];

const useCaseGroups = [
    {
        title: 'โครงข่ายเข้าถึงและโครงข่ายปลายทาง',
        items: ['Fiber Optic จาก OLT ไปยัง Splitter', 'POP / Node Access', 'Enterprise / Leased Line'],
    },
    {
        title: 'โครงข่ายหลักและจุดเชื่อมต่อสำคัญ',
        items: ['สถานีฐาน 5G', 'Data Center / Edge Data Center', 'IXP / Peering'],
    },
    {
        title: 'ความมั่นคงและการรองรับบริการเมือง',
        items: ['Redundant Fiber Path', 'IoT และ Smart City Infrastructure'],
    },
];

const componentSpecs = [
    {
        name: 'Main Duct',
        role: 'ท่อหลัก',
        detail: 'แนวท่อสำหรับรองรับสายสื่อสาร โดยกำหนดชนิดวัสดุและขนาดตามแบบงานและเงื่อนไขพื้นที่',
        terms: ['ท่อ PVC', 'ท่อ HDPE', 'Subduct'],
    },
    {
        name: 'Manhole',
        role: 'จุดพักและจุดเชื่อมต่อ',
        detail: 'บ่อพักคอนกรีตเสริมเหล็กสำหรับงานเชื่อมต่อ ตรวจสอบ และบำรุงรักษาสายเคเบิลสื่อสาร',
        terms: ['Manhole A-1', 'ฝาบ่อพัก', 'ช่องท่อเข้า-ออก'],
    },
    {
        name: 'Pull Box',
        role: 'จุดแยกเข้าสู่พื้นที่ให้บริการ',
        detail: 'บ่อพักขนาดย่อยสำหรับเชื่อมต่อจากแนวท่อหลักไปยังจุดขึ้นสายหรือจุดรับบริการปลายทาง',
        terms: ['Pull Box JUF-11', 'ฝาบ่อพักย่อย', 'ช่องต่อขึ้นสาย'],
    },
    {
        name: 'Riser',
        role: 'จุดนำสายสื่อสารขึ้น-ลง',
        detail: 'Riser Pole และ Riser Wall เป็นโครงสร้างสำคัญที่ใช้ในการเดินสายสื่อสารในแนวตั้ง ใช้งานบริเวณกลางแจ้งเพื่อนำสายขึ้นแขวนอากาศ รองรับสาย Fiber Optic โดยการใช้งานหลักเป็นการนำสายเมนขึ้นแขวนบนอากาศ และนำสายลงบ่อพัก',
        terms: ['Riser Pole', 'Riser Wall', 'Fiber Optic'],
    },
    {
        name: 'Steel Pole',
        role: 'จุดเชื่อมต่อสายสื่อสารกับอุปกรณ์กระจายสัญญาณต่าง ๆ',
        detail: 'เสาโครงสร้างเหล็กที่ออกแบบมาเพื่อติดตั้งอุปกรณ์สื่อสาร เช่น ตู้กระจายสัญญาณ (SDP/ODP), ระบบ Fiber Optic, อุปกรณ์เครือข่าย 5G และระบบโทรคมนาคมอื่น ๆ โดยมักติดตั้งใกล้ตัวอาคารเพื่อความสวยงาม และง่ายต่อการนำสายสื่อสารเข้าอาคาร',
        terms: ['ตู้กระจายสัญญาณ (SDP/ODP)', 'Fiber Optic', 'อุปกรณ์เครือข่าย 5G'],
    },
] satisfies Array<{
    name: string;
    role: string;
    detail: string;
    terms: string[];
}>;

const systemStages = [
    {
        title: 'แนวท่อหลัก',
        description: 'รองรับการวางสายสื่อสารในแนวใต้ดิน และจัดสรรพื้นที่ใช้งานภายในท่อตามแบบงาน',
    },
    {
        title: 'จุดพัก / ตรวจสอบ',
        description: 'ใช้สำหรับดึงสาย พักสาย ตรวจสอบ และบำรุงรักษาระบบในระหว่างแนวเส้นทาง',
    },
    {
        title: 'จุดขึ้น-ลงสาย',
        description: 'นำสายจากแนวท่อใต้ดินขึ้นสู่พื้นที่ให้บริการ อาคาร หรือจุดเชื่อมต่อภาคสนาม',
    },
    {
        title: 'จุดเชื่อมต่อปลายทาง',
        description: 'รองรับการเชื่อมต่อกับตู้กระจายสัญญาณ ผู้ประกอบการ หรือโครงข่ายปลายทาง',
    },
];

const servicePillars = [
    {
        title: 'Communication Conduit',
        eyebrow: 'บริการหลัก',
        description:
            'บริการให้เช่าใช้ท่อร้อยสายใต้ดินสำหรับหน่วยงานราชการและผู้ประกอบการโทรคมนาคมทั่วไป เพื่อใช้แทนการพาดสายสื่อสารผ่านเสาไฟฟ้า',
        icon: <Route className="h-5 w-5" />,
    },
    {
        title: 'Single Last Mile',
        eyebrow: 'บริการที่เกี่ยวข้อง',
        description:
            'บริการโครงข่ายสายปลายทางที่ช่วยเชื่อมต่อจากโครงข่ายหลักไปยังจุด POI และสถานที่ผู้ใช้งานปลายทาง ทั้งแบบแขวนอากาศและแบบลงใต้ดิน',
        icon: <Network className="h-5 w-5" />,
    },
];

const Overview = () => {
    return (
        <section id="services" className="bg-white py-18 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-10 w-2 rounded-full bg-ntYellow" aria-hidden="true" />
                            <p className="text-sm font-bold uppercase tracking-normal text-ntGray">Service Portfolio</p>
                        </div>
                        <h2 className="max-w-2xl text-3xl font-bold leading-tight text-charcoal md:text-5xl">
                            โครงสร้างพื้นฐานสื่อสารที่ออกแบบเพื่อการใช้งานร่วมกัน
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-ntGray md:text-lg">
                            NT Conduit รวมข้อมูลบริการท่อร้อยสายและบริการโครงข่ายปลายทาง
                            เพื่อให้ผู้ประกอบการและหน่วยงานที่เกี่ยวข้องเห็นภาพการใช้งาน
                            เงื่อนไขเชิงเทคนิค และช่องทางติดต่ออย่างเป็นทางการ
                        </p>

                        <div className="mt-8 overflow-hidden rounded-[8px] border border-lineSoft">
                            <Image
                                src={manholeImage}
                                alt="ฝาบ่อพักท่อร้อยสายสื่อสารของ NT"
                                sizes="(min-width: 1024px) 42vw, 100vw"
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid gap-5">
                        {servicePillars.map((service) => (
                            <article key={service.title} className="rounded-[8px] border border-lineSoft bg-surfaceMuted p-6 md:p-7">
                                <div className="mb-5 flex items-center justify-between gap-5">
                                    <div>
                                        <p className="text-sm font-bold text-ntGray">{service.eyebrow}</p>
                                        <h3 className="mt-1 text-2xl font-bold text-charcoal">{service.title}</h3>
                                    </div>
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ntYellow text-charcoal">
                                        {service.icon}
                                    </div>
                                </div>
                                <p className="text-base leading-8 text-ntGray">{service.description}</p>
                            </article>
                        ))}

                        <div className="rounded-[8px] border border-lineSoft p-6 md:p-7">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="h-5 w-5 text-ntTeal" />
                                <h3 className="text-xl font-bold text-charcoal">ประโยชน์ของบริการท่อร้อยสาย</h3>
                            </div>
                            <div className="mt-5 grid gap-4">
                                {benefits.map((benefit) => (
                                    <div key={benefit} className="flex gap-3 text-base leading-7 text-ntGray">
                                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-ntTeal" aria-hidden="true" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-18 border-t border-lineSoft pt-12 md:mt-24 md:pt-16">
                    <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                        <div>
                            <div>
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="h-10 w-2 rounded-full bg-ntYellow" aria-hidden="true" />
                                    <p className="text-sm font-bold text-ntGray">โครงสร้างระบบ</p>
                                </div>
                                <h2 className="text-3xl font-bold leading-tight text-charcoal md:text-4xl">
                                    โครงสร้างระบบท่อร้อยสายสื่อสาร
                                </h2>
                                <p className="mt-4 text-base leading-8 text-ntGray">
                                    ระบบประกอบด้วยแนวท่อหลัก จุดพักและตรวจสอบ และจุดเชื่อมต่อขึ้น-ลง
                                    เพื่อรองรับการใช้งานร่วมกันของโครงข่ายสื่อสาร โดยรายละเอียดต้องพิจารณาตาม
                                    ผลสำรวจพื้นที่ แบบงาน และข้อกำหนดของหน่วยงานที่เกี่ยวข้อง
                                </p>
                            </div>

                            <div className="mt-8 border-l-4 border-ntYellow bg-surfaceMuted px-5 py-5">
                                <h3 className="text-xl font-bold leading-7 text-charcoal">ขอบเขตข้อมูลในส่วนนี้</h3>
                                <p className="mt-2 text-sm leading-7 text-ntGray">
                                    เป็นข้อมูลสรุประดับบริการเพื่ออธิบายส่วนประกอบที่พบในระบบท่อร้อยสายสื่อสาร
                                    ไม่ใช้แทนแบบสำรวจ แบบก่อสร้าง หรือข้อกำหนดมาตรฐานของแต่ละพื้นที่
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <div className="overflow-hidden rounded-[8px] border border-lineSoft bg-white">
                                <div className="grid md:grid-cols-4">
                                    {systemStages.map((stage) => (
                                        <article key={stage.title} className="border-b border-lineSoft p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                                            <h3 className="text-xl font-bold leading-7 text-charcoal">{stage.title}</h3>
                                            <p className="mt-3 text-sm leading-7 text-ntGray">{stage.description}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-[8px] border border-lineSoft bg-white">
                                <div className="border-l-4 border-ntYellow px-5 py-5 md:px-6">
                                    <h3 className="text-2xl font-bold leading-8 text-charcoal">รายการโครงสร้างที่เกี่ยวข้อง</h3>
                                    <p className="mt-2 text-sm leading-7 text-ntGray">
                                        สรุปเฉพาะส่วนประกอบที่ใช้ทำความเข้าใจลักษณะบริการและจุดเชื่อมต่อหลักของงานท่อร้อยสาย
                                    </p>
                                </div>
                                {componentSpecs.map((component) => (
                                    <article key={component.name} className="grid gap-5 border-t border-lineSoft p-5 md:grid-cols-[230px_1fr] md:p-6">
                                        <div>
                                            <h3 className="text-2xl font-bold leading-8 text-charcoal">{component.name}</h3>
                                            <p className="mt-1 text-sm font-bold leading-6 text-ntGray">{component.role}</p>
                                        </div>
                                        <div>
                                            <p className="text-base leading-8 text-ntGray">{component.detail}</p>
                                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                                <span className="mr-1 text-sm font-bold leading-6 text-ntGray">อุปกรณ์ที่เกี่ยวข้อง</span>
                                                {component.terms.map((term) => (
                                                    <span key={term} className="rounded-[4px] border border-lineSoft bg-[#FAFAF7] px-2.5 py-1 text-sm font-bold leading-5 text-ntGray">
                                                        {term}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                                <div className="border-t border-lineSoft bg-[#FAFAF7] px-5 py-4 text-sm leading-7 text-ntGray md:px-6">
                                    รายการข้างต้นเป็นการสรุปองค์ประกอบหลักเพื่อประกอบการทำความเข้าใจเบื้องต้น
                                    รายละเอียดด้านแบบ มาตรฐาน และตำแหน่งติดตั้งต้องพิจารณาตามผลสำรวจพื้นที่และเอกสารที่บริษัทกำหนด
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="use-cases" className="mt-18 border-t border-lineSoft pt-12 md:mt-24 md:pt-16">
                    <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-10 w-2 rounded-full bg-ntYellow" aria-hidden="true" />
                                <p className="text-sm font-bold text-ntGray">ลักษณะการใช้งาน</p>
                            </div>
                            <h2 className="text-3xl font-bold leading-tight text-charcoal md:text-4xl">
                                การใช้งานที่เกี่ยวข้องกับโครงข่ายสื่อสาร
                            </h2>
                            <p className="mt-4 text-base leading-8 text-ntGray">
                                บริการท่อร้อยสายสามารถใช้ประกอบการวางโครงข่ายไฟเบอร์
                                และจุดเชื่อมต่อสำคัญของผู้ประกอบการ โดยขอบเขตการใช้งาน
                                ให้พิจารณาตามความพร้อมของพื้นที่และเงื่อนไขการให้บริการล่าสุด
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-[8px] border border-lineSoft bg-white">
                            {useCaseGroups.map((group) => (
                                <div key={group.title} className="grid gap-4 border-b border-lineSoft p-5 last:border-0 md:grid-cols-[240px_1fr] md:p-6">
                                    <h3 className="text-lg font-bold leading-7 text-charcoal">{group.title}</h3>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {group.items.map((item) => (
                                            <p key={item} className="border-l-2 border-ntYellow pl-3 text-sm font-bold leading-6 text-ntGray">
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
