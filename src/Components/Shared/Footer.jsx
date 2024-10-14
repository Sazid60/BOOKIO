
import { FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-5 md:px-10 lg:px-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-16 text-sm">
        <div className="space-y-4">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">BOOKIO</p>
          <p className="text-sm md:text-base lg:text-lg">
          We are a passionate team dedicated to providing a diverse selection of books for every reader.
          </p>
          <div className="text-xs md:text-sm lg:text-base">
            <p><span className="font-bold">Address:</span> 169-C, Technohub, Dubai</p>
            <p><span className="font-bold">Call Us:</span> (012) 800 456 789</p>
            <p><span className="font-bold">Mail us:</span> support@bookio.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-base md:text-lg lg:text-xl">MAIN MENU</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Home</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Catalog</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Specials</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Pages</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Product Pages</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-base md:text-lg lg:text-xl">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Shipping Info</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Returns</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">FAQs</a></li>
            <li><a href="#" className="hover:text-[#CFAE7A]  text-sm md:text-base">Support</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-base md:text-lg lg:text-xl">JOIN OUR NEWSLETTER NOW</h3>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email address here..."
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none"
            />
            <button className=" text-white hover:bg-[#7375e9] bg-[#6366F1] py-2 px-6 rounded w-full sm:w-auto">
              Subscribe
            </button>
          </div>

          <h3 className="font-bold text-base md:text-lg lg:text-xl">STAY CONNECTED</h3>
          <div className="flex space-x-3">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm md:text-base">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 text-sm md:text-base">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-500 hover:text-[#CFAE7A]  text-sm md:text-base">
              <FaPinterest />
            </a>
            <a href="#" className="text-red-700 hover:text-red-900 text-sm md:text-base">
              <FaGoogle />
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm md:text-base">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
