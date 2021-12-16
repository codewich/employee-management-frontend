import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class AddOrEditEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id, firstName: '', lastName: '', emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount() {
        if (this.state.id != "-1") {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                });
            })
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }
    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value})
    }

    saveEmployee = (event) => {
        event.preventDefault();
        let employee = {
            firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId
        };
        if (this.state.id == "-1") {
            EmployeeService.addEmployee(employee).then(res => {
                this.props.history.push('/employees')
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    back() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id == -1) {
            return <h3 className={"text-center"}> Add Employee </h3>
        } else {
            return <h3 className={"text-center"}> Edit Employee </h3>
        }
    }

    render() {
        return (
            <div>
                <br/>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"card col-md-6 offset-md-3 offset-md-3"}>
                            {this.getTitle()}
                            <div className={"card-body"}>
                                <form>
                                    <div className={"form-group"}>
                                        <label> First Name: </label>
                                        <input className={"form-control"} placeholder={"First Name"}
                                               name={"firstName"}
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label> Last Name: </label>
                                        <input className={"form-control"} placeholder={"Last Name"}
                                               name={"lastName"}
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label> Email Id: </label>
                                        <input className={"form-control"} placeholder={"Email Address"} name={"emailId"}
                                               value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <button className={"btn btn-success"} onClick={this.saveEmployee}>Save</button>
                                    <button className={"btn btn-danger"} style={{marginLeft: "10px"}}
                                            onClick={this.back}>Back
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default AddOrEditEmployeeComponent;