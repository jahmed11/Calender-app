import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import MyCalendar from "./containers/calender/calendar";
import Login from "./containers/login/login";
import Signup from "./containers/signup/signup";
import AddEvent from "./containers/addEvent/addEvent";
import { Header, NAV, Ul } from "./styled-component/styledComponnets";
import * as actionCreator from "./store/actions/authActions";
import * as actionCreators from "./store/actions/calenderActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo && userInfo.token) {
      dispatch(actionCreator.getUserCredentials(userInfo.id, userInfo.token));
      dispatch(actionCreators.getEvents(userInfo.id));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Header>
          <NAV>
            <Ul>
              <NavLink exact to="/">
                Login
              </NavLink>
              <NavLink exact to="/calendar">
                Calendar
              </NavLink>
              <NavLink exact to="/newevent">
                Add Event
              </NavLink>
            </Ul>
          </NAV>
        </Header>
        <Switch>
          <Route path="/calendar" component={MyCalendar} />
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/newevent" component={AddEvent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
