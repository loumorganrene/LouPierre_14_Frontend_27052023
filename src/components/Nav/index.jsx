import HRNetLogo from '../../assets/img/HRNetLogo.png'
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
                <Link to="/employees_list"
                    className="main-nav-item"
                >
                    <i className="fa fa-sign-out"></i>Employees List
                </Link>
                <Link to='/create_employees' className="main-nav-item">
                    <i className="fa fa-user-circle"></i>Create Employee
                </Link>
            </div >
        </nav >
    )
}

export default Nav