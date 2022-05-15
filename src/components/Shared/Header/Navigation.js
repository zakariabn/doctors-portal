import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "./CustomLink";

const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  function handelLogout() {
    signOut(auth);
    navigate("/home");
  }

  const menuItem = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>

      <li>
        <CustomLink to="/about">About</CustomLink>
      </li>

      <li>
        <CustomLink to="/appointment">Appointment</CustomLink>
      </li>

      <li>
        <CustomLink to="/reviews">Reviews</CustomLink>
      </li>

      <li>
        <CustomLink to="/contact-us">Contact Us</CustomLink>
      </li>

      <li>
        {!user ? (
          <CustomLink to="/login">Login</CustomLink>
        ) : (
          <label htmlFor="logout" className="text-black border border-accent">
            Zakaria
          </label>
        )}
      </li>
    </>
  );

  return (
    <div className="flex justify-center">
      <div className="navbar bg-base-100 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu justify-center menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {/* menu Items*/}
              {menuItem}
            </ul>
          </div>
          <a href="/" className="text-2xl text-black">
            <p className="whitespace-nowrap">Doctors Portal</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu items-center menu-horizontal p-0">
            {/* menu Items*/}
            {menuItem}
          </ul>
        </div>
      </div>

      {/* logout modal */}
      <div className="text-accent">
        <input type="checkbox" id="logout" className="modal-toggle" />
        <label htmlFor="logout" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-lg text-center font-bold">Want to logout</h3>
            <div className="flex justify-center">
              <label
                htmlFor="logout"
                onClick={handelLogout}
                className="btn mt-10 text-accent hover:border-primary hover:bg-transparent hover:text-secondary duration-200">
                Log Out
              </label>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
};

export default Navigation;
