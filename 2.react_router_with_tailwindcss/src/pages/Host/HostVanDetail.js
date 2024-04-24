import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";

const HostVanDetail = () => {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState({});
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);
  return (
    <div className="">
      <section className="mx-20">
        <Link to=".." relative="path">
          &larr; <span>back to all vans</span>
        </Link>
      </section>
      <div className="shadow-xl rounded-3xl m-20 bg-white">
        <div className="flex p-7 items-center">
          <div>
            <img src={currentVan.imageUrl} className="w-96" />
          </div>
          <div className="indent-8">
            <h2 className="w-32 h-12 bg-slate-400">{currentVan.type}</h2>
            <h3 className="font-bold text-3xl">{currentVan.name}</h3>
            <p className="font-bold text-2xl">${currentVan.price}/day</p>
          </div>
        </div>
        <div className="p-7">
          <nav className=" flex gap-6">
            <Link to=".">description</Link>
            <Link to="pricing">pricing</Link>
            <Link to="photos">photos</Link>
          </nav>
          <Outlet context={{ currentVan }} />
        </div>
      </div>
    </div>
  );
};

export default HostVanDetail;
