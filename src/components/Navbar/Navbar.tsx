import { useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const headerRef = useRef<HTMLElement>(null);

  function changeHeaderColor() {
    if (headerRef.current?.nextSibling instanceof HTMLElement) {
      if (window.scrollY >= headerRef.current?.nextSibling?.offsetHeight) {
        headerRef.current?.classList.add("background_header");
      } else {
        headerRef.current?.classList.remove("background_header");
      }
    }
  }

  useEffect(() => {
    window.removeEventListener("scroll", changeHeaderColor);
    window.addEventListener("scroll", changeHeaderColor, { passive: true });

    return () => window.removeEventListener("scroll", changeHeaderColor);
  }, []);

  return (
    <header ref={headerRef}>
      <nav>
        <li>
          <a className="link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="#nasa">
            Nasa
          </a>
        </li>
        <li>
          <a className="link" href="#artwork">
            Artwork
          </a>
        </li>
        <li>
          <a className="link" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="link" href="#contact">
            Contacts
          </a>
        </li>
      </nav>
    </header>
  );
}

export default Navbar;
