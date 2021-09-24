import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/items"> Browse Items </NavLink>
      <NavLink to="/items/new"> Add Item </NavLink>
    </div>
  );
};

export default NavBar;
