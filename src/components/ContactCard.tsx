"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useTranslate } from "@/locales/use-locales";

export const SOCIALS = [
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
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josefine-eriksson-349498345/",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/knixan" },
];

export default function ContactCard() {
  const { t } = useTranslate();

  return (
    <div className="card p-6">
      <h3 className="flex items-center gap-3 text-lg font-medium text-white">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600">
          <FaEnvelope className="text-xs text-white" />
        </span>
        {t("footer.contact")}
      </h3>

      <div className="mt-4">
        <p className="text-base text-white">Josefine Eriksson</p>
        <p className="text-sm text-slate-400">
          {t("footer.fullstackDesigner")}
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        <li className="flex items-center gap-3">
          <FaPhoneAlt className="text-xs text-pink-400" />
          <a
            href="tel:+46762484234"
            className="hover:text-white transition-colors"
          >
            076-248 42 34
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaRegEnvelope className="text-xs text-pink-400" />
          <a
            href="mailto:josefineeriksson@live.se"
            className="hover:text-white transition-colors"
          >
            josefineeriksson@live.se
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-xs text-pink-400" />
          Norra Strandvägen 1, Mjölby
        </li>
      </ul>

      <p className="mt-6 text-sm font-medium text-white">
        {t("footer.followMe")}
      </p>
      <div className="mt-3 flex gap-4">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-slate-300 hover:text-pink-400 transition-colors"
          >
            <social.icon />
          </a>
        ))}
      </div>
    </div>
  );
}
