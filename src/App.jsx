import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import HowItWorks from "./Pages/howItWorks/HowItWorks";
import WhyUs from "./Pages/WhyUs/WhyUs";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
