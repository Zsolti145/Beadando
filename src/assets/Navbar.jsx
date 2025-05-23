import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <button  className="navbar-toggler ms-auto ms-lg-0"  type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/" aria-current="page" href="/">
                    Főoldal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#services" to="/">
                    Szolgáltatásaink
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact" to="/contact">
                    Kapcsolat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
