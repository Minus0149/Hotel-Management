export type Booking = {
	_id: string;
	hotelRoom: {
		_id: string;
		name: string;
		slug: { current: string };
		price: number;
	};
	checkinDate: string;
	checkoutDate: string;
	numberOfDays: number;
	adults: number;
	children: number;
	totalPrice: number;
	discount: number;
};

export type CreateBookingDto = {
	user: string;
	hotelRoom: string;
	checkinDate: string;
	checkoutDate: string;
	numberOfDays: number;
	adults: number;
	children: number;
	totalPrice: number;
	discount: number;
};
