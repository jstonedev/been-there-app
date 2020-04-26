import React, { Fragment, useState } from "react";
import "./mainNavigation.css";
import { Link } from "react-router-dom";
import MainHeader from "../main-header/MainHeader";
import NavLinks from "../nav-links/NavLinks";
import SideDrawer from "../side-drawer/SideDrawer";
import Backdrop from "../../UIElements/backdrop/Backdrop";

const MainNavigation = (props) => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const openDrawerHandler = () => {
		setDrawerOpen(true);
	};

	const closeDrawerHandler = () => {
		setDrawerOpen(false);
	};

	return (
		<Fragment>
			{drawerOpen && <Backdrop onClick={closeDrawerHandler} />}

			<SideDrawer show={drawerOpen} onClick={closeDrawerHandler}>
				<nav className="main-navigation__drawer-nav">
					<NavLinks />
				</nav>
			</SideDrawer>

			<MainHeader>
				<button
					className="main-navigation__menu-btn"
					onClick={openDrawerHandler}>
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
