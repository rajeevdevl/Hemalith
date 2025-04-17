import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="">
      <div className="logo">
        <img src={Logo} alt="Hemalith Logo" className="size-30" />
      </div>
      <div className="navigations">
        <div className="top_bar">
          <ul className="address_links">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon-style" />
              Burari, 155305
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} className="icon-style" />
              Mon - Sat: 8am - 5pm
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneFlip} className="icon-style" />
              +92 (8800) 87890
            </li>
          </ul>
        </div>
        <ul className="navigation_links">
          <li>
            <a href="#" className="font-medium text-sky-600 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-medium text-sky-600 hover:underline">
              About
            </a>
          </li>
          <li>
            <select
              name=""
              id=""
              className="font-medium text-sky-600 hover:underline"
            >
              <option value="">Services</option>
              <option value="user_transport">User</option>
              <option value="business_logistics">Organization</option>
            </select>
          </li>
          <li>
            <a href="#" className="font-medium text-sky-600 hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="font-medium text-sky-600 hover:underline">
              Login
            </a>
          </li>
        </ul>

        <div className="connect">Get in touch</div>
      </div>
    </nav>
  );
};

export default Navbar;
