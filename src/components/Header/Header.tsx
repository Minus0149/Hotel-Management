"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
	const pathname = usePathname();
	const [contactActive, setContactActive] = useState(false);
	const [hash, setHash] = useState(window.location.hash || "");
	useEffect(() => {
		contactActive
			? document
					.querySelector("#contact-link")
					?.classList.add("text-tertiary-dark")
			: document
					.querySelector("#contact-link")
					?.classList.remove("text-tertiary-dark");
	}, [contactActive]);

	useEffect(() => {
		hash !== "#contact" ? setContactActive(false) : setContactActive(true);
	}, [pathname, hash]);
	return (
		<header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
			<div className="flex items-center w-full md:2/3">
				<Link href="/" className="font-black text-tertiary-dark">
					Hotelz
				</Link>
				<ul className="flex items-center ml-5">
					<li className="flex items-center">
						<Link
							href="/auth"
							onClick={() => {
								setContactActive(false);
								setHash("");
							}}
						>
							<FaUserCircle
								className={`${
									pathname === "/auth" && hash !== "#contact"
										? "text-tertiary-dark"
										: ""
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
							pathname === "/" && hash !== "#contact"
								? "text-tertiary-dark"
								: ""
						} after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap`}
						onClick={() => {
							setContactActive(false);
							setHash("");
						}}
					>
						Home
					</Link>
				</li>
				<li className=" pr-0.5 relative">
					<Link
						href="/rooms"
						id="rooms-link"
						className={`${
							pathname === "/rooms" && hash !== "#contact"
								? "text-tertiary-dark"
								: ""
						} after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap`}
						onClick={() => {
							setContactActive(false);
							setHash("");
						}}
					>
						Rooms
					</Link>
				</li>
				<li className=" pr-0.5 relative">
					<Link
						href="#contact"
						id="contact-link"
						className={`after:duration-300 after:ease-in-out after:delay-0 after:transition-transform after:content-[''] after:bg-tertiary-dark after:absolute after:bottom-0 after:h-[2px] after:left-0 after:scale-x-0 after:w-full after:hover:scale-x-100  whitespace-nowrap`}
						onClick={() => {
							setContactActive(true);
							setHash("#contact");
						}}
					>
						Contact
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
