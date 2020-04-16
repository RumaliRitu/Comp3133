import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "/contact";
import Redirect from "./redirect";
export default class Navigation extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/contact">Contact</link>
            </li>
            <li>
              <link to="/about">About</link>
            </li>
            <li>
              <link to="/student">Student:Jim Smith</link>
            </li>
            <li>
              <link to="student">Student:Jane Smith,Student No:50001</link>
            </li>
          </ul>
          <li>
            <link to="redirect">Redirect</link>
          </li>
          <button type="submit" value="handleRedirectClick()">
            Redirect
          </button>
          <switch>
            <route path="/" component={Home} exact />
            <route path="/about" component={About} />
            <route path="/contact" component={Contact} />
            <route
              path="/student/:studentname/:studentno?"
              component={Student}
            />
            <route path="/redirect" component={Redirect} />
            <route component={Error} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}