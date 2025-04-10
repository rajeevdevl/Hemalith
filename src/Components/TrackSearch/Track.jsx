import "./Track.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Track = () => {
  return (
    <div className="track-box">
      <form action="#">
        <h3>Track your Logistic</h3>
        <div className="track_bar">
          <div className="tracker_id">
            <FontAwesomeIcon icon={faKeyboard} className="tracker_id--input" />
            <input type="text" placeholder="Enter your tracking id" />
          </div>
          {/* <div className="tracker_address">
            <FontAwesomeIcon icon={faMailBulk} className="tracker_id--input" />
            <input type="email" placeholder="Your email address" />
          </div> */}
          <button>Track</button>
        </div>
      </form>
    </div>
  );
};

export default Track;
