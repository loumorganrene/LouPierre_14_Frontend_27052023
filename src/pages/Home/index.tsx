import wealthHealthLogo from '../../assets/wealthHealthLogo.svg'
import '../Home/Home.scss'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <h2>Welcome</h2>
      <div className='company-logo'>
        <img src={wealthHealthLogo} width="150px" height="138px" alt='The Wealth Health company logo' />
      </div>
      <fieldset className="homepage-nav-container">
        <legend>What do you want to do ?</legend>
        <Link to="/employees"
          className="main-nav-item"
        >
          <i className="fa-solid fa-users fa-fw fa-xl"></i>
          <span> Check Employees List</span>
        </Link>
        <Link to='/employees/create' className="main-nav-item">
          <i className="fa-solid fa-user-plus fa-fw fa-xl"></i>
          <span> Add New Employee</span>
        </Link>
      </fieldset>
    </main>
  )
}

export default Home