import React from 'react'
import { Link } from 'react-router-dom'

const Employee = () => {
  return (
    <div className='px-6 py-4'>
      <div className="flex justify-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/create" type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add Employee</Link>

    </div>
  )
}

export default Employee
