import { TableColumn } from "react-data-table-component"
import { Employee } from "../../app/data/employees_list"

type DataRow = Employee

const columns: TableColumn<DataRow>[] = [
    {
        name: 'First Name',
        selector: row => row.first_name,
        sortable: true,
        wrap: true,
        minWidth: 'fit-content',
    },
    {
        name: 'Last Name',
        selector: row => row.last_name,
        sortable: true,
        minWidth: 'fit-content',
    },
    {
        name: 'Start Date',
        selector: row => row.start_date.split('T')[0],
        sortable: true,
        hide: 1024,
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
        wrap: true,
        center: true,
        minWidth: '150px',
    },
    {
        name: 'Date of Birth',
        selector: row => row.birth_date.split('T')[0],
        sortable: true,
        hide: 1024
    },
    {
        name: 'Street',
        selector: row => row.adress_street,
        sortable: true,
        wrap: true,
        center: true,
        minWidth: '150px',
        hide: 1024,
    },
    {
        name: 'City',
        selector: row => row.adress_city,
        sortable: true,
        center: true,
    },
    {
        name: 'State',
        selector: row => row.adress_state,
        sortable: true,
        center: true,
    },
    {
        name: 'Zip',
        selector: row => row.adress_zip,
        sortable: true,
        center: true,
        hide: 1024,
    },
]

export default columns