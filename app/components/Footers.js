'use client'
import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'; // Import FaXTwitter from react-icons/fa6

const Footers = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 font-sans">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">CONTACT US</h1>
        <p className="text-lg mb-4">
          For any Registration Queries or any further queries please contact on the below details.
        </p>
        <p className="mb-2">Manish Vyas and Team: digiraj.it@gmail.com</p>
        <p className="mb-6"></p>

        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a href="https://www.instagram.com/manishvyas_05/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/manish.vyas.71404?rdid=Y0uYaEW0zNhGgDSL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14WrjRev8R%2F#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/digir-innovations-and-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
          {/* Use FaXTwitter from react-icons/fa6 */}
          <a href="https://x.com/drmanishvyas?t=IB36spmbAhSEk8IW4yKG4A&s=08" target="_blank" rel="noopener noreferrer" className="hover:text-[#4a4c59]">
            <FaXTwitter />
          </a>
        </div>

        <p className="text-sm mt-6">&copy; Manish Vyas. All Rights Reserved.</p>
        
        <hr className="border-t border-gray-500 my-4 w-1/2 mx-auto" />

        <p className="text-sm">
          Developed by{' '}
          <a href="https://digirinnovations.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
          digiR Innovations and Technologies

          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footers;
