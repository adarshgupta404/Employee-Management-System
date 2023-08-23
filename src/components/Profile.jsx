import axios from "axios";
import React, { useEffect, useState } from "react";
import baseUrl from "./baseUrl";
const Profile = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/adminprofile`)
      .then((res) => {setData(res.data.Result)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profile h-screen flex justify-center items-center">
      <div className="w-full max-w-sm mb-16 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end h-8 pt-4">
        </div>
        <div className="flex flex-col items-center pb-10">
          {data[0].image ? <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={`${baseUrl}/images/${data[0].image}`}
            alt="admin"
          />:<></>}
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {data[0].name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Admin
          </span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <div className="email">{data[0].email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
