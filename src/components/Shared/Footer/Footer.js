import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../../asset/images/footer.png";

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundImage: `url(${footerBg})` }}
        className="bg-cover bg-center">
        <div className="footer md:grid-cols-3 md:justify-items-center p-10 bg-neutral text-accent font-medium md:text-lg">
          <div>
            <span className="footer-title text-primary opacity-100">Services</span>
            <Link to="" className="link link-hover">
              Branding
            </Link>
            <Link to="" className="link link-hover">
              Design
            </Link>
            <Link to="" className="link link-hover">
              Marketing
            </Link>
            <Link to="" className="link link-hover">
              Advertisement
            </Link>
          </div>
          <div>
            <span className="footer-title  text-primary opacity-100">Company</span>
            <Link to="" className="link link-hover">
              About us
            </Link>
            <Link to="" className="link link-hover">
              Contact
            </Link>
            <Link to="" className="link link-hover">
              Jobs
            </Link>
            <Link to="" className="link link-hover">
              Press kit
            </Link>
          </div>
          <div>
            <span className="footer-title text-primary opacity-100">Legal</span>
            <Link to="" className="link link-hover">
              Terms of use
            </Link>
            <Link to="" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="" className="link link-hover">
              Cookie policy
            </Link>
          </div>
        </div>

        <div>
          <p className="text-black text-center text-lg py-10">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
