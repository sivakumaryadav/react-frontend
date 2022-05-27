import React, { Component } from 'react';
import service from '../services/service';

class EmployeeComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName : "",
            lastName : "",
            email : ""
        }
        this.changeEmailHolder = this.changeEmailHolder.bind(this);
        this.changeFirstNameHolder = this.changeFirstNameHolder.bind(this);
        this.changeLastNameHolder = this.changeLastNameHolder.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        } else {
            service.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email
                })
            })
        }
    }

    changeFirstNameHolder = (event) =>{
        this.setState({firstName: event.target.value})
    }
    changeLastNameHolder = (event) => {
        this.setState({lastName: event.target.value})
    }
    changeEmailHolder = (event) => {
        this.setState({email: event.target.value})
    }
    saveEmployee = (e) =>{
        e.preventDefault();
        let employee;
        if (this.state.id === '_add') {
            employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        } else {
            employee = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        }
        console.log('employee => ' +JSON.stringify(employee));
        if (this.state.id === '_add') {
            service.saveEmployee(employee).then(res =>{
                this.props.history.push('/employees')
            })
        } else {
            service.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees')
            })
        }
    }
    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if (this.state.id === '_add') {
            return <h3 className = "text-center">Add Employee</h3>
        } else {
            return <h3 className = "text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>First Name : </label>
                                        <input placeholder = "First Name" name = "firstName" className = "form-control"  
                                            value = {this.state.firstName} onChange = {this.changeFirstNameHolder}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Last Name : </label>
                                        <input placeholder = "Last Name" name = "lastName" className = "form-control"
                                            value= {this.state.lastName} onChange = {this.changeLastNameHolder} />
                                    </div>
                                    <div>
                                        <label> Email : </label>
                                        <input placeholder = "Email" name = "email" className = "form-control"
                                            value = {this.state.email} onChange = {this.changeEmailHolder} />
                                    </div>
                                    <button className = "btn btn-success" onClick = {this.saveEmployee}>Save</button>
                                    <button className = "bt btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeComponent;