import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      className={
        scrolled
          ? "bg-white fixed w-full top-0 py-4 flex items-center justify-between px-4 shadow-[0_1px_rgba(0,0,0,0.075)]"
          : "bg-transparent fixed w-full top-0 py-4 flex items-center justify-between px-4"
      }
    >
      {/* TODO: Add the logo and hove affect */}
      <h1 className="flex space-x-8 font-medium">Logo Here</h1>
      <ul className="flex space-x-8 font-medium">
        <Nav.Link href="#hero" className="hover:underline decoration-solid">
          Home
        </Nav.Link>
        <Nav.Link href="#services" className="hover:underline decoration-solid">
          Services
        </Nav.Link>
        <Nav.Link href="#gallery" className="hover:underline decoration-solid">
          Gallery
        </Nav.Link>
        <Nav.Link href="#contact" className="hover:underline decoration-solid">
          Contact
        </Nav.Link>
      </ul>
    </Navbar>
  );
}
