import React from "react";
import { signOut } from "../utilities/signOut";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
	const history = useHistory();
	return (
		<>
			<h1>LogedIn</h1>
			<button
				onCLick={() => {
					try {
						signOut();
						history.push("/");
					} catch (e) {
						alert(e.message);
					}
				}}>
				LogOut
			</button>
		</>
	);
};
