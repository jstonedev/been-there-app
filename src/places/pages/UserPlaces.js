import React from "react";
import { useParams } from "react-router-dom";
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
		creator: "1",
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
		creator: "1",
	},
	{
		id: "3",
		title: "The Colosseum",
		description:
			"The Colosseum or Coliseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the centre of the city of Rome, Italy.",
		imageUrl:
			"https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
		location: {
			lat: 41.890209,
			lng: 12.492231,
		},
		creator: "2",
	},
];

const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
