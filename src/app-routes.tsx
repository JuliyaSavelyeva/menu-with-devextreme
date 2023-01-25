import { HomePage, PlanetsPage, ProfilePage, SinglePlanetPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
  {
    path: '/planets',
    element: PlanetsPage
  },
  {
    path: '/planets/:id',
    element: SinglePlanetPage
  },
  {
    path: '/creatures',
    element: ProfilePage
  },
  {
    path: '/home',
    element: HomePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path)
  };
});
