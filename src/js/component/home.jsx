import React from "react";
import TodoContainer from "./TodoContainer.jsx";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<h1>todos</h1>
			<TodoContainer />
		</div>
	);
};

export default Home;