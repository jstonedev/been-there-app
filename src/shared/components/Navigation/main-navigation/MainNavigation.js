import React, { Fragment } from "react";
import "./mainNavigation.css";
import { Link } from "react-router-dom";
import MainHeader from "../main-header/MainHeader";
import NavLinks from "../nav-links/NavLinks";
import SideDrawer from "../side-drawer/SideDrawer";

const MainNavigation = (props) => {
	return (
		<Fragment>
			<SideDrawer>
				<nav className="main-navigation__drawer-nav">
					<NavLinks />
				</nav>
			</SideDrawer>
			<MainHeader>
				<button className="main-navigation__menu-btn">
					<span />
					<span />
					<span />
				</button>
				<h1 className="main-navigation__title">
					<Link to="/">YourPlaces</Link>
				</h1>
				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
			</MainHeader>
		</Fragment>
	);
};

export default MainNavigation;
