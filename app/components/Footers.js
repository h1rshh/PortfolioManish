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
          <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%7C&placement=&creative=589460569849&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-592856129%26loc_physical_ms%3D9179342%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=Cj0KCQiA_qG5BhDTARIsAA0UHSKuR3nIrFCo5yfXS4b5F5oueTRKAlFnjtHDzSVeHF6daQ2N3oYx89YaAg6BEALw_wcB" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/digir-innovations-and-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
          {/* Use FaXTwitter from react-icons/fa6 */}
          <a href="https://x.com/DigiR_Raj" target="_blank" rel="noopener noreferrer" className="hover:text-[#4a4c59]">
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
