import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    salary: "",
    address: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .put("http://localhost:8000/update/"+id, data)
      .then((res) => navigate("/employee"))
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/get/" + id)
      .then((res) =>{
        console.log(data);
        setData({
          ...data,
          name: res.data.Result[0].name,
          email: res.data.Result[0].email,
          salary: res.data.Result[0].salary,
          address: res.data.Result[0].address,
        })}
      )
      .catch((err) => console.log(err));
  },[]);
  return (
    <div className="p-10 pt-2 font-semibold flex justify-center w-100">
      <form className="md:w-96" onSubmit={handleSubmit} method="post">
        <h3 className="py-2">Edit Employee</h3>
        <div className="mb-6">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={data.name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            onChange={e=>setData({...data, name:e.target.value})}
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter email
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@email.com"
            onChange={e=>setData({...data, email:e.target.value})}
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="salary"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Salary
          </label>
          <input
            type="text"
            id="salary"
            value={data.salary}
            onChange={e => setData({...data, salary : e.target.value})}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div> 
        <div class="mb-6">
          <label
            for="address"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Address
          </label>
          <input
            type="text"
            value={data.address}
            id="address"
            name="address"
            onChange={e=>setData({...data, address:e.target.value})}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white mt-6 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update employee
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
