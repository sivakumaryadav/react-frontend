import React, { Component } from 'react';
import service from '../services/service';

class ListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    deleteEmployee(id){
        service.deleteEmployee(id).then((res) => {
            this.setState({
                employees: this.state.employees.filter(employee => employee.id !== id)
            });
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    updateEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }
    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
    componentDidMount(){
        service.findEmployees().then((res) => {
            this.setState({
                employees : res.data
            });
        });
    }

    render() {
        return (
            <div>
                <h2 className = "text-center">Employee List</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.addEmployee}>Add Employee</button>
                </div>
                <div className = "row">
                    <table className = "table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button onClick = {() => this.updateEmployee(employee.id)} className = "btn btn-info">Update</button>
                                            <button onClick = {() => this.deleteEmployee(employee.id)} className = "btn btn-danger">Delete</button>
                                            <button onClick = {() => this.viewEmployee(employee.id)} className = "btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListComponent;