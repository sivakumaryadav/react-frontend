import axios from 'axios';

const API_URL = "http://localhost:9090/api/v1"

class Service {

    findEmployees(){
        return axios.get(API_URL);
    }

    saveEmployee(employee){
        console.log("save method employee => " + JSON.stringify(employee));
        return axios.post(API_URL, employee);
    }

    updateEmployee(employee, id){
        console.log("update method employee => " + JSON.stringify(employee));
        return axios.put(API_URL + '/' + id, employee);
    }

    getEmployeeById(id){
        console.log("Get method employeeId => " +JSON.stringify(id));
        return axios.get(API_URL + '/' + id);
    }

    deleteEmployee(id){
        console.log("delete method employeeId => " +JSON.stringify(id));
        return axios.delete(API_URL + '/' +  id);
    }
}

export default new Service()