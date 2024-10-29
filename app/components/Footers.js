'use client'
import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footers = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 font-sans">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">CONTACT US</h1>
        <p className="text-lg mb-4">
          For any Registration Queries or any further queries please contact on the below details.
        </p>
        <p className="mb-2">Manish Vyas and Team: +91 8000834416 | digiraj.it@gmail.com</p>
        <p className="mb-6">Digir Innovation:  +917014834063</p>

        <div className="flex justify-center space-x-6 text-2xl mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube />
          </a>
        </div>

        <p className="text-sm mt-6">&copy; Manish Vyas. All Rights Reserved.</p>
        
        <hr className="border-t border-gray-500 my-4 w-1/2 mx-auto" />

        <p className="text-sm">
          Developed by{' '}
          <a href="https://digirinnovations.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
            Digir Innovations
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footers;
