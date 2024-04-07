import { getStoredItem, setStoredItem } from "@utils/localStorage";
import { atom } from "nanostores";

const THEME_KEY = "theme-mode";

const themeMode = atom(getStoredItem(THEME_KEY) || "light");
themeMode.subscribe((newMode) => {
	setStoredItem(THEME_KEY, newMode);
	if (typeof window !== "undefined") {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(newMode);
	}
});

export const currentTheme = themeMode.get();
export const toggleTheme = () =>
	themeMode.set(themeMode.get() === "light" ? "dark" : "light");
