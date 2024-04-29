import React, { useEffect, useState } from "react";
import "../../server.js";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../dataLayerApi.js";
export function loader() {
  
  return getHostVans();
}
const HostVans = () => {
  // const [vans, setVans] = useState();
  const vans = useLoaderData()
  // useEffect(() => {
  //   fetch(`/api/host/vans`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setVans(data.vans);
  //       console.log(data.vans);
  //     });
  // }, []);
  // if (!vans) {
  //   return <h2>Loading...</h2>
  // }
  return (
    <>
      <div className="grid justify-center">
        <Link to="something">click</Link>
        {vans.map((data, index) =>
          vans.length > 0 ? (
            <Link key={index} to={`/host/vans/${data.id}`}>
              <div className="container lg:w-[1000px] md:w-[500px] flex shadow-lg p-8 m-2 bg-white">
                <img src={data.imageUrl} className="rounded-lg w-48" />
                <div className="indent-4 grid content-center">
                  <h2 className="font-bold text-2xl">{data.name}</h2>
                  <p>
                    <span className="text-lg"> ${data.price}/day</span>
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <h1>loading</h1>
          )
        )}
      </div>
    </>
  );
};

export default HostVans;
