"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
	const pathname = usePathname();
	return (
		<header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
			<div className="flex items-center w-full md:2/3">
				<Link href="/" className="font-black text-tertiary-dark">
					Hotelz
				</Link>
				<ul className="flex items-center ml-5">
					<li className="flex items-center">
						<Link href="/auth">
							<FaUserCircle
								className={`${
									pathname === "/auth" ? "text-tertiary-dark" : ""
								} cursor-pointer`}
							/>
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
						id="home-link"
						className={`${
							pathname === "/" && window.location.hash !== "#contact"
								? "text-tertiary-dark"
								: ""
						} after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap`}
					>
						Home
					</Link>
				</li>
				<li className=" pr-0.5 relative">
					<Link
						href="/rooms"
						id="rooms-link"
						className={`${
							pathname === "/rooms" ? "text-tertiary-dark" : ""
						} after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap`}
					>
						Rooms
					</Link>
				</li>
				<li className=" pr-0.5 relative">
					<Link
						href="#contact"
						id="contact-link"
						className={` after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap`}
					>
						Contact
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
