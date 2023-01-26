import dxTreeView, { ItemClickEvent } from 'devextreme/ui/tree_view';
import React from 'react';
import { EventInfo } from 'devextreme/events';

export type SideNavigationMenuProps = {
  selectedItemChanged: (e: ItemClickEvent) => void;
  openMenu: (e: React.PointerEvent) => void;
  compactMode: boolean;
  onMenuReady: (e: EventInfo<dxTreeView>) => void;
}

export interface SideNavToolbarProps {
  title: string;
}

type NavigationData = {
  currentPath: string;
}

export type NavigationContextType = {
  setNavigationData?: ({ currentPath }: NavigationData) => void;
  navigationData: NavigationData;
}
