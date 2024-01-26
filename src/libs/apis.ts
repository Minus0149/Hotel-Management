import { Room } from "@/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";
export const getFeaturedRoom = async () => {
	const result = await sanityClient.fetch<Room>(
		queries.getFeaturedRoomQuery,
		{},
		{
			next: { revalidate: 1800 },
		}
	);
	return result;
};

export async function getRooms() {
	const result = await sanityClient.fetch<Room[]>(
		queries.getRoomsQuery,
		{},
		{ cache: "no-cache" }
	);
	return result;
}
