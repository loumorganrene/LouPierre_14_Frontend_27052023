const columns = [
    {
        name: 'First Name',
        selector: (row: { first_name: string }) => row.first_name,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: (row: { last_name: string }) => row.last_name,
        sortable: true,
    },
    {
        name: 'Start Date',
        selector: (row: { start_date: string }) => row.start_date,
        sortable: true,
    },
    {
        name: 'Department',
        selector: (row: { department: string }) => row.department,
        sortable: true,
    },
    {
        name: 'Date of Birth',
        selector: (row: { birth_date: string }) => row.birth_date,
        sortable: true,
    },
    {
        name: 'Street',
        selector: (row: { adress_street: string }) => row.adress_street,
        sortable: true,
    },
    {
        name: 'City',
        selector: (row: { adress_city: string }) => row.adress_city,
        sortable: true,
    },
    {
        name: 'State',
        selector: (row: { adress_state: string }) => row.adress_state,
        sortable: true,
    },
    {
        name: 'Zip',
        selector: (row: { adress_zip: string }) => row.adress_zip,
        sortable: true,
    },
]

export default columns