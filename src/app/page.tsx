import Hero from "@/components/Hero";
import Aside from "@/components/aside";
import CV from "@/components/cv";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#140a22] text-white">
      {/* Bakgrundsglöd */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(126,34,206,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(219,39,119,0.18),transparent_50%)]" />

      {/* Mjuk övergång mot footern */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#140a22]" />

      <div className="relative">
        <Hero />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 lg:pt-20 pb-20 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <CV />
          <Aside />
        </div>
      </div>
    </div>
  );
}
