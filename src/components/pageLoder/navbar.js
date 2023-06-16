import { Link } from "react-router-dom";
import routesMap from "../../routeControl/userRoutMap";

function Navbar(){
    return <>
    <nav className="bg-primary navbar navbar-expand-lg navbar-dark primary-color">
      <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={routesMap.HOME.path} style={{color:'white'}}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routesMap.SIGNUP.path} style={{color:'white'}}>
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={routesMap.LOGIN.path} style={{color:'white'}}>
              Login
            </Link>
          </li>
        </ul>
        <form className="form-inline">
          <div className="md-form my-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>
      </div>
    </nav>
  </>
  
}
export default Navbar;