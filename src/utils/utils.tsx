import { Employee } from ".."
import moment from "moment"

/**
 * Removes duplicates items from an array of strings.
 *
 * @param {Array<string>} array - The array to remove duplicates from.
 * @returns {Array<string>} - The array with duplicates removed.
 */
export function removeDuplicates(array: string[]) {
    return Array.from(new Set(array))
}

/**
 * Creates a new employee object with optional fields set to default values if not provided.
 *
 * @param {Employee} formValue - The form value to create the employee from.
 * @returns {Employee} - The created employee object.
 */
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