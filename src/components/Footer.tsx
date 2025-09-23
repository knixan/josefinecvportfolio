import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/10 to-cyan-950/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Kontaktinformation */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/30 border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Kontakt
              </h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 group/item">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-slate-200 font-semibold">
                      Josefine Eriksson
                    </p>
                    <p className="text-slate-300 text-sm">
                      Fullstack Developer & Designer
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group/item">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-slate-300">0762484234</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group/item">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div>
                    <a
                      href="mailto:josefineeriksson@live.se"
                      className="text-slate-300 hover:text-orange-400 transition-colors duration-300"
                    >
                      josefineeriksson@live.se
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group/item">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-cyan-500 flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-slate-300">
                      Norra Strandvägen 1, Mjölby
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sociala medier */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/30 border border-white/10 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Följ mig
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61579831973399"
                  className="group/social relative"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur opacity-0 group-hover/social:opacity-75 transition duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-blue-500/20 border border-blue-300/30 rounded-xl p-4 flex flex-col items-center space-y-2 transform group-hover/social:scale-105 transition-all duration-300">
                    <FaFacebook className="text-blue-400 text-2xl" />
                    <span className="text-slate-300 text-sm font-medium">
                      Facebook
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/kodochdesign/"
                  className="group/social relative"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-0 group-hover/social:opacity-75 transition duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-pink-500/20 border border-pink-300/30 rounded-xl p-4 flex flex-col items-center space-y-2 transform group-hover/social:scale-105 transition-all duration-300">
                    <FaInstagram className="text-pink-400 text-2xl" />
                    <span className="text-slate-300 text-sm font-medium">
                      Instagram
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/josefine-eriksson-349498345/"
                  className="group/social relative"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl blur opacity-0 group-hover/social:opacity-75 transition duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-blue-600/20 border border-blue-400/30 rounded-xl p-4 flex flex-col items-center space-y-2 transform group-hover/social:scale-105 transition-all duration-300">
                    <FaLinkedin className="text-blue-400 text-2xl" />
                    <span className="text-slate-300 text-sm font-medium">
                      LinkedIn
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/knixan"
                  className="group/social relative"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-slate-500 rounded-xl blur opacity-0 group-hover/social:opacity-75 transition duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-slate-500/20 border border-slate-300/30 rounded-xl p-4 flex flex-col items-center space-y-2 transform group-hover/social:scale-105 transition-all duration-300">
                    <FaGithub className="text-slate-400 text-2xl" />
                    <span className="text-slate-300 text-sm font-medium">
                      GitHub
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright sektion */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/10 via-pink-600/10 to-cyan-600/10 rounded-2xl blur-lg"></div>
          <div className="relative backdrop-blur-xl bg-slate-900/20 border border-white/5 rounded-2xl p-6">
            <div className="text-center">
              <p className="text-slate-400">
                © 2025{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  Josefine Eriksson Kod & Design
                </span>{" "}
                • Alla rättigheter förbehållna
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dekorativa element */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse delay-700"></div>
    </footer>
  );
};

export default Footer;
