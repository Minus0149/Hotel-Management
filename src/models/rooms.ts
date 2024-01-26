type CoverImage = {
	url: string;
	image?: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
};

type Image = {
	_key: string;
	url?: string;
	image?: {
		_type: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
};
type Amenity = {
	_key: string;
	amenity: string;
	icon: string;
};

type Slug = {
	_type: string;
	current: string;
};

export type Room = {
	_id: string;
	name: string;
	description: string;
	isFeatured: boolean;
	isBooked: boolean;
	price: number;
	slug: Slug;
	discount: number;
	images: Image[];
	coverImage: CoverImage;
	dimension: string;
	numberOfBeds: number;
	offeredAmenities: Amenity[];
	specialNote: string;
	type: string;
};
