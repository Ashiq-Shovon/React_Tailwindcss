import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const VanDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const handleClick = () => {
    console.log(params);
    console.log(data);
  };
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data.vans));
    console.log(data);
  }, [params.id]);
  return (
    <div>
      <img src={data.imageUrl} />
      <h1>{data.name}</h1>
      <h1>{data.type}</h1>
      <h1>{data.description}</h1>
      <p>{data.price}</p>
      <button onClick={handleClick}> click me</button>
    </div>
  );
};

export default VanDetail;
