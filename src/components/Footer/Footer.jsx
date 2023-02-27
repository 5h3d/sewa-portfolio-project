import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E1DDD6] ">
      <div className="container ">
        <div className="footer__content py-10">
          <div className="footer__head flex justify-between">
            <h3 className="logo text-4xl">sewa</h3>
            <div className="right text-sm">
              <p>Hellor world! lets go</p>
              <p>Hellor world! lets go</p>
            </div>
          </div>
          <div className="Footer__main h-[450px] flex items-center">
            <h3 className="text-center text-5xl">
              {/* Lets talk about your project */}
              Lets bring your thought to life
            </h3>
          </div>
          <div className="socials">
            <p className="font-bold">Socials</p>
            <p className="small text-sm">Behance</p>
            <p className="small text-sm">Dribbble</p>
            <p className="small text-sm">Twitter</p>
            <p className="small text-sm">LinkedIn</p>
          </div>
        </div>
        <div className="credit text-center">
          <small> Dev with ❤️ by Udeh Shedrack</small>
        </div>
        <div className="footer__footer">
          <div className="footet__footer__top flex justify-between">
            <p className="location">Lagos,Nigeria.</p>
            <p className="copywrite">@2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
