import BssOssShowcase from '@/components/bss-oss-showcase';
import FloatingNavigation from '@/components/floating-navigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <BssOssShowcase />
      <FloatingNavigation />
    </div>
  );
}
