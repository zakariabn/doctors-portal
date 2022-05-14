import React from "react";
import footerBg from "../../../asset/images/footer.png";

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundImage: `url(${footerBg})` }}
        class="footer md:grid-cols-3 md:justify-items-center p-10 bg-neutral text-accent bg-cover bg-center">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
