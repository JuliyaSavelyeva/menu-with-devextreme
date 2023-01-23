import { Routes, Route, Navigate } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import { SideNavToolbar } from './layouts';

export default function Content() {
  return (
    <SideNavToolbar title={appInfo.title}>
      <Routes>
        {routes.map(({ path, element }: any) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
        <Route
          path='*'
          element={<Navigate to='/home' />}
        />
      </Routes>
    </SideNavToolbar>
  );
}

