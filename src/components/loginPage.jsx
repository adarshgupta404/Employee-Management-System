import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import { useNavigate } from "react-router-dom";
import baseUrl from "./baseUrl";
const LoginPage = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    axios
      .post(`${baseUrl}/login`, info)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log(res.data.Status);
          navigate('/');
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-3/4 md:w-96 md:96 h-2/3 md:h-120 p-10 opacity-60 absolute rounded-md bg-gradient-to-b from-blue-400 to-orange-100"></div>
        <div className="loginform w-3/4 md:w-96 h-2/3 md:h-120 p-10 border-2 border-white rounded-md backdrop-blur-sm z-0">
          <div className="error font-bold text-red-600 duration-10000">
            {error && error}
          </div>
          <div className="head text-left text-3xl font-bold mb-10">Log In</div>
          <form onSubmit={handleSubmit}>
            <label>
              {" "}
              <p className="font-bold">Email</p>
              <input
                type="email"
                name="email"
                className="font-semibold w-full p-2 ml-0 mb-6 m-2 rounded border-2 bg-gradient-to-r from-cyan-100 to-blue-200 border-slate-800"
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
                className="font-semibold w-full ml-0 m-2 p-2 mb-6 rounded border-2 bg-gradient-to-r from-cyan-100 to-blue-200 border-slate-800"
                placeholder="Enter password"
                onChange={(e) => {
                  setInfo({ ...info, password: e.target.value });
                }}
              />
            </label>
            <button
              className="block mt-2 bg-gradient-to-r from-green-800 to-green-500 hover:from-green-500 hover:to-green-800 duration-500 ease-in-out rounded w-full h-10 text-white"
              type="submit"
              onClick={handleSubmit}
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
    </div>
  );
};

export default LoginPage;
