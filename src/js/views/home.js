import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { signIn } from "../utilities/signIn";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const Home = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(signIn(email, password));
	const signInClicked = async (email, password) => {
		try {
			await signIn(email, password);
			history.push("/dashboard");
		} catch (e) {
			alert(e.message);
		}
	};
	return (
		<span>
			<div className="sidenav">
				<div className="login-main-text">
					<h2>
						Application
						<br /> Login Page
					</h2>
					<p>Login or register from here to access.</p>
				</div>
			</div>
			<div className="main">
				<div className="col-md-6 col-sm-12">
					<div className="login-form">
						<form>
							<div className="form-group">
								<label>Email</label>
								<input
									type="text"
									className="form-control"
									placeholder="Email"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
							<button
								type="submit"
								className="btn btn-black"
								onClick={e => {
									signInClicked(email, password);
									e.preventDefault();
								}}>
								Login
							</button>
							<button type="submit" className="btn btn-secondary">
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</span>
	);
};
