import "./navbar.css"
import { useContext  } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const {user,dispatch}=useContext(AuthContext);
  const navigate =useNavigate()
  
 console.log(user)

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit" ,textDecoration:"none"}}>
        <span className="logo">Hotels</span>
        </Link>
      
      {user?  <div className="navItems">
            <span className="username">Welcome, {user.username}</span>
            <button
              className="navButton"
              onClick={() => {
                dispatch({ type: "LOGOUT" });
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        
          : (  
        <div className="navItems">
          <button className="navButton">Register</button>
          <button onClick={()=>{navigate('/login')}} className="navButton">Login</button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar