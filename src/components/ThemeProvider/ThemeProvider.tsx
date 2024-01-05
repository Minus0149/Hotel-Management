"use client";

import { useState, useEffect } from "react";
import ThemeContext from "@/context/themeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const themeFromStorage =
		typeof localStorage !== "undefined" && localStorage.getItem("hotelz-theme")
			? JSON.parse(localStorage.getItem("hotelz-theme")!)
			: false;
	const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);

	const [renderComponent, setRenderComponent] = useState(false);

	useEffect(() => {
		setRenderComponent(true);
	}, []);

	if (!renderComponent) return <></>;

	return (
		<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
			<div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
				<div className="dark:text-white dark:bg-black text-[#1e1e1e] transition-colors duration-300 ease-linear">
					{children}
				</div>
			</div>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
