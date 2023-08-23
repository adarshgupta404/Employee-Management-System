import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/signupPage";
// import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import Profile from "./components/Profile";
import Home from "./components/Home";
import "./index.css";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
const LazyDashboard = React.lazy(()=>import('./components/Dashboard'))
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LazyDashboard />}>
          <Route path="" element={<Home/>}></Route>
          <Route path="/employee" element={<Employee/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/create" element={<AddEmployee/>}></Route>
          <Route path="/editemployee/:id" element={<EditEmployee/>}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
