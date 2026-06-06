import Image, { type StaticImageData } from 'next/image';
import modelCrossRoadImage from '@/assets/images/conduit-model-cross-road.jpg';
import modelOneSideImage from '@/assets/images/conduit-model-one-side.jpg';
import modelTwoSideImage from '@/assets/images/conduit-model-two-side.jpg';
import projectPattayaImage from '@/assets/images/conduit-project-pattaya-work.jpg';
import projectYaowaratImage from '@/assets/images/conduit-yaowarat-walkway.jpg';

const models = [
    {
        title: 'แบบสองฝั่งถนน',
        description: 'ใช้กับแนวถนนที่ต้องรองรับจุดเชื่อมต่อทั้งสองฝั่ง หรือมีความต้องการเช่าใช้จากหลายพื้นที่บริการ',
        image: modelTwoSideImage,
    },
    {
        title: 'แบบฝั่งเดียว',
        description: 'ใช้ในพื้นที่ที่มีข้อจำกัดด้านงานโยธา หรือบริหารแนวท่อจากฝั่งถนนที่เหมาะสมกว่า',
        image: modelOneSideImage,
    },
    {
        title: 'แบบข้ามฝั่งถนน',
        description: 'ใช้สำหรับเชื่อมโยงข้ามแนวถนนผ่านท่อทางข้ามและจุดพักสายตามแบบงานที่กำหนด',
        image: modelCrossRoadImage,
    },
] satisfies Array<{
    title: string;
    description: string;
    image: StaticImageData;
}>;

const projectReferences = [
    {
        title: 'พื้นที่เกาะรัตนโกสินทร์ กรุงเทพมหานคร',
        detail: 'โครงการปรับภูมิทัศน์และจัดระเบียบสายสื่อสารในพื้นที่สำคัญ',
    },
    {
        title: 'ถนนราชวิถี กรุงเทพมหานคร',
        detail: 'ตัวอย่างพื้นที่งานปรับภูมิทัศน์และจัดระเบียบสายสื่อสารตามข้อมูลอ้างอิงในเอกสารบริการ',
    },
    {
        title: 'โครงการ 1 จังหวัด 1 ถนน เพื่อเฉลิมพระเกียรติ',
        detail: 'พื้นที่ 74 จังหวัด 76 ถนน รวมระยะทางกว่า 106.6 กม.',
    },
    {
        title: 'พื้นที่นำร่อง Single Last Mile',
        detail: 'เช่น ถนนนาคนิวาส ถนนข้าวสาร ถนนพัทยาเหนือ ถนนอุดรดุษฎี และซอยศุภราช',
    },
];

