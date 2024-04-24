import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import WorkFlow from "./components/WorkFlow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
