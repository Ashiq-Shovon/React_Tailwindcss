import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../server";
const Vans = () => {
  const [vans, setVans] = useState(null);
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  console.log(vans);
  if (!vans) {
    return <h2>Loading...</h2>
  }
  return (
    <>
      <div className="py-12 bg-[#FFF7ED]">
        <div className="grid grid-cols-2 gap-4 justify-items-center ">
          {vans.map((van) => (
            <div key={van.id} className="">
              <Link to={`/vans/${van.id}`}>
                <img
                  src={van.imageUrl}
                  className="lg:w-[600px] lg:h-[500px] rounded-2xl"
                />
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">{van.name}</p>
                  <p > <span className="font-bold text-2xl">${van.price}</span>/day<span></span></p>
                  
                </div>
                <p className="bg-red-400  rounded-xl text-xl text-white w-24 h-12 grid justify-center content-center">{van.type}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vans;
