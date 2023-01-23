import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import './Header.scss';
import type { HeaderProps } from '../../types';

export const Header = ({ menuToggleEnabled, title, toggleMenu }: HeaderProps) => {
  return (
    <header className={'header-component'}>
      <Toolbar className={'header-toolbar'}>
        <Item
          visible={menuToggleEnabled}
          location={'before'}
          widget={'dxButton'}
          cssClass={'menu-button'}
        >
          <Button icon='menu' stylingMode='text' onClick={toggleMenu} />
        </Item>
        <Item
          location={'before'}
          cssClass={'header-title'}
          text={title}
          visible={!!title}
        />
      </Toolbar>
    </header>
  );
};
