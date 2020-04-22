import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Users} />
				<Route path="/places/new" component={NewPlace} />
			</Switch>
		</Router>
	);
};

export default App;
