import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import '../EmployeeCreate/EmployeeCreate.scss'

function EmployeeCreate() {
  return (
      <main>
        <h2>Create Employee</h2>
        <Form/>
      <footer>
        <Link to='/'>Home</Link>
      </footer>
      </main>
  )
}

export default EmployeeCreate