import React from "react";
import "./userList.css";
import UserItem from "../user-item/UserItem";

const UserList = ({ users }) => {
	if (users.length === 0) {
		return (
			<div className="center">
				<h2>No users found...</h2>
			</div>
		);
	}

	return (
		<ul>
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

export default UserList;
