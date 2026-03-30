import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import HomeAdmin from "./pagesAdmin/HomeAdmin";
import CheckComplaint from "./pagesAdmin/CheckComplaint";
import Actioncomplaint from "./pagesAdmin/Actioncomplaint";
import ViewStatus from "./pagesAdmin/ViewStatus";
import ContactMessages from "./pagesAdmin/ContactMessages"

import UserLayout from "./UserLayout";
import AdminLayout from "./AdminLayout";
import Check_Status from "./pages/CheckStatus";
import Complaint from "./pages/Complaint";
import CheckStatus from "./pages/CheckStatus";


function App() {
  return (
    <Router>

      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* USER PAGES */}
        <Route element={<UserLayout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Complaint" element={<Complaint />} />
          <Route path="/CheckStatus" element={<CheckStatus />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          
        </Route>

        {/* ADMIN PAGES */}
        <Route element={<AdminLayout />}>
          <Route path="/HomeAdmin" element={<HomeAdmin />} />
          <Route path="/CheckComplaint" element={<CheckComplaint />} />
          <Route path="/Actioncomplaint" element={<Actioncomplaint />} />
          <Route path="/ViewStatus" element={<ViewStatus />} />
          <Route path="/ContactMessages" element={<ContactMessages />} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;