import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeContainer } from "src/component/theme-container";
import { HomePage } from "./Home";

export default () => (
	<HashRouter>
		<ThemeContainer>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</ThemeContainer>
	</HashRouter>
);
