import { observer } from "mobx-react";
import type { FC } from "react";

import "@m3e/heading";
import "@m3e/segmented-button";
import "@m3e/icon";

import systemStore from "src/model/System";

export const SCHEME_OPTIONS = [
	{
		name: "light",
		label: "Light",
		icon: "light_mode",
	},
	{
		name: "auto",
		label: "System",
		icon: "settings_brightness",
	},
	{
		name: "dark",
		label: "Dark",
		icon: "dark_mode",
	},
];

export const Setting: FC = observer(() => {
	const { color, colorScheme } = systemStore;

	return (
		<aside className="flex flex-col gap-4 p-2" id="settings-drawer" slot="end">
			<m3e-heading id="color-header" variant="label" size="large">
				Color
			</m3e-heading>
			<input
				id="color"
				className="h-12 w-12 cursor-pointer appearance-none rounded-full border-none outline-secondary"
				type="color"
				value={color}
				aria-labelledby="color-header"
				onChange={(event) =>
					systemStore.setTheme("color", event.target.value as string)
				}
			/>
			<m3e-heading id="color-scheme-header" variant="label" size="large">
				Color scheme
			</m3e-heading>
			<m3e-segmented-button
				className="w-fit"
				id="color-scheme-button"
				aria-labelledby="color-scheme-header"
				onChange={(event) =>
					systemStore.setTheme("colorScheme", event.target.value as string)
				}
			>
				{SCHEME_OPTIONS.map(({ name, icon, label }) => (
					<m3e-button-segment
						key={name}
						value={name}
						checked={colorScheme === name}
					>
						<m3e-icon slot="icon" name={icon}></m3e-icon>
						{label}
					</m3e-button-segment>
				))}
			</m3e-segmented-button>
			<m3e-heading id="directionality-header" variant="label" size="large">
				Directionality
			</m3e-heading>
			<m3e-segmented-button
				id="directionality-button"
				aria-labelledby="directionality-header"
				onChange={(event) =>
					systemStore.setTheme("direction", event.target.value as string)
				}
			>
				<m3e-button-segment checked value="ltr">
					<m3e-icon slot="icon" name="format_textdirection_l_to_r"></m3e-icon>
					Left to right
				</m3e-button-segment>
				<m3e-button-segment value="rtl">
					<m3e-icon slot="icon" name="format_textdirection_r_to_l"></m3e-icon>
					Right to left
				</m3e-button-segment>
			</m3e-segmented-button>
		</aside>
	);
});
