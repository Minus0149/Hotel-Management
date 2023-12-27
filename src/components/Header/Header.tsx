import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
	return (
		<header>
			<div>
				<Link href="/">Hotelz</Link>
				<ul>
					<li>
						<Link href="/auth">
							<FaUserCircle />
						</Link>
					</li>
					<li>
						<MdDarkMode />
					</li>
				</ul>
			</div>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/rooms">Rooms</Link>
				</li>
				<li>
					<Link href="/">Contacts</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
