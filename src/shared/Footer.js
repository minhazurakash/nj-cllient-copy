import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col border border-white rounded-md px-6 py-4 text-center">
            <h3 className="text-lg font-medium mb-4">About Us</h3>
            <p className="text-sm text-gray-400 mb-2">
            I am a Web Developer and Web Marketing Analyst. I am passionate in regards to my dedication to deliver digital marketing plans with innovative strategies that will boost your website’s rank on search engine results pages
            </p>
        
          </div>
          <div className="flex flex-col border border-white rounded-md px-6 py-4">
            <h3 className="text-lg font-medium mb-4 text-center">Links & Contact</h3>
            <ul className="text-sm text-gray-400 mb-2 text-center">
              <li>info@websitesprofessional.com</li>
              <li>704-891-4329</li>
            </ul>
            <div className="flex justify-center">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-center">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mr-4">
              github
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              linkedin
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
