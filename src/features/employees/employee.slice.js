import { createSlice } from "@reduxjs/toolkit"
import { employeesList } from '../../app/data/employees_list'

const initialState = {
    employeesList: employeesList,
    isLoading: true
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
})

export default employeesSlice.reducer