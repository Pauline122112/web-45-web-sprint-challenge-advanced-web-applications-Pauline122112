import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					Color Picker Sprint Challenge
					<a data-testid="loginButton" href="/login">
						login
					</a>
					<a data-testid="logoutButton" href="/logout">
						logout
					</a>
					<a data-testid="bubblePage" href="/protected">
						Bubbles
					</a>
				</header>

				<Switch>
					<PrivateRoute exact path="/protected" component={BubblePage} />
					<PrivateRoute path="/logout" component={Logout} />
					<Route path="/login" component={Login} />
					<Route path="/" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
