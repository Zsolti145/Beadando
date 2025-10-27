import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import "./App.css";
import Navbar from "./assets/Navbar.jsx";
import Infocard from "./assets/Infocard.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./assets/Footer.jsx";
import Success from "./pages/Success.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <header className="mb-5">
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1
            className="text-center"
            style={{ position: "absolute", textShadow: "2px 3px black" }}
          >
            Üdvözöljük a KonfigBox oldalán!
          </h1>
        </div>
      </header>

      <section className="features container d-flex flex-row justify-content-center flex-wrap gap-5 mt-5 mb-5">
        <div>
          <h2 className="mb-5">Számítógép a személyedre szabva.</h2>
          <div className="d-flex flex-column justify-content-center mb-3">
            <p>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#DDEB9D", height: "20px", marginRight: "9px" }}
              />
              Közvetlenül a gyártótól vásárolt alkatrészekből építjük össze a gépeinket.
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center mb-3">
            <p>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#DDEB9D", height: "20px", marginRight: "9px" }}
              />
              Minőségi, gondosan válogatott konfigurációk.
            </p>
          </div>
          <div className="d-flex flex-column justify-content-center mb-3 font-size-5">
            <p>
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "#DDEB9D", height: "20px", marginRight: "9px" }}
              />
              Teljeskörű garanciát vállalunk a gépeinkre.
            </p>
          </div>
        </div>

        <div>
          <img
            id="pcpic"
            src="/anthony-roberts-fMbiAi0rbkA-unsplash.jpg"
            alt="Összeszerelt számítógép"
            style={{ borderRadius: "21px" }}
          />
        </div>
      </section>

      <h2>Szolgáltatásaink</h2>
      <section id="services" className="container d-flex flex-wrap flex-direction-row gap-2">
        <Infocard
          title="Konfigurációk"
          description="Válassz az általunk gondos kezekkel összeállított gépeink közül."
        />
        <Infocard
          title="Egyedi konfiguráció"
          description="Számítógép alkatrészeink széles választékából állíthatod össze a saját konfigurációdat, és ha úgy döntesz, akkor össze is rakjuk neked!"
        />
        <Infocard
          title="Szerviz"
          description="Bármiféle készüléket vagy alkatrészt szervizünk beszámít, és a lehető legrövidebb idő alatt igyekszünk megjavítani."
        />
      </section>
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Success.html" element={<Success/>} />
        {/* <Route path="/success" element={<Success/>} /> Teszt okból kilövöm hátha megy a submission*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
