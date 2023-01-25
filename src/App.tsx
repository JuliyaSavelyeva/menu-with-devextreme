import './themes/generated/theme.additional.css';
import 'devextreme/dist/css/dx.light.css';

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './dx-styles.scss';
import { NavigationProvider } from './contexts/navigation';
import { useScreenSizeClass } from './utils/media-query';
import Content from './Content';

export default function Root() {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <NavigationProvider>
        <div className={`app ${screenSizeClass}`}>
          <Content />
        </div>
      </NavigationProvider>
    </Router>
  );
}
