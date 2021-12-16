import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent.";
import FooterComponent from "./components/FooterComponent";
import AddOrEditEmployeeComponent from "./components/AddOrEditEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
    return (<div>
        <Router>
            <div>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path={"/"} exact component={ListEmployeeComponent}/>
                        <Route path={"/employees"} exact component={ListEmployeeComponent}/>
                        <Route path={"/employees/:id"} component={ViewEmployeeComponent}/>
                        <Route path={"/add-employee/:id"} component={AddOrEditEmployeeComponent}/>
                    </Switch>
                </div>
                <FooterComponent/>
            </div>
        </Router>
    </div>);
}

export default App;
