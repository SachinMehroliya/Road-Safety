import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-12 mt-20">
      <div className="grid grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-400">Road Safety Audit</h2>
          <p className="mt-3 text-sm">
            Transforming Road Infrastructure Management with Digital Twins and AI Technologies.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-lg font-semibold ">Quick Links</h3>
          <p className="text-sm mt-2">
            Home<br />
            Uploads<br />
            Login<br />
            Services
          </p>
        </div>

        {/* Products + Contact */}
        <div>

          <h3 className="text-lg font-semibold ">Contact Us</h3>
          <p className="text-sm mt-2">
            RoadSafetyAudit<br />
            RP HALL<br />
            IIT Kharagpur<br />
            West Bengal, India — 721301
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
        © 2024 | Road Audit | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;