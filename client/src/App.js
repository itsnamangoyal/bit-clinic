import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login.js";
import Register from "./Components/Register/Register";
import Patient from "./Components/Profile/Patient/Patient";
import Header from "./Components/Header/Header"
import Home from "./Pages/Home"
function App() {
  return (
    <React.Fragment>
    <Header/>
      <Home/>
      <div className="safe-space" />
      <Router>
        <Switch>
         
          <Route path="/Login" exact component={Login}></Route>
          <Route path="/Register" exact component={Register}></Route>
          <Route path="/Patient" exact component={Patient}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
