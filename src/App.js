import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent.";
import FooterComponent from "./components/FooterComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

function App() {
    return (<div>
        <Router>
            <div>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path={"/"} exact component={ListEmployeeComponent}/>
                        <Route path={"/employees"} component={ListEmployeeComponent}/>
                        <Route path={"/add-employee"} component={AddEmployeeComponent}/>
                        <Route path={"/update-employee/:id"} component={UpdateEmployeeComponent}/>
                    </Switch>
                </div>
                <FooterComponent/>
            </div>
        </Router>
    </div>);
}

export default App;
