import React from "react";
import contact from "../assets/contact.png";
const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0320] to-[#1a0836] min-h-screen flex flex-col items-center justify-center py-12 px-6 text-white">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact <span className="text-pink-500">With Me</span> </h1>
      <p className="text-gray-400 text-center max-w-xl mb-10">  Feel free to directly contact with me via phone or email below or  fill up this form and send me a message. </p>

      {/* Contact Box */}
      <div className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Info */}
        <div className="w-full md:w-1/2 bg-white/10 p-6 flex flex-col justify-between">
          <div>
            <p className="text-lg font-semibold"> Phone: <span className="text-white">+977-9868886773</span></p>
            <p className="text-lg font-semibold mt-2"> Email: <span className="text-white">bikrambohara822@gmail.com</span></p>
          </div>
          <div className="mt-7">
            <img  src={contact}  alt="Handshake"  className="rounded-xl shadow-lg"  />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2  p-6">
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input  type="text"   placeholder="Your Name" className="w-1/2 p-3 rounded-md text-black bg-yellow-50" />
              <input type="text" placeholder="Your Phone Number" className="w-1/2 p-3 rounded-md text-black bg-yellow-50"  />
            </div>
            <input type="email" placeholder="Your Email"  className="p-3 rounded-md text-black bg-yellow-50" />
            <textarea placeholder="Your Message" rows="5" className="p-3 rounded-md text-black bg-yellow-50" ></textarea>
            <button  type="submit"  className="bg-white text-pink-600 font-bold py-3 rounded-md hover:bg-gray-200 transition" >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
