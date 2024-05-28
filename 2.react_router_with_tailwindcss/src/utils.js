import { useCallback, useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import { Await, Link, defer, json } from "react-router-dom";
import { useGetHostVanDetailQuery } from "./redux/services/vansApi";
// import { useGetVansQuery } from "./redux/services/vansApi";
export async function authRequired() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    const response = redirect("/login");
    response.body = true;
    throw response;
  }
  return redirect("/host");
}

export function useFetching(prop) {
  const [res, setRes] = useState();
  const { id } = useParams();

  const { data = [], isLoading, isError, isFetching, error } = prop(res);
  console.log(data);
  console.log(id);
  const arr = Object.keys(data).toString();
  useEffect(() => {
    console.log(res);
    console.log("effect");
  });
  const fetchData = useCallback(
    (id) => {
      const value = new Promise((resolve, reject) => {
        setTimeout(() => {
          setRes(id);
        });
        setTimeout(() => {
          resolve(data[`${arr}`]);
        }, 500);
      });

      return value;
    },
    [data]
  );

  const loader = ({ params }) => {
    return defer({ vans: fetchData(params.id) });
  };

  return loader;
}
