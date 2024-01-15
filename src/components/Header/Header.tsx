"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

const Header = () => {
	return (
		<header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
			<div className="flex items-center w-full md:2/3">
				<Link href="/" className="font-black text-tertiary-dark">
					Hotelz
				</Link>
				<ul className="flex items-center ml-5">
					<li className="flex items-center">
						<Link href="/auth">
							<FaUserCircle className="cursor-pointer" />
						</Link>
					</li>
					<li className="ml-4">
						<ThemeBtn />
					</li>
				</ul>
			</div>
			<ul className="flex items-center justify-between w-full md:w-1/3 ">
				<li className=" pr-0.5 relative">
					<Link
						href="/"
						className="after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark dark:after:bg-tertiary-light after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap"
					>
						Home
					</Link>
				</li>
				<li className=" pr-0.5 relative">
					<Link
						href="/rooms"
						className="after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark dark:after:bg-tertiary-light after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap"
					>
						Rooms
					</Link>
				</li>
				<li className=" pr-0.5 relative">
					<Link
						href="#contact"
						className="after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark dark:after:bg-tertiary-light after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap"
					>
						Contact
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
