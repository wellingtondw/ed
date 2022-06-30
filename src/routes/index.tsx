import { Routes as ReactDOMRoutes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { MovieDetails } from '../pages/MovieDetails';

export function Routes() {
  return (
    <ReactDOMRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </ReactDOMRoutes>
  );
}
