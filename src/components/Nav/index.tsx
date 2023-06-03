import HRNetLogo from '../../assets/wealthHealthLogo.jpg'
import { Link } from 'react-router-dom'
import '../Nav/Nav.scss'


function Nav() {

    return (
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={HRNetLogo}
                    alt="HRNet"
                />
                <h1 className="sr-only">HRNet</h1>
            </Link>
            <div>
                <Link to="/employees"
                    className="main-nav-item"
                >
                    <i className="fa-solid fa-users"></i>
                    <span> Employees</span>
                </Link>
                <Link to='/employees/create' className="main-nav-item">
                    <i className="fa-solid fa-user-plus"></i>
                    <span> Add Employee</span>
                </Link>
            </div >
        </nav >
    )
}

export default Nav