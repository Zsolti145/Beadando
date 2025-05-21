import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faFacebook,
  faInstagram,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className=" mt-5" style={{ backgroundColor: "#222831",  padding: "2rem 5rem", }}>
      <footer id="footer"  className="d-flex flex-row  justify-content-center gap-5">
        <div>
          <h3>Közösségi média</h3>
          <div className="d-flex flex-row gap-3">
            <a href="https://www.facebook.com/konfigbox" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="3x" style={{ color: "#4267B2" }} />
            </a>
            <a href="https://www.instagram.com/konfigbox/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: "#E1306C" }} />
            </a>
            <a href="https://www.tiktok.com/@konfigbox" target="_blank">
            <FontAwesomeIcon icon={faTiktok} size="3x" style={{ color: "#69C9D0" }} /></a>
          </div>
        </div>
<div style={{width:"200px"}}></div>

        <div className='footerContact'>
          <h3>Elérhetőségek</h3>
          <ul>
            <li>Telefonszám: +01 23 456 789</li>
            
            <li>Email: <a href="mailto:konfigbox@email.com">konfigbox@email.com</a></li> 
            
            <li>Cím:  Kitalált utca 12/a</li>
            <li><Link className='nav-link' href="/contact" to="/contact">Hírlevél</Link></li>
   </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
