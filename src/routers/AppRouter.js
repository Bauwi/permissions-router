import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import styled from "styled-components";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
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

//Transitions
import RouteTransitionner from "./transitions/RouteTransitionner";

//User components
import UserHome from "../components/User/Home";
import Activities from "../components/User/Activities/Activities";
import Activity from "../components/User/Activity";
import UserPractices from "../components/User/Practices/UserPractices/UserPractices";
import OpenPractices from "../components/User/Practices/OpenPractices/OpenPractices";
import Practice from "../components/User/Practices/Practice/Practice";
import Profile from "../components/User/Account/Profile/Profile";
import FavoriteActivities from "../components/User/Account/FavoriteActivities/FavoriteActivities";
import History from "../components/User/Account/History/History";
import Payment from "../components/User/Account/Payment/Payment";
import Financement from "../components/User/Account/Financement/Financement";
import Notifications from "../components/User/Account/Notifications/Notifications";
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

import Transitions from "./transitions";

const UserWrapper = styled.div`
  display: flex;
`;
const Perspective = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1200px;
`;

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />

      <Switch>
        <RouteTransitionner>
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

          <UserRoute path="/user" component={UserHome} exact />
          <UserRoute path="/app/user/activities" component={Activities} exact />
          <UserRoute
            path="/app/user/activities/:id"
            component={Activity}
            exact
          />
          <UserRoute
            path="/app/user/activities/:id/practices/:practiceId"
            component={Practice}
            exact
          />
          <UserRoute
            path="/app/user/activities/:id/practices/create"
            component={Create}
          />
          <UserRoute
            path="/app/user/practices"
            component={UserPractices}
            exact
          />
          <UserRoute
            path="/app/user/practices/open"
            component={OpenPractices}
            exact
          />
          <UserRoute path="/app/user/account/profile" component={Profile} />
          <UserRoute
            path="/app/user/account/activities"
            component={FavoriteActivities}
          />
          <UserRoute path="/app/user/account/history" component={History} />
          <UserRoute path="/app/user/account/Payment" component={Payment} />
          <UserRoute
            path="/app/user/account/financement"
            component={Financement}
          />
          <UserRoute
            path="/app/user/account/notification"
            component={Notifications}
          />
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
        </RouteTransitionner>
      </Switch>
    </div>
  </Router>
  //   <Router history={history}>
  //   <Route
  //     render={({ location }) => (
  //       <Perspective>
  //         <Transitions pageKey={location.key} {...location.state}>
  //           <Switch>
  //             {/*****************************************************************/
  //             /****************** ***** PUBLIC ROUTES ******** *****************/}
  //             <PublicRoute path="/" component={Home} exact />
  //             <PublicRoute path="/login" component={Login} />

  //             {/*****************************************************************/
  //             /***************** ***** EMPLOYEE STEPS ******** *****************/}
  //             <StepRoute path="/steps/user/0" component={StepUser0} />
  //             <StepRoute path="/steps/user/1" component={StepUser1} />
  //             <StepRoute path="/steps/user/2" component={StepUser2} />

  //             {/*****************************************************************/
  //             /***************** ***** PROVIDER STEPS ******** *****************/}
  //             <StepRoute path="/steps/provider/0" component={StepProvider0} />
  //             <StepRoute path="/steps/provider/1" component={StepProvider1} />
  //             <StepRoute path="/steps/provider/2" component={StepProvider2} />
  //             <StepRoute path="/steps/provider/3" component={StepProvider3} />

  //             {/*****************************************************************/
  //             /***************** ***** CONFIRM EMAIL ******** ******************/}
  //             <PrivateRoute path="/confirm-email" component={ConfirmEmail} />

  //             {/*****************************************************************/
  //             /***************** ***** EMPLOYEE ROUTES ******** ****************/}

  //             <UserRoute path="/user" component={UserHome} exact />
  //             <UserRoute
  //               path="/app/user/activities"
  //               component={Activities}
  //               exact
  //             />
  //             <UserRoute
  //               path="/app/user/activities/:id"
  //               component={Activity}
  //               exact
  //             />
  //             <UserRoute
  //               path="/app/user/activities/:id/practices/:practiceId"
  //               component={Practice}
  //               exact
  //             />
  //             <UserRoute
  //               path="/app/user/activities/:id/practices/create"
  //               component={Create}
  //             />
  //             <UserRoute
  //               path="/app/user/practices"
  //               component={UserPractices}
  //               exact
  //             />
  //             <UserRoute
  //               path="/app/user/practices/open"
  //               component={OpenPractices}
  //               exact
  //             />
  //             <UserRoute path="/app/user/account/profile" component={Profile} />
  //             <UserRoute
  //               path="/app/user/account/activities"
  //               component={FavoriteActivities}
  //             />
  //             <UserRoute path="/app/user/account/history" component={History} />
  //             <UserRoute path="/app/user/account/Payment" component={Payment} />
  //             <UserRoute
  //               path="/app/user/account/financement"
  //               component={Financement}
  //             />
  //             <UserRoute
  //               path="/app/user/account/notification"
  //               component={Notifications}
  //             />

  //             {/*****************************************************************/
  //             /***************** ***** PROVIDER ROUTES ******** ****************/}
  //             <ProviderRoute path="/provider" component={ProviderHome} />

  //             {/*****************************************************************/
  //             /****************** ***** ADMIN ROUTES ******** ******************/}
  //             <CompanyRoute path="/app/company" component={CompanyHome} />

  //             {/*****************************************************************/
  //             /*************** ***** SUPER ADMIN ROUTES ******** ***************/}
  //             <AdminRoute path="/app/admin" component={AdminHome} />

  //             {/*****************************************************************/
  //             /***************** ***** NOT FOUND PAGE ******** *****************/}
  //             <Route component={NotFoundPage} />

  //             {/*****************************************************************/
  //             /*****************************************************************/}
  //           </Switch>
  //         </Transitions>
  //       </Perspective>
  //     )}
  //   />
  // </Router>
);

export default AppRouter;
