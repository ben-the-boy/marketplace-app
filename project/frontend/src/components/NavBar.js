import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="navlink"> Home </NavLink>
      <NavLink to="/items" className="navlink"> Browse Items </NavLink>
      <NavLink to="/items/new" className="navlink"> Add Item </NavLink>
    </div>
  );
};

export default NavBar;
