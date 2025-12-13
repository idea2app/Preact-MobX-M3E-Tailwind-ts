import { observer } from "mobx-react";
import { Component } from "react";
import { type RouteComponentProps, withRouter } from "react-router-class-tools";

import "@m3e/card";
import "@m3e/heading";
import "@m3e/button";

import projectStore, { type Project } from "../model/Project";
import { t } from "../model/Translation";

@withRouter
@observer
export class HomePage extends Component<
	RouteComponentProps<{}, {}, { guest: string }>
> {
	componentDidMount() {
		projectStore.getList(
			"facebook/react",
			"microsoft/TypeScript",
			"mobxjs/mobx",
			"ant-design/ant-design",
			"EasyWebApp/KoAJAX",
		);
	}

	componentWillUnmount() {
		projectStore.clearList();
	}
	renderProject = ({
		id,
		name,
		logo,
		description,
		homepage,
		html_url,
	}: Project) => (
		<m3e-card className="grid h-full gap-2" key={id} variant="elevated">
			<img className="max-w-full" slot="header" src={logo} alt={name} />
			<m3e-heading
				slot="header"
				className="row-span-1"
				variant="display"
				size="small"
			>
				{name}
			</m3e-heading>
			<p className="row-span-2" slot="content">
				{description}
			</p>
			<div className="row-span-1 flex gap-2" slot="actions">
				<m3e-button
					variant="tonal"
					size="extra-small"
					href={homepage}
					target="_blank"
				>
					{t("home_page")}
					<m3e-icon slot="trailing-icon" name="open_in_new_window"></m3e-icon>
				</m3e-button>
				<m3e-button
					variant="tonal"
					size="extra-small"
					href={html_url}
					target="_blank"
				>
					{t("source_code")}
					<m3e-icon slot="trailing-icon" name="open_in_new_window"></m3e-icon>
				</m3e-button>
			</div>
		</m3e-card>
	);

	render() {
		return (
			<>
				<m3e-heading variant="display" size="medium">
					{t("upstream_projects")}
				</m3e-heading>
				<div className="grid @2xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4 grid-cols-1 gap-4 px-4">
					{projectStore.list.map(this.renderProject)}
				</div>
			</>
		);
	}
}
