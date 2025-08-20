import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      {" "}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Vänster kolumn: Kontaktinformation */}{" "}
        <div className="mb-4 md:mb-0">
          {" "}
          <h4 className="font-semibold text-gray-100 mb-2">Kontakt</h4>{" "}
          <p>Josefine Eriksson</p>
          <p>Telefon: 0762484234</p> <p>E-post: josefineeriksson@live.se</p>{" "}
          <p>Adress: Norra Strandvägen 1, Mjölby</p>{" "}
        </div>
        {/* Höger kolumn: Länkar */}{" "}
        <div>
          <h4 className="font-semibold text-gray-100 mb-2">Länkar</h4>{" "}
          <div className="flex space-x-4">
            {" "}
            <a
              href="https://www.facebook.com/profile.php?id=61579831973399"
              className="hover:text-pink-400"
              aria-label="Facebook"
            >
              <FaFacebook size={32} />{" "}
            </a>{" "}
            <a
              href="https://www.instagram.com/kodochdesign/"
              className="hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram size={32} />{" "}
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/josefine-eriksson-349498345/"
              className="hover:text-pink-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />{" "}
            </a>{" "}
            <a
              href="https://github.com/knixan"
              className="hover:text-pink-400"
              aria-label="GitHub"
            >
              <FaGithub size={32} />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Copyright */}{" "}
      <div className="text-center mt-4">
        <p>© Josefine Eriksson Kod & Design 2025</p>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
