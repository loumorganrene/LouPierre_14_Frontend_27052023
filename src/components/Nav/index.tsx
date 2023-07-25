import { NavLink, Link } from 'react-router-dom'
import '../Nav/Nav.scss'

function Nav() {
    return (
        <nav className="main-nav">

            <h1>
                <Link to='/' className="main-nav-logo" aria-label='HRnet logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="105" height="39" viewBox="0 0 105 39">
                        <text
                            transform="translate(0 31)"
                            fill="#145495"
                            font-size="32"
                            font-family="Montserrat"
                            font-weight="600"
                        >
                            <tspan x="0" y="0">HR</tspan><tspan y="0" fill="#74b9ff">net</tspan>
                        </text>
                    </svg>
                </Link>
            </h1>

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