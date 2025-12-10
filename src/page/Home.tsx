import { observer } from "mobx-react";
import { Component } from "react";
import { type RouteComponentProps, withRouter } from "react-router-class-tools";

import project from "../model/Project";
import { t } from "../model/Translation";

@withRouter
@observer
export class HomePage extends Component<
	RouteComponentProps<{}, {}, { guest: string }>
> {
	componentDidMount() {
		project.getList(
			"facebook/react",
			"microsoft/TypeScript",
			"mobxjs/mobx",
			"ant-design/ant-design",
			"EasyWebApp/KoAJAX",
		);
	}

	componentWillUnmount() {
		project.clearList();
	}

	render() {
		const { guest } = this.props.query,
			{ list } = project;

		return (
			<>
				<h1 className="text-2xl font-bold">{t("upstream_projects")}</h1>

				{guest && (
					<h2>
						{t("welcome")} {guest}!
					</h2>
				)}
			</>
		);
	}
}
