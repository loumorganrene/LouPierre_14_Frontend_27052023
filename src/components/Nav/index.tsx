import HRNetLogo from '../../assets/hrnetLogo.svg'
import { NavLink } from 'react-router-dom'
import '../Nav/Nav.scss'

function Nav() {

    return (
        <nav className="main-nav">
            <NavLink to='/' className="main-nav-logo">
                <img
                    width="120px" height="59px"
                    className="main-nav-logo-image"
                    src={HRNetLogo}
                    alt="HRNet"
                />
                <h1 className="sr-only">HRNet</h1>
            </NavLink>

            <ul className='main-nav-links'>
                <li>
                    <NavLink to='/employees' end className={({ isActive }) => (isActive ? 'active' : '')}>
                        <span> Employees</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/employees/create' end className={({ isActive }) => (isActive ? 'active' : '')}>
                        <span> Add Employee</span>
                    </NavLink>
                </li>
            </ul >
        </nav >
    )
}

export default Nav