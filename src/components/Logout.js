import React, { useEffect } from "react";
import axiosWithAuth from '../helpers/axiosWithAuth'

//create logout information here. 
const Logout = (props) => {
	useEffect(() => {
		axiosWithAuth()
			.post("/logout")
			.then((res) => {
				localStorage.removeItem("token");
				localStorage.removeItem("role", res.data.role);
				localStorage.removeItem("username", res.data.username);
				props.history.push("/login");
			});
	}, [props]);

	return <div></div>;
};

export default Logout;