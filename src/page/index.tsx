import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeContainer } from 'src/component/ThemeContainer';

import { HomePage } from './home';

export default () => (
  <HashRouter>
    <ThemeContainer>
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </ThemeContainer>
  </HashRouter>
);
