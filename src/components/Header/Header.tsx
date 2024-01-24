"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
	const pathname = usePathname();
	const [contactActive, setContactActive] = useState(false);
	const [hash, setHash] = useState(window.location.hash || "");
	const { data: session } = useSession();

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
						{session?.user ? (
							<Link
								href={`/users/${session.user.id}`}
								onClick={() => {
									setContactActive(false);
									setHash("");
								}}
							>
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
						)}
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
						} underline-animation`}
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
						} underline-animation`}
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
						className={`underline-animation`}
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
