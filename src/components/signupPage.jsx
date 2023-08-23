import React, { useState } from "react";
import axios from "axios";
import baseUrl from "./baseUrl";
const SignupPage = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    axios
      .post(`${baseUrl}/login`, info)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.Status);
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-96 h-2/3 p-10 opacity-60 absolute rounded-md bg-gradient-to-r from-violet-300 to-fuchsia-200"></div>
      <div className="loginform w-96 h-2/3 p-10 border-2 border-white rounded-md z-0">
        <div className="error font-bold text-red-600 duration-10000">{error && error}</div>
        <div className="head text-left text-3xl font-bold mb-10">Log In</div>
        <form onSubmit={handleSubmit}>
          <label>
            {" "}
            <p className="font-bold">Email</p>
            <input
              type="email"
              name="email"
              className="w-full p-2 ml-0 mb-6 m-2 rounded border-2 bg-gradient-to-r from-cyan-100 to-blue-200 border-slate-800"
              placeholder="Enter Email"
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
            />
          </label>
          <label>
            {" "}
            <p className="font-bold">Password</p>
            <input
              type="password"
              name="password"
              className="w-full ml-0 m-2 p-2 mb-6 rounded border-2 bg-gradient-to-r from-cyan-100 to-blue-200 border-slate-800"
              placeholder="Enter password"
              onChange={(e) => {
                setInfo({ ...info, password: e.target.value });
              }}
            />
          </label>
          <button
            className="block mt-6 bg-gradient-to-r from-green-800 to-green-500 hover:from-green-500 hover:to-green-800 duration-500 ease-in-out rounded w-full h-10 text-white"
            type="submit"
          >
            Log in
          </button>
        </form>
        <p className="text-center mt-2">Don't have an Account?</p>
        <button className="block mt-2 bg-gradient-to-r from-cyan-300 to-blue-400 hover:from-blue-400 hover:to-cyan-300 transition duration-500 ease-in-out w-full h-10 rounded text-black">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
