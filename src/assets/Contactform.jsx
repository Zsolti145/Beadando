function Footer(props) {
  return (
    <>
      
        <footer>
          <div footer-content>
            <form action="">
              <div className="mb-3">
                <label htmlFor="name">Név:</label>
                <input className="form-control" type="text" name="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="name">Email:</label>
                <input className="form-control" type="text" name="name" />
              </div>
              <input className="btn" type="submit" value="Feliratkozás" />
            </form>
        </div>
        </footer>
    </>
  );
}
export default Footer;
