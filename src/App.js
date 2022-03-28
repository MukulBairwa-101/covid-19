import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNavbar from "./Components/Wrapper/SideNavbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Login from "./Components/pages/Login";
import Signupform from "./Components/pages/Signupform"
import Aftersignuplogin from "./Components/pages/aftersignuplogin";
import Header from "./Components/Wrapper/Header"
function App() {
  return (
    <div className="App">  
  
      <Router>
      <Header /> 
      <SideNavbar />
          <Switch>
         
        
          <Route  exact path ="/" component={Home} />
          <Route  exact path ="/about" component={About} />
          <Route  exact path ="/login" component={Login} />
          <Route  exact path ="/signupform" component={Signupform} />
          <Route  exact path ="/aftersignuplogin" component={Aftersignuplogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
