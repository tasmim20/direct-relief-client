import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="">
      <footer
        style={{ backgroundColor: "#0c2b64" }}
        className="footer grid  sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2   p-10 text-white font-semibold"
      >
        <nav className="lg:pl-10">
          <h2 className="text-lg font-bold">Regions</h2>
          <a className="link link-hover">Africa</a>
          <a className="link link-hover">Americas</a>
          <a className="link link-hover">Eastern Mediterranean</a>
          <a className="link link-hover">Europe</a>
          <a className="link link-hover">South-East</a>
          <a className="link link-hover">Europe</a>
        </nav>

        <nav>
          <h2 className="text-lg font-bold">Policies</h2>
          <a className="link link-hover">Cyber security</a>
          <a className="link link-hover">Ethics</a>
          <a className="link link-hover">Permissions and licensing</a>
          <a className="link link-hover">Preventing sexual exploitation</a>
          <a className="link link-hover">Terms of use</a>
        </nav>

        <nav>
          <h2 className="text-lg font-bold">About us</h2>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Library</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Frequently asked questions</a>
        </nav>
        <nav>
          <h2 className="text-lg font-bold">Contact us</h2>
          <p>direct.relief@gmail.com</p>
          <p>+8801576574595</p>
        </nav>
      </footer>

      <footer
        style={{ backgroundColor: "#274375" }}
        className="footer py-7 grid px-10 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2    border-t text-white  border-none font-semibold"
      >
        <p className="lg:pl-10">Privacy policy</p>

        <nav className="">
          <div className="grid grid-flow-col gap-y-2  gap-x-10">
            <Linkedin size={28} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <Mail size={28} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </div>
        </nav>
        <div className="">
          <p className="lg:ml-16">@2024 DIRECT-RELIEF</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
