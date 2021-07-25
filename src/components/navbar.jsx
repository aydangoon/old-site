import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="my_navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/fun_stuff">Fun Stuff</NavLink>
    </div>
  )
}
