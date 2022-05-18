import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import RequireAdmin from "./components/Auth/RequireAdmin/RequireAdmin";
import RequireAuth from "./components/Auth/RequireAuth/RequireAuth";
import About from "./components/pages/About/About";
import Appointment from "./components/pages/Appointment/Appointment";
import AllUsers from "./components/pages/Dashboard/AllUsers";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import MyAppointment from "./components/pages/Dashboard/MyAppointment";
import MyReviews from "./components/pages/Dashboard/MyReviews";
import Home from "./components/pages/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
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
              <Appointment/>
            </RequireAuth>
          }></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
          }>
            <Route index element={<MyAppointment/>}></Route>
            <Route path="review" element={<MyReviews/>}></Route>
            <Route path="all-users" element={<RequireAdmin><AllUsers/></RequireAdmin>}></Route>
          </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/sign-up" element={<Register></Register>}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
