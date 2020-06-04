import React from "react";
import PlaceList from "../components/place-list/PlaceList";

const DUMMY_PLACES = [
	{
		id: "1",
		title: "Empire State Building",
		description: "One of the most famous sky scrapers in the world.",
		imageUrl:
			"https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
		address: "20 W 34th St, New York, NY 10001",
		location: {
			lat: 40.7484405,
			lng: -73.9878584,
		},
		creator: "u1",
	},
	{
		id: "2",
		title: "Washington Monument",
		description:
			"An obelisk on the National Mall. Built to commemorate George Washington.",
		imageUrl:
			"https://images.pexels.com/photos/208766/pexels-photo-208766.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
		address: "2 15th St NW, Washington, DC 20024",
		location: {
			lat: 40.7484405,
			lng: -73.9878584,
		},
		creator: "u1",
	},
];

const UserPlaces = () => {
	return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
