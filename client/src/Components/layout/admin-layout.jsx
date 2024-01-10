import {  NavLink, Outlet,Navigate } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { IoMdMail, IoIosBriefcase } from 'react-icons/io';
import { useAuth } from "../../store/auth";

 
export const AdminLayout=()=>{

     const {user,isLoading}=useAuth();
      
     if (isLoading === "true") { 
        
        return <h1>loading...</h1>;
      }

     if(!user.isAdmin){
      return <Navigate to="/" />;
        
     }




return (
<>

<header>
<div className="container">
    
<nav>
 <ul>

<li> <NavLink to="/admin/users"><FaUser />User</NavLink></li>
<li><NavLink to="/admin/contacts"><IoMdMail /> Contact</NavLink></li>
<li><NavLink to="/services"><IoIosBriefcase /> Services</NavLink></li>
<li><NavLink to="/"><FaHome />Home</NavLink></li>
</ul> 

</nav>

</div>
</header>
<Outlet/>
</>)


};