import React, { useState } from "react"
import axios from 'axios'


const initialValues = {
  username: 'Lambda', 
  password: 'School'
};

const Login = () => {

  const [formValues, setFormValues] = useState(initialValues)
  const [error, setError] = useState();

    

  const handleChange = e => {
    setFormValues({
      initialValues: {
        ...this.formValues.initialValues,
        [e.target.name]: e.target.value
      }
    })
  }
  //ADD SOMETHING
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


const handleSubmit = e => {
  e.preventDefault()

  if (formValues.username !== "Lambda" || formValues.password !== "school")
	{
    setError("Username or Password incorrect.");
  }

  axios.post('http://localhost:5000/api/login', this.state.initialValues)

  .then(res => {
  this.props.history.push('/protected')
  localStorage.setItem("token", res.data.token)
  })
  .catch(err => {
    console.log(err)
  })
}

 
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
							id="username"
							value={formValues.username}
							onChange={handleChange}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							data-testid="password"
							id="password"
							value={initialValues.password}
							onChange={handleChange}
						/>
						<button>Log in</button>
					</form>
				</div>

				<p data-testid="error" className="error">{error}
				</p>
			</div>
		);
    
  
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"