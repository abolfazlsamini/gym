import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router';

import { App } from './App.jsx';
import { Home } from './pages/Home.jsx';

root.render(
  <Home />,
  // <MemoryRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/home" element={<Home />} />
  //   </Routes>
  // </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
