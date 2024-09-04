import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom"; 
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfieSettings";
function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul style={{listStyle:"none"}}>
          <li> <link to="details">Profile Details</link> </li>
          <li> <link to="settings">Profile settings</link> </li>
        </ul>
     </nav>
     <Outlet />

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <Link to="/">Home</Link>

       
    </div>
    );
}

export default Profile;
