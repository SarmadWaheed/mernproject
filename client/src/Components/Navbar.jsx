import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

 export const Navbar=() =>{
  
    const {isloggedin} =useAuth();
    console.log("value" ,isloggedin);
    const navigate = useNavigate();


    const handleButtonClick = () => {
      // Check if the user is logged in
      if (isloggedin) {
       
        navigate('/about');
      } else {
       
        navigate('/login');
      }
    };
    

    

   
    return(
    <>

    <div className="container">

        <div className="logo-brand">
          <NavLink to="/">          Malik website              </NavLink>
        </div>
            
            <nav>
            <ul>

                <li>
                    <NavLink to="/">  Home         </NavLink>
                </li>

                <li>
                    <NavLink to="/about" onClick={handleButtonClick}>  About       </NavLink>
                </li>

                {isloggedin ? (
              <li>
                <NavLink to="/services">
                  Services
                </NavLink>
              </li>
            ) : null}
                <li>
                    <NavLink to="/contact">  Contact       </NavLink>
                </li>
                

              {isloggedin ?  <li>
                    <NavLink to="/logout">  Logout        </NavLink>
                </li>
                : <>
                 <li>
                    <NavLink to="/register">  Register        </NavLink>
                </li>
                <li>
                    <NavLink to="/login">  Login        </NavLink>
                </li>
 
                
                </>
            
            }
                

               



            </ul>

            </nav>


    </div>


    
    
    
    
    
    
    </>
    
    );





};