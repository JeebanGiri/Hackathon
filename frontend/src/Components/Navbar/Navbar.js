import { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from './Logo'

const Navbar = () => {
  const [click, setclick] = useState(true);

  const handleClick = () => {
    setclick(!click);
  };

  let navigate = useNavigate()
  return (
    <nav>
      <NavLink to="#" className="logo-container">
        <Logo/>
      </NavLink>

      <div>
        <ul id="navbar" className={click ? "#navbar active" : "#navbar"} >
          <li>
            <NavLink to="/" exact="true" activeClassName="active">
                Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Challenges" activeClassName="active" onClick={()=> navigate ='/Challenges'}>Challenges</NavLink>
          </li>
          <li>
            <NavLink to="/Blog" onClick={()=>navigate='/Blog'}> Create Blog</NavLink>
          </li>
          <li>
            <NavLink to="/ViewBlog" onClick={()=>navigate='/ViewBlog'}>Posts</NavLink>
          </li>
          <li>
            <NavLink to="/ChoosingPage" onClick={()=>navigate='/ChoosingPage'}>Account</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;