import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <nav className='h-48 bg-nav bg-contain bg-repeat pt-4'>
      <ul className='flex flex-wrap justify-center py-10 md:gap-x-10'>
        <li>
          <Link to='/' className='nav-item'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/planets' className='nav-item'>
            Planets
          </Link>
        </li>
        <li>
          <Link to='/people' className='nav-item'>
            People
          </Link>
        </li>
      </ul>
    </nav>
  )
}
