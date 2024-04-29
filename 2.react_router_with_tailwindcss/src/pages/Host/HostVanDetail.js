import React, { useState, useEffect } from "react";
import { Outlet, useLoaderData, useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
// import { getHostVansDetail } from "../../dataLayerApi";
import { getHostVanDetail } from "../../dataLayerApi";

export function loader({ params }) {
  return getHostVanDetail(params);
}

const HostVanDetail = () => {
  // const params = useParams();
  // const [currentVan, setCurrentVan] = useState(null);
  const currentVan = useLoaderData();
  // console.log(currentVan);
  // useEffect(() => {
  //   fetch(`/api/host/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setCurrentVan(data.vans));
  // }, []);

  // if (!currentVan) {
  //   return <h2>loading...</h2>;
  // }

  return (
    <div className="text-2xl">
      <section className="mx-20">
        <Link to=".." relative="path">
          &larr; <span>back to all vans</span>
        </Link>
      </section>
      <div className="shadow-xl rounded-3xl mx-20 my-5 bg-white">
        <div className="flex p-7 items-center">
          <div>
            <img src={currentVan.imageUrl} className="w-96 rounded-sm" />
          </div>
          <div className="ml-7">
            <h2 className="bg-slate-400 inline-block py-2 px-3 rounded mb-4">
              {currentVan.type}
            </h2>
            <h3 className="font-bold text-5xl mb-4">{currentVan.name}</h3>
            <p className="font-bold text-3xl">
              ${currentVan.price}
              <span className="text-sm font-semibold">/day</span>
            </p>
          </div>
        </div>
        <div className="p-7">
          <nav className="border flex gap-6 mb-6">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border border-orange-400 rounded-lg py-2 px-3"
                  : "py-2 px-3"
              }
              end
              to="."
            >
              Description
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border border-orange-400 rounded-lg py-2 px-3"
                  : "py-2 px-3"
              }
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border border-orange-400 rounded-lg py-2 px-3"
                  : "py-2 px-3"
              }
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      </div>
    </div>
  );
};

export default HostVanDetail;
