import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import PublicRoute from "./PublicRoute";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

import StepRoute from "./Steps/StepRoute";

//Custom permission routes
import PrivateRoute from "./Private/PrivateRoute";
import UserRoute from "./Private/UserRoute";
import ProviderRoute from "./Private/ProviderRoute";
import CompanyRoute from "./Private/CompanyRoute";
import AdminRoute from "./Private/AdminRoute";

import ConfirmEmail from "../components/ConfirmEmail";

//User components
import UserHome from "../components/User/Home";
import Activity from "../components/User/Activity";
import Practice from "../components/User/Practice";
import Profile from "../components/User/Profile";
import Create from "../components/User/Create/Create";

//Provider components
import ProviderHome from "../components/Provider/Home";

//Admin components
import CompanyHome from "../components/Company/Home";

//Super Admin components
import AdminHome from "../components/Admin/Home";

//Steps
import StepUser0 from "../components/Steps/Step0User";
import StepUser1 from "../components/Steps/Step1User";
import StepUser2 from "../components/Steps/Step2User";

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
        <StepRoute path="/steps/user/0" component={StepUser0} />
        <StepRoute path="/steps/user/1" component={StepUser1} />
        <StepRoute path="/steps/user/2" component={StepUser2} />

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
        <UserRoute
          path="/app/user/activities/:id/practices/create"
          component={Create}
        />
        <UserRoute path="/user" component={UserHome} exact />
        <UserRoute path="/app/user/activities/:id" component={Activity} exact />
        <UserRoute
          path="/app/user/activities/:id/practices/:practiceId"
          component={Practice}
          exact
        />
        <UserRoute path="/app/employee/profile" component={Profile} />

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
