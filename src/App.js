import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import RequireAdmin from "./components/Auth/RequireAdmin/RequireAdmin";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import About from "./components/pages/About/About";
import MyAppointment from "./components/pages/Dashboard/Appointment/MyAppointment";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import AddDoctor from "./components/pages/Dashboard/Doctor/AddDoctor";
import ManageDoctor from "./components/pages/Dashboard/Doctor/ManageDoctor";
import MyReviews from "./components/pages/Dashboard/Reviews/MyReviews";
import AllUsers from "./components/pages/Dashboard/Users/AllUsers";
import HomeAppointment from "./components/pages/Home/Appointment/HomeAppointment";
import Home from "./components/pages/Home/Home";
import Navigation from "./components/Shared/Header/Navigation";
import PageNotFound from "./components/Shared/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <MyAppointment></MyAppointment>
            </RequireAuth>
          }></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReviews />}></Route>
          <Route
            path="all-users"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }></Route>
          <Route
            path="add-doctor"
            element={
              <RequireAdmin>
                <AddDoctor/>
              </RequireAdmin>
            }></Route>
          <Route
            path="manage-doctor"
            element={
              <RequireAdmin>
                <ManageDoctor/>
              </RequireAdmin>
            }></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<Register></Register>}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
