import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" dark:bg-white bg-zinc-900  border-t-2 mt-auto ">
      <div className=" mx-auto  text-center px-4 py-3 ">
        <p className="text-muted">
          © 2024 PathPicsTales. Wszelkie prawa zastrzeżone.
        </p>
        <address>
          Skontaktuj się z nami: <a href="mailto:bulu901@gmail.com">bulu901@gmail.com</a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;