import React, { Suspense, useEffect, useState } from "react";
import "../../server.js";
import { Link, useLoaderData, defer, Await, redirect } from "react-router-dom";
import { getHostVans } from "../../dataLayerApi.js";
import Loader from "../../components/Loader.js";
import SyncLoader from "react-spinners/SyncLoader";
import { authRequired, useFetching } from "../../utils.js";
import { useGetHostVansQuery } from "../../redux/services/vansApi.js";
const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-120px",
  position: "absolute",
  zIndex: "10",
  width: "100%",
  height: "100%",
  backgroundColor: "#FFF7ED",
};
export function useLoader() {
  authRequired();
  const handleQuery = useFetching(useGetHostVansQuery);
  return handleQuery;
}
const HostVans = () => {
  // const [vans, setVans] = useState();
  const hostVans = useLoaderData();
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
      <Suspense fallback={<Loader />}>
        <div className="grid justify-center">
          <Await resolve={hostVans.vans}>
            {(vans) => {
              return (
                <>
                  {vans.map((van, index) => (
                    <Link key={index} to={`/host/vans/${van.id}`}>
                      <div className="container lg:w-[1000px] md:w-[500px] flex shadow-lg p-8 m-2 bg-white">
                        <img src={van.imageUrl} className="rounded-lg w-48" />
                        <div className="indent-4 grid content-center">
                          <h2 className="font-bold text-2xl">{van.name}</h2>
                          <p>
                            <span className="text-lg"> ${van.price}/day</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              );
            }}
          </Await>
        </div>
      </Suspense>
    </>
  );
};

export default HostVans;
