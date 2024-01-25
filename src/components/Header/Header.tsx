"use client";

import Link from "next/link";
import { FaHamburger, FaUserCircle } from "react-icons/fa";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Header = () => {
	const pathname = usePathname();
	const [contactActive, setContactActive] = useState(false);
	const [hash, setHash] = useState(window.location.hash || "");
	const [showMenu, setShowMenu] = useState(false);
	const { data: session } = useSession();
	const handleClick = () => {
		setContactActive(false);
		setHash("");
		setShowMenu(false);
	};

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
		<header className="py-10 px-4 container mx-auto text-xl flex flex-wrap lg:flex-nowrap items-center justify-between">
			<div className="flex items-center w-3/4 lg:w-2/3">
				<Link href="/" className="font-black text-tertiary-dark">
					Hotelz
				</Link>
				<ul className="flex items-center ml-5">
					<li className="flex items-center">
						{session?.user ? (
							<Link href={`/users/${session.user.id}`} onClick={handleClick}>
								{session.user.image ? (
									<div className="w-10 h-10 rounded-full overflow-hidden">
										<Image
											src={session.user.image}
											alt={session.user.name!}
											width={40}
											height={40}
										/>
									</div>
								) : (
									<FaUserCircle
										className={`${
											pathname === "/auth" && hash !== "#contact"
												? "text-tertiary-dark"
												: ""
										} cursor-pointer`}
									/>
								)}
							</Link>
						) : (
							<Link href="/auth" onClick={handleClick}>
								<FaUserCircle
									className={`${
										pathname === "/auth" && hash !== "#contact"
											? "text-tertiary-dark"
											: ""
									} cursor-pointer`}
								/>
							</Link>
						)}
					</li>
					<li className="ml-4">
						<ThemeBtn />
					</li>
				</ul>
			</div>
			<span className="block lg:hidden" onClick={() => setShowMenu(!showMenu)}>
				{showMenu ? (
					<IoCloseOutline className="text-4xl font-extrabold" />
				) : (
					<IoMenuOutline className="text-4xl font-extrabold" />
				)}
			</span>
			<ul
				className={`lg:flex items-center lg:flex-row justify-between w-full lg:w-1/3 lg:h-auto ${
					showMenu
						? "h-40 overflow-hidden flex flex-col bg-white dark:bg-black"
						: "hidden"
				}`}
			>
				<li className="pr-0.5 relative">
					<Link
						href="/"
						id="home-link"
						className={`${
							pathname === "/" && hash !== "#contact"
								? "text-tertiary-dark"
								: ""
						} underline-animation`}
						onClick={handleClick}
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
						} underline-animation`}
						onClick={handleClick}
					>
						Rooms
					</Link>
				</li>
				<li className=" pr-0.5 relative">
					<Link
						href="#contact"
						id="contact-link"
						className={`underline-animation`}
						onClick={() => {
							setContactActive(true);
							setHash("#contact");
							setShowMenu(false);
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
