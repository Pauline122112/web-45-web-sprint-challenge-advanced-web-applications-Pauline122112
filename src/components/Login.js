import React, { useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from "react-router";

//Form containing a username and password field.

const initialValues = {
	username: "Lambda",
	password: "School",
};

// Post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route

const Login = () => {
	const { push } = useHistory();

	//State necessary for form functioning.

	const [formValues, setFormValues] = useState(initialValues);
	const [error, setError] = useState();

	const handleChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	// If either the username or password is not entered,
	const handleSubmit = (e) => {
		e.preventDefault();

		if (formValues.username !== "Lambda" || formValues.password !== "School") {
			setError("Username or Password not valid");
		}
	};

	//If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage('/protected') route.

	axiosWithAuth()
		.post("/api/login", formValues)
		.then((res) => {
			console.log("Login post works", res);
			localStorage.setItem("token", res.data.payload);
			push("/protected");
		})
		.catch((err) => {
			console.log({ err });
		});

	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>
			<div data-testid="loginForm" className="login-form">
				<h2>Enter at your own risk</h2>

				<form onSubmit={handleSubmit}>
					<label htmlFor="username">Username</label>

					<input
						type="text"
						data-testid="username"
						name="username"
						id="username"
						value={formValues.username}
						onChange={handleChange}
					/>
					<label htmlFor="password">Password</label>

					{/* USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password */}

					<input
						id="password"
						data-testid="password"
						name="password"
						type="password"
						value={formValues.password}
						onChange={handleChange}
					/>
					<button>Log in</button>
				</form>
			</div>

			{/* ERROR p tag contains the id="error" */}

			<p data-testid="errorMessage" className="error">
				{error}
			</p>
		</div>
	);
};

export default Login;
