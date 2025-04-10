import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ title, desc, point, icon }) => {
  return (
    <div className="card">
      <div className="icon-box">
        <FontAwesomeIcon icon={icon} className="icon-style" />
        <p>{point}</p>
      </div>
      <div className="card-box">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
