import fb from '../../../assets/logo/Social/fb.png';
import insta from '../../../assets/logo/Social/insta.png';
import linkedin from '../../../assets/logo/Social/linkedin.png';
import twitter from '../../../assets/logo/Social/twitter.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-base-content ">
            <nav>
          <h6 className="text-4xl font-medium text-neutral-950">Fashion Fusion</h6> 
          <h6>Complete your style with awesome clothes from us.</h6>
          <div className="grid grid-flow-col gap-4">
            <a><img src={fb} alt="" /> </a>
            <a><img src={insta} alt="" /> </a>
            <a><img src={linkedin} alt="" /> </a>
            <a><img src={twitter} alt="" /> </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        
      </footer>
    );
};

export default Footer;