import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Employee } from "../../app/data/employees_list";
import DataTable from "react-data-table-component";
import columns from "../../components/DataTable/Columns";
import FilterComponent from "../../components/DataTable/Filtering";
import "../EmployeeList/EmployeeList.scss";

function EmployeeList() {
  const { employeesList } = useSelector(
    (state: { employees: { employeesList: Array<Employee> } }) =>
      state.employees
  )

  const [filterText, setFilterText] = useState("")
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const filteredItems = employeesList.filter(
    (item) =>
      (item.last_name &&
        item.last_name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.first_name &&
        item.first_name.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.adress_city &&
        item.adress_city.toLowerCase().includes(filterText.toLowerCase()))
  )

  const subHeaderComponentMemo = useMemo(() => {
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
    );
  }, [filterText, resetPaginationToggle])

  const ExpandableRowComponent = ({ data }) => <div className="dataTable--rowData">
    <div className="rowData rowData--date">
      <p><span>Birth Date:</span>{data.birth_date.split('T')[0]}</p>
      <p><span>Starting Date:</span>{data.start_date.split('T')[0]}</p>
    </div>
    <div className="rowData rowData--address">
      <p><span>Address:</span>{data.adress_street}, {data.adress_city} {data.adress_state} {data.adress_zip}
      </p>
    </div>
  </div>


  return (
    <main>
      <h2>Current Employees</h2>
      <div className="dataTable__wrapper">
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          expandableRows={true}
          expandableRowsComponent={ExpandableRowComponent}

        />
      </div>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </main>
  );
}

export default EmployeeList;
