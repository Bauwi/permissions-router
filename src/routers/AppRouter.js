import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import PublicRoute from "./PublicRoute";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

import StepRoute from "./Steps/StepRoute";

//Custom permission routes
import Level0 from "./Private/Level0";
import Level1 from "./Private/Level1";
import Level2 from "./Private/Level2";
import Level3 from "./Private/Level3";
import Level4 from "./Private/Level4";

import ConfirmEmail from "../components/ConfirmEmail";

//Employee components
import EmployeeHome from "../components/Employee/Home";
import Activity from "../components/Employee/Activity";
import Practice from "../components/Employee/Practice";
import Profile from "../components/Employee/Profile";

//Provider components
import ProviderHome from "../components/Provider/Home";

//Admin components
import Level3Component from "../components/Levels/Level3";

//Super Admin components
import Level4Component from "../components/Levels/Level4";

//Steps
import StepEmployee0 from "../components/Steps/Step0Employee";
import StepEmployee1 from "../components/Steps/Step1Employee";
import StepEmployee2 from "../components/Steps/Step2Employee";

import StepProvider0 from "../components/Steps/StepProvider0";
import StepProvider1 from "../components/Steps/StepProvider1";
import StepProvider2 from "../components/Steps/StepProvider2";
import StepProvider3 from "../components/Steps/StepProvider3";

import NotFoundPage from "../components/NotFoundPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        {/*****************************************************************/
        /*****************************************************************/
        /****************** ***** PUBLIC ROUTES ******** *****************/}
        <PublicRoute path="/" component={Home} exact />
        <PublicRoute path="/login" component={Login} />
        {/*****************************************************************/
        /*****************************************************************/
        /***************** ***** EMPLOYEE STEPS ******** *****************/}
        <StepRoute path="/steps/employee/0" component={StepEmployee0} />
        <StepRoute path="/steps/employee/1" component={StepEmployee1} />
        <StepRoute path="/steps/employee/2" component={StepEmployee2} />
        {/*****************************************************************/
        /*****************************************************************/
        /***************** ***** PROVIDER STEPS ******** *****************/}
        <StepRoute path="/steps/provider/0" component={StepProvider0} />
        <StepRoute path="/steps/provider/1" component={StepProvider1} />
        <StepRoute path="/steps/provider/2" component={StepProvider2} />
        <StepRoute path="/steps/provider/3" component={StepProvider3} />
        {/*****************************************************************/
        /*****************************************************************/
        /***************** ***** CONFIRM EMAIL ******** ******************/}
        <Level0 path="/confirm-email" component={ConfirmEmail} />
        {/*****************************************************************/
        /*****************************************************************/
        /***************** ***** EMPLOYEE ROUTES ******** ****************/}
        <Level1 path="/employee" component={EmployeeHome} exact />
        <Level1
          path="/app/employee/activities/:activityId"
          component={Activity}
          exact
        />
        <Level1
          path="/app/employee/activities/:activityId/practices/:practiceId"
          component={Practice}
          exact
        />
        <Level1 path="/app/employee/profile" component={Profile} />
        {/*****************************************************************/
        /*****************************************************************/
        /***************** ***** PROVIDER ROUTES ******** ****************/}
        <Level2 path="/provider" component={ProviderHome} />
        {/*****************************************************************/
        /*****************************************************************/
        /****************** ***** ADMIN ROUTES ******** ******************/}
        <Level3 path="/level3" component={Level3Component} />
        {/*****************************************************************/
        /*****************************************************************/
        /*************** ***** SUPER ADMIN ROUTES ******** ***************/}
        <Level4 path="/level4" component={Level4Component} />
        {/*****************************************************************/
        /*****************************************************************/
        /***************** ***** NOT FOUND PAGE ******** *****************/}
        <Route component={NotFoundPage} />
        {/*****************************************************************/
        /*****************************************************************/}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
