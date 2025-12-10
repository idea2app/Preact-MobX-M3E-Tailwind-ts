import type { M3eAppBarElement } from "@m3e/app-bar";
import type { M3eIconElement } from "@m3e/icon";
import type { M3eIconButtonElement } from "@m3e/icon-button";
import type { M3eDrawerToggleElement } from "@m3e/drawer-toggle";
import type { M3eThemeElement } from "@m3e/theme";

declare module "react/jsx-runtime" {
	namespace JSX {
		interface IntrinsicElements {
			"m3e-app-bar": CustomElement<M3eAppBarElement>;
			"m3e-icon": CustomElement<M3eIconElement>;
			"m3e-icon-button": CustomElement<M3eIconButtonElement>;
			"m3e-drawer-toggle": CustomElement<M3eDrawerToggleElement>;
			"m3e-theme": CustomElement<M3eThemeElement>;
		}
	}
}
