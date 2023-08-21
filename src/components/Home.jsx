import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="p-3 flex items-center justify-center justify-content-around">
        <div className="px-3 mr-5 mt-6 rounded md:w-64 pt-2 pb-3 border shadow-sm w-36">
          <div className="text-center pb-1">
            <p>Admin</p>
          </div>
          <hr />
          <div className="">
            <p>Total:{}</p>
          </div>
        </div>
        <div className="px-3 mr-5 mt-6 rounded md:w-64 pt-2 pb-3 border shadow-sm w-36">
          <div className="text-center pb-1">
            <p>Employee</p>
          </div>
          <hr />
          <div className="">
            <p>Total:{}</p>
          </div>
        </div>
        <div className="px-3 pt-2 mt-6 rounded md:w-64 pb-3 border shadow-sm w-36">
          <div className="text-center pb-1">
            <p>Salary</p>
          </div>
          <hr />
          <div className="">
            <p>Total:{}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 px-10 pt-3">
        {/* {list of admins} */}
        <p>List of Admins</p>
        <table className='table'>
          <thead>
            <th>Email</th>
            <th>Action</th>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
