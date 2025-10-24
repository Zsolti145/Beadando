import Navbar from "../assets/Navbar.jsx";
import ContactForm from "../assets/Contactform.jsx";

function Contact() {
  return (
    <>
      <Navbar />

      <h1>Kérdéseivel kapcsolatban írjon nekünk!</h1>
      <div className="d-flex flex-column align-items-center gap-5 mt-5">
        <p>Akár árajánlattal kapcsolatban vagy reklamáció esetén is írhat.</p>
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
export default Contact;
