import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../features/employees/employee.slice'

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                isSerializable: Date,
            },
        }),
})