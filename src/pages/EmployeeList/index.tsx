import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import columns from '../../components/DataTable'
import '../EmployeeList/EmployeeList.scss'

type Employee = {
  id: number,
  first_name: string,
  last_name: string,
  birth_date: string,
  start_date: string,
  department: string,
  adress_street: string,
  adress_city: string,
  adress_state: string,
  adress_zip: string,
}

function EmployeeList() {

  const { employeesList } = useSelector(
    (state: { employees: { employeesList: Array<Employee> } }) => state.employees
  )
  
  return (
    <main>
      <h2>Current Employees</h2>
        <DataTable
          columns={columns}
          data={employeesList}
          pagination
        />
      <footer>
        <Link to='/'>Home</Link>
      </footer>
    </main>
  )
}

export default EmployeeList