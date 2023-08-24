import React, {lazy, Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./components/loginPage";
// import SignupPage from "./components/signupPage";
// import Dashboard from "./components/Dashboard";
// import Employee from "./components/Employee";
// import Profile from "./components/Profile";
// import Home from "./components/Home";
// import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/EditEmployee";
import "./index.css";
const Dashboard = lazy(()=>import('./components/Dashboard'))
const Employee = lazy(()=>import('./components/Employee'))
const Home = lazy(()=>import('./components/Home'))
const Profile = lazy(()=>import('./components/Profile'))
const AddEmployee = lazy(()=>import('./components/AddEmployee'))
const EditEmployee = lazy(()=>import('./components/EditEmployee'))
const LoginPage = lazy(()=>import('./components/loginPage'))
// const SignupPage = lazy(()=>import('./components/signupPage'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div className="w-screen h-screen flex justify-center items-center"><div>Please Wait...</div></div>}><Dashboard /></Suspense>}>
          <Route path="" element={<Home/>}></Route>
          <Suspense fallback={<div className="w-screen h-screen flex justify-center items-center"><div>Please Wait...</div></div>}>
          <Route path="/employee" element={<Employee/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/create" element={<AddEmployee/>}></Route>
          <Route path="/editemployee/:id" element={<EditEmployee/>}></Route>
          </Suspense>
        </Route>
        <Route path="/login" element={<Suspense fallback={<div>Please Wait...</div>}><LoginPage/></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
