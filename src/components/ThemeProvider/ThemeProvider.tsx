"use client";

import { ThemeContext } from "@/context/theme";
import { useEffect, useState } from "react";
import React from "react";

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

	useEffect(() => {
		document.querySelector("html")?.classList.remove("dark", "light");
		document.querySelector("html")?.classList.add(darkTheme ? "dark" : "light");
	}, [darkTheme]);

	if (!renderComponent) return <></>;

	return (
		<ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
			<div className="dark:text-white dark:bg-black text-[#1e1e1e] transition-colors duration-300 ease-linear">
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
