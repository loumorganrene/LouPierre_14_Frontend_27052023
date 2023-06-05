import { useSelector } from 'react-redux'
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
  const {
    employeesList,
  } = useSelector((state: { employees: { employeesList: Array<Employee>, isLoading: boolean } }) => state.employees)

  return (
    <main>
      <h2>Current Employees</h2>
      {employeesList.map((employee) => <p key={employee.id}>{employee.first_name}</p>)}
    </main>
  )
}

export default EmployeeList