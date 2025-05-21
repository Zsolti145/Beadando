import Navbar from "../assets/Navbar";
import Contactform from "../assets/Contactform";

function Contact() {
  return (
    <>
      <Navbar />

      <h1>Ár ajánlattal kapcsolatban írjon nekünk!</h1>

      <div className="d-flex justify-content-center  mt-5">
        
            
        <Contactform />
      </div>
    </>
  );
}
export default Contact;
