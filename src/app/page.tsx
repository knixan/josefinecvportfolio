import Aside from "@/components/aside";
import CV from "@/components/cv";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20"></div>
      <div className="fixed top-1/4 left-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container max-w-7xl mx-auto pt-24 pb-20 p-4 flex gap-8 flex-wrap lg:flex-nowrap">
        <Aside />
        <CV />
      </div>
    </div>
  );
}
