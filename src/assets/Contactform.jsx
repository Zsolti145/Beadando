function Footer() {
  return (
    <>
        

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
              <div className="mb-3">
                
                <textarea class="form-control"  rows="3" ></textarea>
              </div>
              <input className="btn" type="submit" value="Üzenet" />
            </form>
        </div>
       
       
    </>
  );
}
export default Footer;
