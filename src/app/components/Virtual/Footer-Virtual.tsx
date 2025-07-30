import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-8">
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center mx-8">
        <p className="text-white text-sm mb-4 md:mb-0">© 2023 VirtualTry. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-white hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white hover:text-white">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;