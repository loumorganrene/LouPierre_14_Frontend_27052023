import { TableColumn } from "react-data-table-component"
import { DataRow } from "../.."

const columns: TableColumn<DataRow>[] = [
    {
        name: 'First Name',
        selector: row => row.first_name.charAt(0).toUpperCase() + row.first_name.slice(1),
        sortable: true,
        wrap: true,
        minWidth: 'fit-content',
    },
    {
        name: 'Last Name',
        selector: row => row.last_name.charAt(0).toUpperCase() + row.first_name.slice(1),
        sortable: true,
        minWidth: 'fit-content',
    },
    {
        name: 'Start Date',
        selector: row => row.start_date.split('T')[0],
        sortable: true,
        hide: 1200,
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
        hide: 1200
    },
    {
        name: 'Street',
        selector: row => row.adress_street,
        sortable: true,
        wrap: true,
        center: true,
        minWidth: '150px',
        hide: 1200,
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
        hide: 1200,
    },
]

export default columns