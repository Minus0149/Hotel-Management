"use client";

import React, {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
} from "react";

type ThemeContextType = {
	darkTheme: boolean;
	setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextType>({
	darkTheme: false,
	setDarkTheme: () => null,
});

export default function useTheme() {
	return useContext(ThemeContext);
}
