import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">home</NavLink>
      <NavLink to="/experience">experience</NavLink>
      <NavLink to="/merriment">merriment</NavLink>
    </div>
  )
}
