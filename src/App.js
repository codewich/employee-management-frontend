import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent.";
import FooterComponent from "./components/FooterComponent";

function App() {
    return (<div>
        <Router>
            <div >
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path={"/"} component={ListEmployeeComponent}/>
                        <Route path={"/employees"} component={ListEmployeeComponent}/>
                        <ListEmployeeComponent/>
                    </Switch>
                </div>
                <FooterComponent/>
            </div>
        </Router>
    </div>);
}

export default App;
