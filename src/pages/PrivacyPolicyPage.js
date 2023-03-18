import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineClose } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Privacy Policy - Website Professionals</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Privacy Policy
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Effective Date: March 1, 2023
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="prose prose-indigo prose-lg text-gray-500">
              <p>
                We at Website Professionals respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose personal information about you when you use our website (http://websitesprofessional.com/) and our services.
              </p>
              <h3>Information We Collect</h3>
              <p>
                We may collect personal information about you when you visit our website, use our services, or communicate with us. The personal information we collect may include your name, email address, phone number, and other information you provide to us.
              </p>
              <h3>How We Use Your Information</h3>
              <p>
                We use your personal information to provide our services to you, communicate with you, and improve our services. We may also use your personal information for other purposes that are compatible with the original purpose of collection or for which you have given your consent.
              </p>
              <h3>Disclosure of Your Information</h3>
              <p>
                We may disclose your personal information to third-party service providers who assist us in providing our services to you. We may also disclose your personal information to comply with legal obligations or protect our rights, property, or safety.
              </p>
              <h3>Security</h3>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or electronic storage is completely secure.
              </p>
              <h3>Changes to Our Privacy Policy</h3>
              <p>
                We may update this privacy policy from time to time. If we make material changes, we will notify you by email (if you have provided us with your email address) or by posting a notice on our website.
              </p>
              <h3>Contact Us</h3>
              <p>
                If you have any questions or concerns about our privacy policy or our handling of your personal information, please contact us:
              </p>
              <ul>
                <li>
                  <FaPhoneAlt className="inline-block mr-2 text-gray-500" />
                  Phone: 704-891-4329
</li>
<li>
<MdEmail className="inline-block mr-2 text-gray-500" />
Email: info@websitesprofessional.com
</li>
<li>
<IoLocationSharp className="inline-block mr-2 text-gray-500" />
Address: 123 Main St, Anytown USA 12345
</li>
</ul>
</div>
</div>
</div>
</div>
<Link to="/" className="fixed bottom-4 right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700">
<AiOutlineClose size={20} />
<span className="sr-only">Close</span>
</Link>
</div>
);
};

export default PrivacyPolicyPage;