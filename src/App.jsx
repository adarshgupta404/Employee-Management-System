import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const Dashboard = lazy(() => import('./components/Dashboard'))
const Employee = lazy(() => import('./components/Employee'))
const Home = lazy(() => import('./components/Home'))
const Profile = lazy(() => import('./components/Profile'))
const AddEmployee = lazy(() => import('./components/AddEmployee'))
const EditEmployee = lazy(() => import('./components/EditEmployee'))
const LoginPage = lazy(() => import('./components/loginPage'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div className="w-screen h-screen flex justify-center items-center"><div>Please Wait...</div></div>}>
              <Dashboard />
            </Suspense>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<AddEmployee />} />
          <Route path="/editemployee/:id" element={<EditEmployee />} />
        </Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Please Wait...</div>}>
              <LoginPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
