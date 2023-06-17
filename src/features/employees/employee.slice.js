import { createSlice } from "@reduxjs/toolkit"
import { employeesList } from '../../app/data/employees_list'
import { createEmployee } from "../../utils/utils"

const initialState = {
    employeesList: employeesList,
    isLoading: true
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            const newEmployee = createEmployee(action.payload)
            state.employeesList.push(newEmployee)
            // condition  
        },
    },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer


