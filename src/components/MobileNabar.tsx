import { Codesandbox } from "lucide-react";
const MobileNabar = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed top-0 z-20 w-screen">
      <div className="bg-background flex h-screen w-1/2 flex-col p-8">
        <Codesandbox color="#3368c0" className="mb-8 w-16 object-contain" />
        <ul>
          <li className="mb-5">
            <a className="menu-item">Home</a>
          </li>
          <li className="mb-5">
            <a className="menu-item">Services</a>
          </li>
          <li className="mb-5">
            <a className="menu-item">Our Work</a>
          </li>
          <li className="mb-5">
            <a className="menu-item">Testimonials</a>
          </li>
        </ul>
        <button className="bg-primary hover:text-primary h-10 cursor-pointer rounded px-6 text-sm text-white hover:bg-blue-200 md:block">
          Contact Us
        </button>
      </div>
      <div
        onClick={() => {
          setIsMenuOpen(false);
        }}
        className="bg-overlayBg fixed top-0 -z-10 h-screen w-screen"
      />
    </div>
  );
};
export default MobileNabar;
