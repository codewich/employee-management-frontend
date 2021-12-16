import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.match.params.id, firstName: '', lastName: '', emailId: ''
        }

        this.back = this.back.bind(this);
    }

    componentDidMount() {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                });
            })
    }

    back() {
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br/>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"card col-md-6 offset-md-3 offset-md-3"}>
                            <h3 className={"text-center"}> Employee Information </h3>
                            <div className={"card-body"}>
                                <form>
                                    <div className={"form-group"}>
                                        <label> First Name: </label>
                                        <input className={"form-control"} placeholder={"First Name"}
                                               name={"firstName"}
                                               value={this.state.firstName} disabled/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label> Last Name: </label>
                                        <input className={"form-control"} placeholder={"Last Name"}
                                               name={"lastName"}
                                               value={this.state.lastName} disabled/>
                                    </div>
                                    <div className={"form-group"}>
                                        <label> Email Id: </label>
                                        <input className={"form-control"} placeholder={"Email Address"} name={"emailId"}
                                               value={this.state.emailId} disabled/>
                                    </div>
                                    <button className={"btn btn-danger"} style={{marginLeft: "10px"}}
                                            onClick={this.back}>Back
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;