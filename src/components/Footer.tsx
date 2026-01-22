import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CONTACT_INFO = [
  { icon: FaPhone, gradient: "from-purple-500 to-pink-500", title: "Josefine Eriksson", subtitle: "Fullstack Developer & Designer" },
  { icon: FaPhone, gradient: "from-pink-500 to-rose-500", text: "0762484234" },
  { icon: FaEnvelope, gradient: "from-rose-500 to-orange-500", text: "josefineeriksson@live.se", href: "mailto:josefineeriksson@live.se" },
  { icon: FaMapMarkerAlt, gradient: "from-orange-500 to-cyan-500", text: "Norra Strandvägen 1, Mjölby" },
];

const SOCIALS = [
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61579831973399", color: "blue", gradient: "from-blue-600 to-blue-500" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/kodochdesign/", color: "pink", gradient: "from-pink-600 to-purple-600" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/josefine-eriksson-349498345/", color: "blue-600", gradient: "from-blue-700 to-blue-600" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/knixan", color: "slate", gradient: "from-slate-600 to-slate-500" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/10 to-cyan-950/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Kontakt */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative backdrop-blur-xl bg-slate-900/30 border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Kontakt
              </h4>
              <div className="space-y-4">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 group/item">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white text-sm" />
                    </div>
                    <div>
                      {item.title && (
                        <>
                          <p className="text-slate-200 font-semibold">{item.title}</p>
                          <p className="text-slate-300 text-sm">{item.subtitle}</p>
                        </>
                      )}
                      {item.text && !item.href && <p className="text-slate-300">{item.text}</p>}
                      {item.href && (
                        <a href={item.href} className="text-slate-300 hover:text-orange-400 transition-colors duration-300">
                          {item.text}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sociala medier */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative backdrop-blur-xl bg-slate-900/30 border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Följ mig
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {SOCIALS.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="group/social relative"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover/social:opacity-75 transition duration-300`} />
                    <div className={`relative backdrop-blur-xl bg-${social.color}-500/20 border border-${social.color}-300/30 rounded-xl p-4 flex flex-col items-center space-y-2 group-hover/social:scale-105 transition-all duration-300`}>
                      <social.icon className={`text-${social.color}-400 text-2xl`} />
                      <span className="text-slate-300 text-sm font-medium">{social.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 rounded-2xl blur-lg" />
          <div className="relative backdrop-blur-xl bg-slate-900/20 border border-white/5 rounded-2xl p-6">
            <p className="text-center text-slate-400">
              © 2025{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Josefine Eriksson Kod & Design
              </span>{" "}
              • Alla rättigheter förbehållna
            </p>
          </div>
        </div>
      </div>

      {/* Dekorativa prickar */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse" />
    </footer>
  );
}