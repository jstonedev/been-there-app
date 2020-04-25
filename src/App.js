import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/main-navigation/MainNavigation";

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route exact path="/" component={Users} />
					<Route path="/places/new" component={NewPlace} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
