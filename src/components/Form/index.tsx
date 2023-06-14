import { useState } from "react"
import { useSelector } from 'react-redux'
// data
import { Employee } from "../../app/data/employees_list"
import { states } from "../../app/data/states"
import removeDuplicates from "../../utils/utils"
// form with datepicker
import { Controller, useForm } from "react-hook-form"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
//styling
import './Form.scss'

function Form() {

  const { employeesList } = useSelector(
    (state: { employees: { employeesList: Array<Employee> } }) => state.employees
  )

  const departmentsList = removeDuplicates(employeesList
    .map(employee => employee.department)
    .sort(function (a, b) {
      return a > b
    }))

  const { control, register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => {setData(JSON.stringify(data))})}>
      <label htmlFor="firstname">First Name</label>
      <input id="firstname" {...register("first_name")} />
      <label htmlFor="lastname">Last Name</label>
      <input id="lastname" {...register("last_name")} />
      <label htmlFor="birthdate">Date of Birth</label>
      <Controller
        control={control}
        name="birth_date"
        render={({ field }) => (
          <ReactDatePicker
            id="birthdate"
            className="input"
            dateFormat="dd/MM/yyyy"
            onChange={(e) => field.onChange(e)}
            selected={field.value}
          />
        )}
      />
      <label htmlFor="startdate">Start Date</label>
      <Controller
        control={control}
        name="start_date"
        render={({ field }) => (
          <ReactDatePicker
            id="startdate"
            className="input"
            dateFormat="dd/MM/yyyy"
            onChange={(e) => field.onChange(e)}
            selected={field.value}
          />
        )}
      />
      <fieldset className="form-address-container">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input id="street" {...register("adress_street")} />
        <label htmlFor="city">City</label>
        <input id="city" {...register("adress_city")} />
        <label htmlFor="state">State</label>
        <select id="state" {...register("adress_state")}>
          {states.map(
            state => <option key={state.name} value={state.abbreviation}>{state.name}</option>
          )}
        </select>
        <label htmlFor="zip">Zip Code</label>
        <input id="zip" {...register("adress_zip")} />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select id="department" {...register("department")}>
        {departmentsList.map(
          department => <option key={department} value={department}>{department}</option>
        )}
      </select>
      <button type="submit">Save</button>
      <p>{data}</p>
    </form>

  )
}

export default Form