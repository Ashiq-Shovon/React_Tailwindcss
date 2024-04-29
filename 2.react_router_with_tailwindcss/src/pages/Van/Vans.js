import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useLoaderData } from "react-router-dom";
import "../../server";
import "../../dataLayerApi";
import { getVans } from "../../dataLayerApi";

export function loader() {
  return getVans();
}
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [vans, setVans] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const typeFilter = searchParams.get("type");

  const vans = useLoaderData();
  // useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true);
  //     try {
  //       const data = await getVans();
  //       setVans(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadVans();
  // }, []);
  console.log(vans);
  // console.log(typeFilter);

  const displayVans = typeFilter
    ? vans.filter((char) => char.type === typeFilter)
    : vans;

  const handleFilterChange = (key, value) => {
    setSearchParams((preParams) => {
      if (value === null) {
        preParams.delete(key);
      } else {
        preParams.set(key, value);
      }
      return preParams;
    });
  };
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  // if (error) {
  //   return <h1>there was an error: { error.message}</h1>
  // }
  return (
    <>
      <div className="py-12 bg-[#FFF7ED]">
        {/* <Link to="?type=simple">simple</Link>
        <Link to="?type=rugged">rugged</Link>
        <Link to="?type=luxury">luxury</Link> */}
        <div className="flex justify-center p-5 space-x-12">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`border rounded-md p-3 bg-orange-500 ${
              typeFilter === "simple" ? "bg-gray-800 text-white" : ""
            }`}
          >
            simple
          </button>
          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`border rounded-md p-3 bg-orange-500 ${
              typeFilter === "rugged" ? "bg-gray-800 text-white" : ""
            }`}
          >
            rugged
          </button>
          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`border rounded-md p-3 bg-orange-500 ${
              typeFilter === "luxury" ? "bg-gray-800 text-white" : ""
            }`}
          >
            luxury
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="border rounded-md p-3 bg-orange-500"
            >
              clear
            </button>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-4 justify-items-center ">
          {displayVans.map((van) => (
            <div key={van.id} className="">
              <Link
                to={`/vans/${van.id}`}
                state={{ search: `?${searchParams.toString()}` }}
              >
                <img
                  src={van.imageUrl}
                  className="lg:w-[600px] lg:h-[500px] rounded-2xl"
                />
                <div className="flex justify-between">
                  <p className="font-bold text-2xl">{van.name}</p>
                  <p>
                    {" "}
                    <span className="font-bold text-2xl">${van.price}</span>/day
                    <span></span>
                  </p>
                </div>
                <p className="bg-red-400  rounded-xl text-xl text-white w-24 h-12 grid justify-center content-center">
                  {van.type}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vans;
