import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/main-navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

const App = () => {
	return (
		<Router>
			<MainNavigation />
			<main>
				<Switch>
					<Route exact path="/" component={Users} />
					<Route exact path="/:userId/places" component={UserPlaces} />
					<Route exact path="/places/new" component={NewPlace} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
