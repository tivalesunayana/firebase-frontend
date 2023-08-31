import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
      <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {/* <li>
          <Link to="/regi">Registration</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li> */}
       
      </ul>
    </div>
  );
};
export default Navbar;