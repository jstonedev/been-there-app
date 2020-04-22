import React from "react";
import "./usersList.css";
import UserItem from "../user-item/UserItem";

const UsersList = ({ users }) => {
	if (users.length === 0) {
		return (
			<div className="center">
				<h2>No users found...</h2>
			</div>
		);
	}

	return (
		<ul className="users-list">
			{users.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					image={user.image}
					name={user.name}
					placeCount={user.places}
				/>
			))}
		</ul>
	);
};

export default UsersList;
