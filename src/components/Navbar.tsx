import { Codesandbox, AlignJustify, X } from "lucide-react";
import { useState } from "react";
import MobileNabar from "./MobileNabar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  return (
    <>
      {isMenuOpen && <MobileNabar setIsMenuOpen={setIsMenuOpen} />}
      <div className="bg-background sticky top-0 z-10">
        <nav className="mx-auto max-w-screen-xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Codesandbox
              color="#3368c0"
              className="h-11 w-auto object-contain"
            />
            <ul className="hidden md:flex md:gap-14">
              <li>
                <a className="menu-item">Home</a>
              </li>
              <li>
                <a className="menu-item">Services</a>
              </li>
              <li>
                <a className="menu-item">Our Work</a>
              </li>
              <li>
                <a className="menu-item">Testimonials</a>
              </li>
            </ul>
            <button className="bg-primary hover:text-primary hidden h-10 cursor-pointer rounded px-6 text-sm text-white hover:bg-blue-200 md:block">
              Contact Us
            </button>
            <button className="text-primary z-50 flex h-11 w-11 items-center justify-center rounded bg-blue-100 text-2xl md:hidden">
              {isMenuOpen ? (
                <X
                  className="z-50 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                />
              ) : (
                <AlignJustify
                  className="cursor-pointer"
                  onClick={() => {
                    setIsMenuOpen(true);
                  }}
                />
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
