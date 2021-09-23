import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/items"> Browse Items </NavLink>
    </div>
  );
};

export default NavBar;
