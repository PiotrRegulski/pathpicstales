import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lime-200 text-center p-4 w-full">
      <div className="container mx-auto">
        <p className="text-gray-700 mb-2">© 2024 PathPicsTales. Wszelkie prawa zastrzeżone.</p>
        <address>
          <a href="mailto:contact@pathpicstales.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
            contact@pathpicstales.com
          </a>
        </address>
        <div className="flex justify-center mt-2">
          <Link href="/privacy-policy" className='"text-blue-600 hover:text-blue-800 transition duration-300 mx-2"'>
           Polityka prywatności
          </Link>
          <Link href="/terms" className="text-blue-600 hover:text-blue-800 transition duration-300 mx-2">
            Regulamin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;