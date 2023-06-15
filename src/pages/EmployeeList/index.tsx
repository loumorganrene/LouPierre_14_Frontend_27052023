import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Employee } from "../../app/data/employees_list"
import DataTable from 'react-data-table-component'
import columns from '../../components/DataTable/Columns'
import FilterComponent from '../../components/DataTable/Filtering'
import '../EmployeeList/EmployeeList.scss'

function EmployeeList() {

  const { employeesList } = useSelector(
    (state: { employees: { employeesList: Array<Employee> } }) => state.employees
  )
  console.log(employeesList)

  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = employeesList.filter(
    item =>
      item.last_name && item.last_name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.first_name && item.first_name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.adress_city && item.adress_city.toLowerCase().includes(filterText.toLowerCase())
    ,
  )

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        filterText={filterText}
        onFilter={(e) => setFilterText(e.currentTarget.value)}
        onClear={handleClear}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <main>
      <h2>Current Employees</h2>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
      />
      <footer>
        <Link to='/'>Home</Link>
      </footer>
    </main>
  )
}

export default EmployeeList