import React from "react";
import UserList from "../components/users-list/UserList";

const Users = () => {
	const USERS = [
		{
			id: 1,
			name: "Jon Doe",
			image:
				"https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
			places: 4,
		},
	];

	return (
		<div>
			<UserList users={USERS} />
		</div>
	);
};

export default Users;
