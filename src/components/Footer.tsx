"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslate } from "@/locales/use-locales";

const SOCIALS = [
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61579831973399",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/kodochdesign/",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josefine-eriksson-349498345/",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/knixan" },
];

export default function Footer() {
  const { t } = useTranslate();

  return (
    <footer className="relative bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-screen-xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Kontakt */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-400">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <div className="text-sm">
                <p className="text-slate-200 font-semibold text-base">
                  Josefine Eriksson
                </p>
                <p className="text-slate-400 text-xs">
                  {t("footer.fullstackDesigner")}
                </p>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <FaPhone className="text-slate-500 text-xs" />
                <span>076-248 42 34</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <FaEnvelope className="text-slate-500 text-xs" />
                <a
                  href="mailto:josefineeriksson@live.se"
                  className="hover:text-indigo-400 transition-colors"
                >
                  josefineeriksson@live.se
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-slate-300">
                <FaMapMarkerAlt className="text-slate-500 text-xs" />
                <span>Norra Strandvägen 1, Mjölby</span>
              </div>
            </div>
          </div>

          {/* Sociala medier */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold tracking-wider uppercase text-slate-400">
              {t("footer.followMe")}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {SOCIALS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="group flex items-center space-x-3 bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 p-3 rounded-xl transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="text-slate-400 group-hover:text-indigo-400 text-lg transition-colors" />
                  <span className="text-slate-300 text-xs font-medium group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-300 font-medium">
              Josefine Eriksson Kod & Design
            </span>
          </p>
          <p>{t("footer.allRightsReserved")}</p>
        </div>
      </div>
    </footer>
  );
}
