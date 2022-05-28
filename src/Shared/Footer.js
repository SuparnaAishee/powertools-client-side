import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer p-10 bg-neutral text-neutral-content  ">
        <div>
          <span className="footer-title">Services</span>
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
          <span className="footer-title">Ouick Links</span>
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
          <span className="footer-title">Legal</span>
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
        <div>
          <span className="footer-title">Social Media</span>
          <Link to="" className="link link-hover">
            Facebook
          </Link>
          <Link to="" className="link link-hover">
            Instagram
          </Link>
          <Link to="" className="link link-hover">
            Twitter
          </Link>
          <Link to="" className="link link-hover">
            Linkedin
          </Link>
        </div>
        <h6 className="text-muted pt-5 pb-1">
          Copyright &copy; 2021 Tech Tools
        </h6>
      </footer>
    );
};

export default Footer;