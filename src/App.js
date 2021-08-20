import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

import "./styles.scss";
import BubblePage from "./components/BubblePage";


// Logout button calls the logout endpoint, remove the localStorage Item and redirect to the login page.

function App() {
	const logout = () => {
		localStorage.removeItem("token");
	};

	return (
		<Router>
			<div className="App">
				<header>
					Color Picker Sprint Challenge
					<a
						onClick={logout}
						data-testid="logoutButton"
						href="http://localhost:3000/"
					>
						logout
					</a>
				</header>

				{/* Two routes that link to the Login Component, one for the default path
				'/' and one for the '/login'. */}

				<Switch>
					{/* Render BubblePage (/protected) as a PrivateRoute because it has to hide */}
					<PrivateRoute exact path="/protected" component={BubblePage} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;


//2. 
