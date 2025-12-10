import { HashRouter, Route, Routes } from "react-router-dom";

import "@m3e/theme";
import { Navigator } from "../component/navigator";

import { HomePage } from "./Home";

export default () => (
	<HashRouter>
		<m3e-theme motion="expressive" color="#904a43">
			<Navigator />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</m3e-theme>
	</HashRouter>
);
