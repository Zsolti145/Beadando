function ContactForm() {
  return (
    <>
      <div className="footer-content">
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Név:
            </label>
            <input className="form-control" type="text" id="name" name="name" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input className="form-control" type="email" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Üzenet:
            </label>
            <textarea className="form-control" id="message" name="message" rows="3"></textarea>
          </div>
          <input className="btn" type="submit" value="Üzenet" />
        </form>
      </div>
    </>
  );
}
export default ContactForm;
