import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../src/components/Login/index.js";
import OtpLogin from "./components/otpLogin/index.js";
import restimonials from "./components/restaurents/restaurentrender.js";

function APP(){
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/otplogin" exact component={OtpLogin} />
        <Route path="/restaurents" exact component={restimonials} />
      </Switch>
        
    </Router>
    );
};

export default APP;