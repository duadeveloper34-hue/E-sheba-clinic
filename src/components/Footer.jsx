import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-[#0366d6] text-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Column 1: E-sheba */}
          <div>
            <h3 className="text-xl font-bold mb-4">E-sheba</h3>
            <p className="text-sm text-blue-100 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. 
            </p>
            <p className="text-sm text-blue-100 mb-4">
              volutpat integer vel. In rhoncus elementum nunc.
            </p>
            <div className="flex gap-4">
              <FaFacebook className="cursor-pointer hover:text-white"/>
              <FaInstagram className="cursor-pointer hover:text-white"/>
              <FaTwitter className="cursor-pointer hover:text-white"/>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Address + Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28964.59837546739!2d67.00879991968823!3d24.844210724213436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d78b303f783%3A0xf16dac2a86b043f8!2sThe%20Pharmacy%20Services!5e0!3m2!1sen!2s!4v1786717818686!5m2!1sen!2s"
                width="100%" 
                height="150" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-blue-400 pt-4 text-center">
          <p className="text-sm text-blue-100">© 2022 All Right Reserved</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
