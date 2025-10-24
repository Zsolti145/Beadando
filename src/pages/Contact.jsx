import Navbar from "../assets/Navbar.jsx";
import ContactForm from "../assets/Contactform.jsx";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="contact-page container py-5">
        <div className="text-center mb-5">
          <h1 className="contact-page__title mb-3">
            Kérdéseivel kapcsolatban írjon nekünk!
          </h1>
          <p className="contact-page__lead mx-auto">
            Akár árajánlattal kapcsolatban vagy reklamáció esetén is írhat. A
            csapatunk hamarosan felveszi Önnel a kapcsolatot.
          </p>
        </div>

        <div className="d-flex justify-content-center">
             {/* Hidden Netlify detection form */}
  <form name="contact" netlify hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message"></textarea>
  </form>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
export default Contact;
