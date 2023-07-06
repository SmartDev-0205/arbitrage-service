import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
import IconMenu from '../../components/Icons';
import ComputerImg from '../../assets/images/computer.svg';
import Logo from '../../assets/images/logo.svg';

const social = [
  { icon: 'FaceBook', router: '' },
  { icon: 'Linkedin', router: '' },
  { icon: 'Instagram', router: '' },
  { icon: 'YouTobe', router: '' }
];

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <div>
          <Bounce center>
            <div className="conform-image">
              <img src={ComputerImg} alt="computer" />
            </div>
            <div className="contact-form">
              <p>Get in touch</p>
              <div className="form-control">
                <div className="flex flex-col xs:flex-row gap-[14px]">
                  <div className="w-full relative">
                    <IconMenu icon="User" className="icon" />
                    <input type="text" placeholder="Your First Name" />
                  </div>
                  <div className="w-full relative">
                    <IconMenu icon="User" className="icon" />
                    <input type="email" placeholder="Your Email ID" />
                  </div>
                </div>
                <div className="w-full relative">
                  <IconMenu icon="Send" className="icon" />
                  <textarea rows={4} placeholder="Message" />
                </div>
              </div>
              <div className="form-footer">
                <div>
                  <IconMenu icon="Linkedin" size={20} />
                </div>
                <button>Join the waiting list</button>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
      <div className="footer-top">
        <div className="logo-container">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <p>
            Our crypto bots execute profitable arbitrage trades between exchanges without sending funds from one
            exchange to another. This allows our proprietary bots to buy and sell cryptocurrencies simultaneously and
            profit from the price difference instantly. We remove the risk entirely from arbitrage trading.
          </p>
        </div>
        <div className="links">
          <div className="routing">
            <h3>Quick Links</h3>
            <div>
              <Link to="/">Acount</Link>
              <Link to="/">Contract</Link>
              <Link to="/">Whitepaper</Link>
            </div>
          </div>
          <div className="social">
            <h3>Social Media Link</h3>
            <div>
              {social.map((item: any, ind: number) => {
                return (
                  <Link key={ind} to={item.router}>
                    <IconMenu icon={item.icon} size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 Arbitrage Plus, Inc.</p>
        <div>
          <Link to="">Privacy Policy</Link>
          <span> | </span>
          <Link to="">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
