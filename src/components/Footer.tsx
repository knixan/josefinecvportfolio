const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 dark:text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Vänster kolumn: Kontaktinformation */}
        <div className="mb-4 md:mb-0">
          <h4 className="font-semibold text-white dark:text-gray-100 mb-2">
            Kontakt
          </h4>
          <p>Josefine Eriksson</p>
          <p>Telefon: 0762484234</p>
          <p>E-post: josefineeriksson@live.se</p>
          <p>Adress: Norra Strandvägen 1, Mjölby</p>
        </div>

        {/* Höger kolumn: Länkar */}
        <div>
          <h4 className="font-semibold text-white dark:text-gray-100 mb-2">
            Länkar
          </h4>
          <ul className="flex flex-col items-end">
            <li>
              <a
                href="#"
                className="hover:text-pink-500 dark:hover:text-pink-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-500 dark:hover:text-pink-400"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-pink-500 dark:hover:text-pink-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-pink-500 dark:hover:text-pink-400"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p>© Josefine Eriksson Kod & Design 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
