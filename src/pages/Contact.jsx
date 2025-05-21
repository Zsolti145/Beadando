import Navbar from "../assets/Navbar";
import Contactform from "../assets/Contactform";

function Contact() {
  return (
    <>
      <Navbar />

      <h1>Kérdéseivel kapcsolatban írjon nekünk!</h1>
      <div className="d-flex  flex-column align-items-center  gap-5 mt-5">
        <p>Akár árajánlattal kapcsolatban vagy reklamáció esetén is írhat.</p>
        <div>
          <Contactform />
        </div>
      </div>
    </>
  );
}
export default Contact;
