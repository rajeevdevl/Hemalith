import "./HowItWorks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <span className="how-it-works_span">HOW IT WORKS</span>
      <h3 className="how-it-works_heading">
        Seamless Shipping in 3 Simple Steps
      </h3>

      <div className="how-it-works_steps">
        <div className="step">
          <div className="icon-box icon-box1">
            <FontAwesomeIcon icon={faFileText} className="icon_box--icon" />
          </div>
          <p>
            Submit Your <br /> Shipment Details
          </p>
        </div>
        <div className="step">
          <div className="icon-box icon-box2">
            <FontAwesomeIcon icon={faCreditCard} className="icon_box--icon" />
          </div>
          <p>
            Confirm & <br />
            Make Payment
          </p>
        </div>
        <div className="step step-2">
          <div className="icon-box">
            <FontAwesomeIcon icon={faTruck} className="icon_box--icon" />
          </div>
          <p>
            Fast & <br />
            Secure Delivery
          </p>
        </div>
      </div>

      <div className="how-it-works_cta">
        <button>Book your Shipment details</button>
      </div>
    </section>
  );
};

export default HowItWorks;
