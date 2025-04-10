import "./WhyUs.css";
import Card from "../../Components/Card/Card";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import Track from "../../Components/TrackSearch/Track";

const cardData = [
  {
    title: "Cost Optimization",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod.",
    point: "01",
    icon: faMoneyCheckDollar,
  },
  {
    title: "Reduce transit timing",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod.",
    point: "02",
    icon: faClockFour,
  },
  {
    title: "Warehouse operation",
    description:
      "Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod.",
    point: "03",
    icon: faWarehouse,
  },
];

const WhyUs = () => {
  return (
    <section className="why-us">
      <h2>Why to choose us</h2>
      <div className="feature">
        {cardData.map((card) => {
          return (
            <Card
              title={card.title}
              desc={card.description}
              point={card.point}
              icon={card.icon}
            />
          );
        })}
      </div>

      <div className="track-section">
        <Track />
      </div>
    </section>
  );
};

export default WhyUs;
