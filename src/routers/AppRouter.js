import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import PublicRoute from "./PublicRoute";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

import StepRoute from "./Steps/StepRoute";

//Custom permission routes
import PrivateRoute from "./Private/PrivateRoute";
import EmployeeRoute from "./Private/EmployeeRoute";
import ProviderRoute from "./Private/ProviderRoute";
import CompanyRoute from "./Private/CompanyRoute";
import AdminRoute from "./Private/AdminRoute";

import ConfirmEmail from "../components/ConfirmEmail";

//Employee components
import EmployeeHome from "../components/Employee/Home";
import Activity from "../components/Employee/Activity";
import Practice from "../components/Employee/Practice";
import Profile from "../components/Employee/Profile";

//Provider components
import ProviderHome from "../components/Provider/Home";

//Admin components
import CompanyHome from "../components/Company/Home";

//Super Admin components
import AdminHome from "../components/Admin/Home";

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
        /****************** ***** PUBLIC ROUTES ******** *****************/}
        <PublicRoute path="/" component={Home} exact />
        <PublicRoute path="/login" component={Login} />

        {/*****************************************************************/
        /***************** ***** EMPLOYEE STEPS ******** *****************/}
        <StepRoute path="/steps/employee/0" component={StepEmployee0} />
        <StepRoute path="/steps/employee/1" component={StepEmployee1} />
        <StepRoute path="/steps/employee/2" component={StepEmployee2} />

        {/*****************************************************************/
        /***************** ***** PROVIDER STEPS ******** *****************/}
        <StepRoute path="/steps/provider/0" component={StepProvider0} />
        <StepRoute path="/steps/provider/1" component={StepProvider1} />
        <StepRoute path="/steps/provider/2" component={StepProvider2} />
        <StepRoute path="/steps/provider/3" component={StepProvider3} />

        {/*****************************************************************/
        /***************** ***** CONFIRM EMAIL ******** ******************/}
        <PrivateRoute path="/confirm-email" component={ConfirmEmail} />

        {/*****************************************************************/
        /***************** ***** EMPLOYEE ROUTES ******** ****************/}
        <EmployeeRoute path="/employee" component={EmployeeHome} exact />
        <EmployeeRoute
          path="/app/employee/activities/:activityId"
          component={Activity}
          exact
        />
        <EmployeeRoute
          path="/app/employee/activities/:activityId/practices/:practiceId"
          component={Practice}
          exact
        />
        <EmployeeRoute path="/app/employee/profile" component={Profile} />

        {/*****************************************************************/
        /***************** ***** PROVIDER ROUTES ******** ****************/}
        <ProviderRoute path="/provider" component={ProviderHome} />

        {/*****************************************************************/
        /****************** ***** ADMIN ROUTES ******** ******************/}
        <CompanyRoute path="/app/company" component={CompanyHome} />

        {/*****************************************************************/
        /*************** ***** SUPER ADMIN ROUTES ******** ***************/}
        <AdminRoute path="/app/admin" component={AdminHome} />

        {/*****************************************************************/
        /***************** ***** NOT FOUND PAGE ******** *****************/}
        <Route component={NotFoundPage} />

        {/*****************************************************************/
        /*****************************************************************/}
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
