import { Employee } from "../app/data/employees_list"
import moment from "moment"
export function removeDuplicates(array: string[]) {
    return Array.from(new Set(array))
}

export function createEmployee(formValue: Employee) {
    return {
        ...formValue,
        first_name: formValue.first_name ?? "",
        last_name: formValue.last_name ?? "",
        birth_date: moment(formValue.birth_date).format() ?? "",
        start_date: moment(formValue.start_date).format() ?? "",
        department: formValue.department ?? "",
        adress_street: formValue.adress_street ?? "",
        adress_city: formValue.adress_city ?? "",
        adress_state: formValue.adress_state ?? "",
        adress_zip: formValue.adress_zip ?? "",
    }
}