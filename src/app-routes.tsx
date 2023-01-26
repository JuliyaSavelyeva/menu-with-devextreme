import { HomePage, PlanetsPage, CreaturesPage, SinglePlanetPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';
import { SingleCreaturePage } from './pages/singleCreature/SingleCreaturePage';

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
    element: CreaturesPage
  },
  {
    path: '/creatures/:id',
    element: SingleCreaturePage
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
