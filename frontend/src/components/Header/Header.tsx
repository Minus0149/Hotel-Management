"use client";

import ThemeContext from "@/context/themeContext";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	const handleCheckboxChange = () => {
		setDarkTheme(!darkTheme);
		!darkTheme
			? localStorage.setItem("hotelz-theme", "true")
			: localStorage.removeItem("hotelz-theme");
	};
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
						<label className="relative inline-flex cursor-pointer select-none items-center  ">
							<input
								type="checkbox"
								checked={darkTheme}
								onChange={handleCheckboxChange}
								className="sr-only"
							/>
							<div className="flex h-8 w-16 gap-1 items-center justify-center rounded-full dark:bg-[#1e1e1e] dark:text-white bg-[#cecece]">
								<span
									className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
										!darkTheme
											? "bg-tertiary-dark text-white"
											: "text-body-color "
									}`}
								>
									<MdLightMode />
								</span>
								<span
									className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
										darkTheme
											? "bg-tertiary-dark text-white"
											: "text-body-color"
									}`}
								>
									<MdDarkMode />
								</span>
							</div>
						</label>
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