const NetworkMap = () => {
    return (
        <section id="models" className="bg-surfaceMuted py-18 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-10 w-2 rounded-full bg-ntYellow" aria-hidden="true" />
                            <p className="text-sm font-bold text-ntGray">รูปแบบการให้บริการ</p>
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-charcoal md:text-5xl">
                            รูปแบบการวางท่อร้อยสายตามสภาพพื้นที่
                        </h2>
                        <p className="mt-5 text-base leading-8 text-ntGray md:text-lg">
                            การกำหนดรูปแบบการวางท่อร้อยสายพิจารณาจากแนวถนน
                            จุดเชื่อมต่อ สภาพพื้นที่ และข้อจำกัดด้านงานโยธา
                            โดยต้องเป็นไปตามแบบงานและผลการตรวจสอบพื้นที่ให้บริการ
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {models.map((model, index) => (
                            <article key={model.title} className="overflow-hidden rounded-[8px] border border-lineSoft bg-white">
                                <div className="grid gap-0 md:grid-cols-[280px_1fr] md:items-stretch">
                                    <figure className="flex min-h-[260px] items-center justify-center bg-[#FAFAF7] p-4">
                                        <Image
                                            src={model.image}
                                            alt={`ภาพรูปแบบการวางท่อร้อยสาย${model.title}`}
                                            sizes="(min-width: 1024px) 280px, 100vw"
                                            className="h-full max-h-[300px] w-full object-contain"
                                        />
                                    </figure>
                                    <div className="border-t border-lineSoft p-5 md:border-l md:border-t-0 md:p-7">
                                        <p className="text-sm font-bold text-ntGray">รูปแบบที่ {index + 1}</p>
                                        <h3 className="mt-2 text-2xl font-bold leading-8 text-charcoal">{model.title}</h3>
                                        <p className="mt-4 text-base leading-8 text-ntGray">{model.description}</p>
                                        <p className="mt-5 border-l-2 border-ntYellow pl-4 text-sm leading-7 text-ntGray">
                                            องค์ประกอบที่เกี่ยวข้อง ได้แก่ Main Duct, Manhole / Pull Box และจุดนำสายขึ้น-ลงตามแบบสำรวจพื้นที่
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div id="proof" className="mt-18 border-t border-lineSoft pt-12 md:mt-24 md:pt-16">
                    <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-10 w-2 rounded-full bg-ntYellow" aria-hidden="true" />
                                <p className="text-sm font-bold text-ntGray">โครงการอ้างอิง</p>
                            </div>
                            <h2 className="text-3xl font-bold leading-tight text-charcoal md:text-4xl">
                                ตัวอย่างโครงการและพื้นที่ที่เกี่ยวข้อง
                            </h2>
                            <p className="mt-4 text-base leading-8 text-ntGray">
                                รายการนี้สรุปจากเอกสารบริการ เพื่อใช้เป็นข้อมูลประกอบการทำความเข้าใจ
                                ลักษณะงานและพื้นที่ที่เกี่ยวข้องกับการจัดระเบียบสายสื่อสาร
                                มิใช่การยืนยันสถานะให้บริการปัจจุบันของแต่ละพื้นที่
                            </p>
                        </div>

                        <div className="grid gap-5">
                            <div className="grid gap-4 md:grid-cols-2">
                                <figure className="overflow-hidden rounded-[8px] border border-lineSoft bg-white">
                                    <Image
                                        src={projectPattayaImage}
                                        alt="ตัวอย่างงานนำสายสื่อสารลงใต้ดิน ถนนพัทยาเหนือ จังหวัดชลบุรี"
                                        sizes="(min-width: 1024px) 38vw, 100vw"
                                        className="aspect-[16/9] h-auto w-full object-cover"
                                    />
                                    <figcaption className="border-t border-lineSoft px-4 py-3 text-sm leading-6 text-ntGray">
                                        ตัวอย่างงานภาคสนาม ถนนพัทยาเหนือ จังหวัดชลบุรี
                                    </figcaption>
                                </figure>
                                <figure className="overflow-hidden rounded-[8px] border border-lineSoft bg-white">
                                    <Image
                                        src={projectYaowaratImage}
                                        alt="ตัวอย่างพื้นที่โครงการท่อร้อยสายสื่อสารใต้ดิน ถนนเยาวราช กรุงเทพมหานคร"
                                        sizes="(min-width: 1024px) 38vw, 100vw"
                                        className="aspect-[16/9] h-auto w-full object-cover"
                                    />
                                    <figcaption className="border-t border-lineSoft px-4 py-3 text-sm leading-6 text-ntGray">
                                        ตัวอย่างพื้นที่ถนนเยาวราช กรุงเทพมหานคร
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="overflow-hidden rounded-[8px] border border-lineSoft bg-white">
                                {projectReferences.map((item) => (
                                    <div key={item.title} className="grid gap-2 border-b border-lineSoft p-5 last:border-0 md:grid-cols-[260px_1fr] md:gap-6 md:p-6">
                                        <h3 className="text-base font-bold leading-7 text-charcoal">{item.title}</h3>
                                        <p className="text-sm leading-7 text-ntGray">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-l-4 border-ntYellow bg-white px-5 py-4 text-sm leading-7 text-ntGray">
                        สถานะพื้นที่ เส้นทางให้บริการ และเงื่อนไขประกอบการเช่าใช้โครงสร้างพื้นฐาน
                        โปรดตรวจสอบกับฝ่ายท่อร้อยสายก่อนนำข้อมูลไปใช้ประกอบการวางแผนโครงการ
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkMap;
