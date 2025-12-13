import { observer } from "mobx-react";
import { Component, type PropsWithChildren } from "react";
import type { RouteComponentProps } from "react-router-class-tools";
import { AppBar } from "./app-bar";

import "@m3e/drawer-container";
import "@m3e/nav-menu";
import "@m3e/icon";

import { t } from "../model/Translation";
import { Setting } from "./setting";

// @withRouter
@observer
export class ThemeContainer extends Component<
	PropsWithChildren<RouteComponentProps<{}, {}, {}>>
> {
	renderNavMenu() {
		const { pathname } = this.props.location || {};

		return (
			<m3e-nav-menu id="nav-drawer" slot="start">
				<m3e-nav-menu-item selected={pathname === "/project"}>
					<m3e-icon slot="icon" name="rocket_launch"></m3e-icon>
					<a slot="label" href="#/project">
						{t("upstream_projects")}
					</a>
				</m3e-nav-menu-item>
				<m3e-nav-menu-item disabled>
					<m3e-icon slot="icon" name="widgets"></m3e-icon>
					<a slot="label" href="/component">
						{t("component")}
					</a>
				</m3e-nav-menu-item>
			</m3e-nav-menu>
		);
	}

	render() {
		return (
			<>
				<AppBar />
				<m3e-drawer-container start start-mode="auto" end-mode="auto">
					{this.renderNavMenu()}
					<main
						className="@container h-full w-full overflow-y-auto bg-transparent"
						id="scroll-container"
					>
						{this.props.children}
					</main>
					<Setting />
				</m3e-drawer-container>
			</>
		);
	}
}
