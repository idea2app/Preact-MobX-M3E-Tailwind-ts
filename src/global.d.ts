import type { M3eAppBarElement } from "@m3e/app-bar";
import type { M3eIconElement } from "@m3e/icon";
import type { M3eIconButtonElement } from "@m3e/icon-button";
import type { M3eDrawerToggleElement } from "@m3e/drawer-toggle";
import type { M3eThemeElement } from "@m3e/theme";
import type { M3eDrawerContainerElement } from "@m3e/drawer-container";
import type { M3eHeadingElement } from "@m3e/heading";
import type {
	M3eButtonSegmentElement,
	M3eSegmentedButtonElement,
} from "@m3e/segmented-button";
import type { M3eNavMenuElement, M3eNavMenuItemElement } from "@m3e/nav-menu";
import type {
	M3eMenuTriggerElement,
	M3eMenuElement,
	M3eMenuItemElement,
	M3eMenuItemRadioElement,
} from "@m3e/menu";
import type { M3eCardElement } from "@m3e/card";
import type { M3eButtonElement } from "@m3e/button";

declare module "react/jsx-runtime" {
	namespace JSX {
		interface IntrinsicElements {
			"m3e-app-bar": CustomElement<M3eAppBarElement>;
			"m3e-button": CustomElement<M3eButtonElement>;
			"m3e-icon": CustomElement<M3eIconElement>;
			"m3e-icon-button": CustomElement<M3eIconButtonElement>;
			"m3e-drawer-toggle": CustomElement<M3eDrawerToggleElement>;
			"m3e-theme": CustomElement<M3eThemeElement>;
			"m3e-card": CustomElement<M3eCardElement>;
			"m3e-drawer-container": CustomElement<M3eDrawerContainerElement>;
			"m3e-heading": CustomElement<M3eHeadingElement>;
			"m3e-button-segment": CustomElement<M3eButtonSegmentElement>;
			"m3e-segmented-button": CustomElement<M3eSegmentedButtonElement>;
			"m3e-nav-menu": CustomElement<M3eNavMenuElement>;
			"m3e-nav-menu-item": CustomElement<M3eNavMenuItemElement>;
			"m3e-menu-trigger": CustomElement<M3eMenuTriggerElement>;
			"m3e-menu": CustomElement<M3eMenuElement>;
			"m3e-menu-item": CustomElement<M3eMenuItemElement>;
			"m3e-menu-item-radio": CustomElement<M3eMenuItemRadioElement>;
		}
	}
}
