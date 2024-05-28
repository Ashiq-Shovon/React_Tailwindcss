import React, { useState } from "react";

const Login = () => {
  const [loginForm, SetLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleForm = (e) => {
    SetLoginForm((pre) => {
      const { name, value } = e.target;

      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit }>
        <div className="grid justify-center content-center w-full h-screen mt-[-120px]">
          <h1 className="text-center text-2xl mb-4">This is login Form</h1>
          <input
            type="email"
            name="username"
            placeholder="Enter your email id"
            onChange={handleForm}
            value={loginForm.username}
            className="px-2 py-3 mb-2 w-[500px]"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleForm}
            value={loginForm.password}
            className="px-2 py-3 mb-2"
          ></input>
          <button
          
            className="py-3 px-4 bg-orange-400 rounded-lg"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
