import useTheme from "@/context/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeBtn() {
	const { darkTheme, setDarkTheme } = useTheme();
	const handleCheckboxChange = () => {
		setDarkTheme(!darkTheme);
		!darkTheme
			? localStorage.setItem("hotelz-theme", "true")
			: localStorage.removeItem("hotelz-theme");
	};
	return (
		<label className="relative inline-flex items-center cursor-pointer select-none mt-[7px]">
			<input
				type="checkbox"
				id="themeToggler"
				className="sr-only peer"
				onChange={handleCheckboxChange}
				checked={darkTheme}
			/>
			<div className="w-[60px] h-8 bg-[#cecece] peer-focus:outline-none  rounded-full peer dark:bg-[#1e1e1e] dark:text-white peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:bg-tertiary-dark after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 flex duration-300 z-0">
				<MdDarkMode className="absolute z-10 right-[3px] top-1 text-black text-2xl" />
				<MdLightMode className="absolute z-10 left-[6px] top-[6px] text-xl" />
			</div>
		</label>
	);
}

export default ThemeBtn;
