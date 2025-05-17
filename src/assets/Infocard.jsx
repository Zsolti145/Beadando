import { useState } from "react";

const Infocard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <div
        className={`flip-card  ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        {/* <img src className="card-img-top" height={"250px"} /> */}
        <div className="flip-card-inner">
          <div className="flip-card-front">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>

    <div className="flip-card-back">
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
    </div>

      </div>
      </div>
    </>
  );
};
export default Infocard;
