import React from "react";
import bgImg from "../assets/images/about-hero.png";
import { Link, redirect } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetVansQuery } from "../redux/services/vansApi";
const About = () => {
  let navigate = useNavigate();
  const { data } = useGetVansQuery();
  // alert(data);
  console.log(data)
  useEffect(() => {
    setTimeout(() => {
      redirect("/login");
    }, 3000);
  }, []);
  return (
    <div>
      <img src={bgImg} className="w-full h-96" />
      <div className="container mx-auto my-11">
        <h1 className="font-bold text-3xl mb-5">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="mb-5 text-2xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="mb-5 text-2xl">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="p-5 bg-orange-400 rounded">
          <h2 className="font-bold text-3xl mb-6">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="bg-black text-white px-4 py-2 rounded" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
