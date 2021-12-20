import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import Snacks from "../components/snacks";
import Addstudents from "../screens/add-students";
import Allstudents from "../screens/all-students";
import FreeAPI from '../screens/free-api';
import Login from "../screens/login";
import SignUp from "../screens/signup";
import Studentdetails from "../screens/studentdetails";

export default function Routes() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                <Route path="/studentdetails">
                        <Studentdetails />
                    </Route>
                <Route path="/all-students">
                        <Allstudents />
                    </Route>
                <Route path="/add-students">
                        <Addstudents />
                    </Route>
                <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                <Route path="/snacks">
                        <Snacks />
                    </Route>
                    <Route path="/">
                        <FreeAPI />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}