import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f72585] to-[#7209b7] w-full border-b border-[#4cc9f0]">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-l text-[#eeeeee] sm:text-center">
          © 2025{" "}
          <Link href="http://kodochdesign.com/" className="hover:underline">
            Josefine Eriksson
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-l font-medium text-[#eeeeee] sm:mt-0">
          <li>
            <Link
              href="https://kodochdesign.se"
              className="hover:underline me-4 md:me-6"
            >
              Kod och Design
            </Link>
          </li>
          <li className="me-4 md:me-6">
            <a href="tel:+46762484234" className="hover:underline">
              0762484234
            </a>
          </li>
          <li>
            <a
              href="mailto:josefineeriksson@live.se"
              className="hover:underline"
            >
              josefineeriksson@live.se
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
