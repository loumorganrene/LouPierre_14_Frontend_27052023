import { NavLink, Link } from 'react-router-dom'
import '../Nav/Nav.scss'

function Nav() {
    return (
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo">
                <h1>HR<span>net</span></h1>
            </Link>

            <ul className='main-nav-links'>
                <li>
                    <NavLink to='/' end className={({ isActive }) => (isActive ? 'active' : '')}>
                        <span> Create Employee</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/employees' className={({ isActive }) => (isActive ? 'active' : '')}>
                        <span> Employees List</span>
                    </NavLink>
                </li>
            </ul >
        </nav >
    )
}

export default Nav