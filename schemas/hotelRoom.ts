import { defineField } from "sanity";

const roomTypes = [
	{ title: "Basic", value: "basic" },
	{ title: "Luxury", value: "luxury" },
	{ title: "Suite", value: "suite" },
];

const icons = [
	"car",
	"plane",
	"key",
	"wifi",
	"briefcase",
	"bath",
	"snowflake",
	"mug-saucer",
	"earth-america",
	"cable-car",
	"passport",
	"door-open",
	"hotel",
	"dice",
	"shower",
	"umbrella-beach",
	"dumbbell",
	"plane-departure",
	"wine-glass",
	"wheelchair",
	"utensils",
	"van-shuttle",
	"tv",
	"tree-city",
	"train-tram",
	"toilet",
	"toilet-paper",
	"taxi",
	"suitcase",
	"stairs",
	"spa",
	"smoking",
	"person-swimming",
	"monument",
	"martini-glass-empty",
	"martini-glass",
	"martini-glass-citrus",
	"map-location-dot",
	"kitchen-set",
	"elevator",
	"hot-tub-person",
	"infinity",
	"caravan",
	"bus",
	"book-atlas",
	"bell-concierge",
	"bed",
	"ban-smoking",
	"baby-carriage",
	"archway",
	"map",
].sort();

const hotelRoom = {
	name: "hotelRoom",
	title: "Hotel Room",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) =>
				Rule.required().max(50).error("Maximum 50 Characters"),
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "name",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			validation: (Rule) =>
				Rule.required().min(100).error("Minimum 100 Characters"),
		}),
		defineField({
			name: "price",
			title: "Price",
			type: "number",
			validation: (Rule) =>
				Rule.required().min(100).error("Minimum price of $100"),
		}),
		defineField({
			name: "discount",
			title: "Discount",
			type: "number",
			initialValue: 0,
			validation: (Rule) => Rule.min(0),
		}),
		defineField({
			name: "images",
			title: "Images",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "url", type: "url", title: "URL" },
						{ name: "image", type: "image", title: "Image" },
					],
				},
			],
			validation: (Rule) =>
				Rule.required().min(3).error("Minimum of 3 images required"),
		}),
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "object",
			fields: [
				{ name: "url", type: "url", title: "URL" },
				{ name: "image", type: "image", title: "Image" },
			],
			validation: (Rule) => Rule.required().error("Cover Image is required"),
		}),
		defineField({
			name: "type",
			title: "Room Type",
			type: "string",
			options: {
				list: roomTypes,
			},
			validation: (Rule) => Rule.required(),
			initialValue: "basic",
		}),
		defineField({
			name: "specialNote",
			title: "Special Note",
			type: "text",
			validation: (Rule) => Rule.required(),
			initialValue:
				"Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.",
		}),
		defineField({
			name: "dimension",
			title: "Dimension",
			type: "string",
		}),
		defineField({
			name: "numberOfBeds",
			title: "Number Of Beds",
			type: "number",
			validation: (Rule) => Rule.min(1),
			initialValue: 1,
		}),
		defineField({
			name: "offeredAmenities",
			title: "Offered Amenities",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "icon",
							title: "Icon",
							type: "string",
							options: {
								list: icons,
							},
						},
						{ name: "amenity", title: "Amenity", type: "string" },
					],
				},
			],
		}),
		defineField({
			name: "isBooked",
			title: "Is Booked",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "isFeatured",
			title: "Is Featured",
			type: "boolean",
			initialValue: false,
		}),
		defineField({
			name: "reviews",
			title: "Reviews",
			type: "array",
			of: [{ type: "review" }],
		}),
	],
};

export default hotelRoom;
