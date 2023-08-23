import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import baseUrl from "./baseUrl";
import axios from "axios";

const Employee = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleDelete = (id)=>{
    axios
      .delete(`${baseUrl}/delete/`+id)
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get(`${baseUrl}/getEmployees`)
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
          // console.log(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-6 py-4">
      <div className="flex justify-center">
        <div className="font-semibold">Employee List</div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/create"
          type="button"
          className="focus:outline-none mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-2 py-2 mr-2 mb-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Employee
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="relative lg:w-11/12 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name 
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Salary
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((emp, i) => {
                return (
                  <tr
                    key={i}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded-full"
                        src={`${baseUrl}/images/${emp.image}`}
                        alt="image"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">{emp.name}</div>
                        <div className="font-normal text-gray-500">{emp.email}</div>
                      </div>
                    </th>

                    <td className="px-6 py-4">
                      <div className="flex items-center">{emp.address}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">{emp.salary}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        to={`/editemployee/${emp.id}`} 
                        className="font-medium pr-4 text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={e=>handleDelete(emp.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
