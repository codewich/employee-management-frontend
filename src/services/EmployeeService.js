import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://149.28.78.47:8080/api/v1/employees";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+`/${id}`)
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL+`/${employeeId}`, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL+`/${employeeId}`);
    }
}

export default new EmployeeService()