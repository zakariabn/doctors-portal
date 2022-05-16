import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
