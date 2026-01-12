import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import NetworkMap from '@/components/NetworkMap';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <Overview />
      <NetworkMap />
      <FAQ />
    </div>
  );
}
