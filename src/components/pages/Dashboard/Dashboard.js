import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import "./Dashboard.css";


const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <div className="drawer drawer-mobile border-t pt-10">
        <input
          id="dashboard-navigation"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col items-center">
          <h2 className="text-4xl font-medium text-primary mb-14 border-b-2 border-black">
            Dashboard
          </h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="dashboard-navigation"
            className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            <li>
              <Link
                to="/dashboard"
                className="text-accent font-medium focus-within:text-secondary">
                My Appointment{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/review"
                className="text-accent font-medium focus-within:text-secondary">
                Reviews
              </Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link
                    to="/dashboard/all-users"
                    className="text-accent font-medium focus-within:text-secondary">
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add-doctor"
                    className="text-accent font-medium focus-within:text-secondary">
                    Add Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manage-doctor"
                    className="text-accent font-medium focus-within:text-secondary">
                    Manage Doctor
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
