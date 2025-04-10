import "./Hero.css";

import Truck from "../../assets/truck.png";

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero_text">
        <h1 className="main-text">TRUST THE JOURNEY </h1>
        <h2 className="secondary-text">Trust Hemalith</h2>
      </div>
      <img src={Truck} alt="" className="truck_hero" />
    </main>
  );
};

export default Hero;
