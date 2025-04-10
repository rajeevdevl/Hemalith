import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-heading">
        <h2>Who we are</h2>
        <h4>India's trusted transportation services</h4>
      </div>
      <div className="footer-body">
        <div>
          <h5>About</h5>
          <ul>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li>For User</li>
            <li>For organization</li>
          </ul>
        </div>
        <div>
          <h5>Transport Service</h5>
          <ul>
            <li>Delhi</li>
            <li>Gurgaon</li>
            <li>UP</li>
          </ul>
        </div>
        <div className="footer-body_social">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  beat
                  size="1x"
                  style={{ color: "#E4405F" }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  beat
                  size="1x"
                  style={{ color: "#E4405F" }}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faYoutube}
                  beat
                  size="1x"
                  style={{ color: "#E4405F" }}
                />
              </a>
            </li>
          </ul>
          <address className="Address">
            <p className="address_company">Heamlith Logistics P. Ltd.</p>
            <p>
              <small>Burari Delhi India </small>
            </p>
            <small>© 2025 - Hemalith</small>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
