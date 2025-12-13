import { observable } from "mobx";
import { persist, restore } from "mobx-restful";

export type ColorScheme = "light" | "dark" | "auto";

const matchColorScheme = (color: ColorScheme) =>
	globalThis.matchMedia?.(`(prefers-color-scheme: ${color})`);

export class SystemModel {
	@persist()
	@observable
	accessor color: string = "#904a43";

	@persist()
	@observable
	accessor colorScheme: ColorScheme = matchColorScheme("dark").matches
		? "dark"
		: matchColorScheme("light").matches
			? "light"
			: "auto";

	@persist()
	@observable
	accessor direction: "ltr" | "rtl" = "ltr";

	private applyTheme() {
		const themeElement = document.querySelector("m3e-theme");

		if (!themeElement) return console.error("themeElement not found");

		themeElement.setAttribute("color", this.color);
		themeElement.setAttribute("scheme", this.colorScheme);
		document.documentElement.dir = this.direction;
	}

	restored = restore(this, "System").then(() => this.applyTheme());

	setTheme(type: "colorScheme" | "direction" | "color", value: string) {
		switch (type) {
			case "color":
				document.querySelector("m3e-theme").setAttribute("color", value);
				this.color = value;
				break;
			case "colorScheme":
				document.querySelector("m3e-theme").setAttribute("scheme", value);
				this.colorScheme = value as ColorScheme;
				break;
			case "direction":
				document.documentElement.dir = this.direction = value as "ltr" | "rtl";
				this.direction = value as "ltr" | "rtl";
				break;
		}
	}
}

export default new SystemModel();
