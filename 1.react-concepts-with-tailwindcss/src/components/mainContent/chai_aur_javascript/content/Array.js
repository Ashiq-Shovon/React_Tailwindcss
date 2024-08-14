import React, { useCallback, useEffect, useState } from "react";
const arr = [
  {
    id: 1,
    name: "anik",
    age: 26,
    like: null,
    dislike: null,
  },
  {
    id: 2,
    name: "asif",
    age: 27,
    like: null,
    dislike: null,
  },
];
const Array = () => {
  const [data, setData] = useState(arr);
  const [random, setRandom] = useState(3);
  const [singleData, setSingleData] = useState({
    id: "",
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRandom((pre) => pre + 1);
    setData((pre) => {
      return [...pre, { ...singleData, id: random }];
    });

    console.log(data);
  };

  const deleteItem = (id) => {
    const new_data = data.filter((item) => item.id !== id);
    setData(new_data);
  };
  const handleLike = (id, like) => {
    const new_data = data.map((item) =>
      item.id === id ? { ...item, like: like + 1 } : { ...item }
    );
    setData(new_data);
  };
  const handleDislike = (id) => {
    const new_data = data.map((item) =>
      item.id === id ? { ...item, dislike: item.dislike + 1 } : { ...item }
    );
    setData(new_data);
  };

  return (
    <>
      <div className="basis-3/4">
        <div className="grid grid-cols-1 w-full">
          <div className="bg-slate-300">
            <h1 className="text-2xl font-bold text-center uppercase h-0">
              Array
            </h1>
          </div>
          <div className="grid justify-center   p-8">
            <h2 className="text-2xl uppercase text-center">Form to fill up</h2>
          </div>
          <form className="grid gap-y-5 bg-lime-600 p-8 rounded-lg text-xl">
            <div className="grid grid-cols-2">
              <label>Enter your name: </label>
              <input
                onChange={handleChange}
                name="name"
                className="p-3 rounded-lg"
                placeholder="enter your name"
              ></input>
            </div>
            <div className="grid grid-cols-2">
              <label>Enter your age:</label>
              <input
                onChange={handleChange}
                name="age"
                className="p-3 rounded-lg"
                placeholder="enter your age"
              ></input>
            </div>
            <button onClick={handleSubmit} type="submit">
              submit
            </button>
          </form>
          <div>
            <h2 className="text-2xl font-bold text-center">
              User List in the array
            </h2>
            <div className="grid grid-cols-3 gap-3 text-xl">
              {data.map((item) => (
                <ul key={item.id} className="bg-gray-500 rounded-lg p-4">
                  <li>{item.id}</li>
                  <li>{item.name}</li>
                  <li>{item.age}</li>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                  <br />
                  <button onClick={() => handleLike(item.id, item.like)}>
                    like <span>{item.like}</span>
                  </button>
                  <button onClick={() => handleDislike(item.id)}>
                    dislike <span>{item.dislike}</span>
                  </button>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Array;
