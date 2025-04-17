import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  function logoutHandler() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      <nav className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="" height={32} width={160} loading="lazy"  />
          </NavLink>
        </div>

        <div>
          <ul className="flex justify-evenly items-center gap-3 text-richblack-100">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink>
              <li>About</li>
            </NavLink>
            <NavLink>
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>

        <div className="flex justify-evenly items-center gap-3 text-richblack-100">
          {!isLoggedIn && (
            <NavLink to="/login">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/signup">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Signup</button>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/login" onClick={logoutHandler}>
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Logout</button>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/dashboard">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
