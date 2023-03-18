import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-slate-200">
      <div className="flex justify-around p-[50px]">
        <div>
          <h2 className="font-bold mb-2">SERVICES</h2>
          <p>Branding</p>
          <p className="my-2">Design</p>
          <p className="my-2">Marketing</p>
          <p>Advertisement</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">COMPANY</h2>
          <p>About Us</p>
          <p className="my-2">Contact</p>
          <p className="my-2">Join Us</p>
          <p>Information</p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Location</h2>
          <p>Branding</p>
          <p className="my-2">Design</p>
          <p className="my-2">Marketing</p>
          <p>Advertisement</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
