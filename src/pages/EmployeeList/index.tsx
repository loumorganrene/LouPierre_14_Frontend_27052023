import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { GlobalState } from "../.."
import DataTable from "react-data-table-component"
import columns from "../../components/DataTable/Columns"
import FilterComponent from "../../components/DataTable/Filtering"
import ExpandableRowComponent from "../../components/DataTable/ExpandableRow"
import "../EmployeeList/EmployeeList.scss"

function EmployeeList() {

  const { employeesList } = useSelector(
    (state: GlobalState) =>
      state.employees
  )

  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)
  
  /**
   * Filters an array of employee items based on a search text.
   *
   * @param {Array} employeesList - The list of employee items to filter.
   * @param {string} filterText - The search text used to filter the items.
   * @returns {Array} - The filtered array of employee items.
   */
  const filteredItems = employeesList.filter(
    (item) =>
      (item.last_name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.first_name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.adress_city.toLowerCase().includes(filterText.toLowerCase()))
  )

  const subHeaderComponentMemo = useMemo(() => {
    /**
     * Clears the filter text and resets pagination toggle.
     */
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
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
      <div className="dataTable__wrapper">
        <DataTable
          columns={columns}
          data={filteredItems}
          responsive={true}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderWrap
          subHeaderComponent={subHeaderComponentMemo}
          expandableRows={true}
          expandableRowsComponent={ExpandableRowComponent}
        />
      </div>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </main>
  )
}

export default EmployeeList
