function ContactForm() {
  return (
    <div className="contact-form-card shadow-lg">
      <div className="contact-form-header text-center mb-4">
        <h2 className="contact-form-title mb-2">Üzenjen nekünk</h2>
        <p className="contact-form-helper mb-0">
          Töltse ki az alábbi űrlapot, és kollégáink egy munkanapon belül
          jelentkeznek.
        </p>
      </div>
      <form
        name="contact"
        className="contact-form row g-4"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={"submit"}
        action="/success.html"
      >
        <input type="hidden" name="form-name" value="contact" />
         <input type="hidden" name="bot-field" />

        <div className="col-12 col-md-6">
          <label className="form-label" htmlFor="name">
            Név*
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Teljes neve"
            autoComplete="name"
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label" htmlFor="email">
            Email*
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="nev@example.com"
            autoComplete="email"
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="message">
            Üzenet*
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            placeholder="Írja le, miben segíthetünk"
            required
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button className="btn contact-submit" type="submit">
            Üzenet elküldése
          </button>
        </div>
      </form>

      <p className="contact-form-footer text-center mt-4 mb-0">
        *A csillaggal jelölt mezők kitöltése kötelező.
      </p>
    </div>
  );
}
export default ContactForm;
