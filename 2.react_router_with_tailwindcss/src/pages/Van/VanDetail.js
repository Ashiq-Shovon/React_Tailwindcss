import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getVan } from "../../dataLayerApi";
export function loader({params}) {
  return getVan(params);
}
const VanDetail = () => {
  // const params = useParams();
  const location = useLocation();
  const data = useLoaderData();
  // const [data, setData] = useState({});
  // const handleClick = () => {
  //   console.log(params);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.vans));
  //   console.log(data);
  // }, [params.id]);
  const back = location.state?.search || "";
  return (
    <div>
      <div className="p-8 text-2xl">
        <div className="mb-8">
          <Link to={`..${back}`} relative="path">
          &larr; <span>Back to all vans</span>
          </Link>
        </div>

        <img
          className="object-none object-center rounded mb-8"
          src={data.imageUrl}
        />

        <h1 className="inline-block p-2 rounded bg-slate-500 mb-8">
          {data.type}
        </h1>
        <h1 className="font-bold mb-8">{data.name}</h1>
        <h1 className="mb-4">
          <span className="font-bold text-3xl">${data.price}</span>/day
        </h1>
        <h1>{data.description}</h1>
      </div>
    </div>
  );
};

export default VanDetail;
