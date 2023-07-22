type Employee = {
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

type State = {
    name: string,
    abbreviation: string
}

type DataRow = Employee

type EmployeeListType = {
    employeesList: Array<Employee>
}

interface GlobalState {
    employees: EmployeeListType
}

interface ExpandableData {
    data: Employee
}

interface Props {
    filterText: string,
    onFilter: (e: { currentTarget: { value: string } }) => void,
    onClear: () => void,
}

export {Employee, State, DataRow, EmployeeListType, GlobalState, ExpandableData, Props}