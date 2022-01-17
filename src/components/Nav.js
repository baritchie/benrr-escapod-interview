import {
    Link
  } from "react-router-dom";
export default function Nav() {
  return(
      <nav className="bg-nav bg-repeat bg-contain h-48 pt-4">
        <ul className="flex gap-x-10 justify-center py-10">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/planets" className="nav-item">Planets</Link>
          </li>
          <li>
            <Link to="/people" className="nav-item">People</Link>
          </li>
        </ul>
      </nav>
  )
}
