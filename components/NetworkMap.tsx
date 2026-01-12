import { Map } from 'lucide-react';

const NetworkMap = () => {
    return (
        <section id="network" className="py-20 bg-charcoal relative overflow-hidden text-white">
            {/* Grid Pattern Background */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(#F6C200 1px, transparent 1px), linear-gradient(90deg, #F6C200 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center py-12 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
                    <div className="bg-ntYellow/20 p-4 rounded-full mb-6">
                        <Map className="w-12 h-12 text-ntYellow" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ntYellow/20 border border-ntYellow/40 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-ntYellow animate-pulse" />
                        <span className="text-ntYellow text-xs font-semibold">กำลังพัฒนา</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-white">โครงข่ายท่อร้อยสายสื่อสารระดับประเทศ</h2>
                    <p className="text-gray-400 max-w-xl mb-8">
                        ระบบสารสนเทศภูมิศาสตร์ (GIS) แสดงแนวท่อร้อยสายสื่อสารอยู่ระหว่างการพัฒนา
                        เพื่อการบริหารจัดการโครงข่ายที่มีประสิทธิภาพสูงสุด
                    </p>

                    {/* Extension Point: Future GIS Map Component */}
                    <div className="w-full max-w-4xl h-64 bg-black/40 border border-white/10 rounded-lg flex items-center justify-center text-gray-600 text-sm font-mono">
                        {/* GIS MAP CONTAINER PREVIEW */}
                        [พื้นที่แสดงแผนที่ GIS ในอนาคต]
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NetworkMap;
