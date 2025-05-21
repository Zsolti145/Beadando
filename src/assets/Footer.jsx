// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className=" mt-5 mb-5" style={{ backgroundColor: "#222831",  padding: "2rem 5rem", height: "200px" }}>
      <footer id="footer"  className="d-flex flex-row align-items-center justify-content-center gap-5">
        <div>
          <h3>Közösségi média</h3>
          <div className="d-flex flex-row gap-3">
            <a href="https://www.facebook.com/konfigbox" target="_blank"></a>
            <a href="https://www.instagram.com/konfigbox/" target="_blank">
              <img  src="instagram.png"   alt="Instagram" style={{ width: "30px", height: "30px" }}  />
            </a>
            <a href="https://www.tiktok.com/@konfigbox" target="_blank"></a>
          </div>
        </div>
        <div>
          <h3>Elérhetőségek</h3>
          <ul>
            <li>Telefonszám: +36 30 123 4567</li>
            
            <li>Email: <a href="mailto:konfigbox@email.com">konfigbox@email.com</a></li> 
            
            <li>Cím:  Kitalált utca 12/a</li>
           
            
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
