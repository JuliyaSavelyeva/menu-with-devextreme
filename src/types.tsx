import dxTreeView, { ItemClickEvent } from 'devextreme/ui/tree_view';
import { ClickEvent } from 'devextreme/ui/button';
import { EventInfo } from 'devextreme/events';
import React from 'react';

export interface HeaderProps {
  menuToggleEnabled: boolean;
  title?: string;
  toggleMenu: (e: ClickEvent) => void;
}

export interface SideNavigationMenuProps {
  selectedItemChanged: (e: ItemClickEvent) => void;
  openMenu: (e: React.PointerEvent) => void;
  compactMode: boolean;
  onMenuReady: (e: EventInfo<dxTreeView>) => void;
}

export interface SideNavToolbarProps {
  title: string;
}

export type Handle = () => void;

interface NavigationData {
  currentPath: string;
}

export type NavigationContextType = {
  setNavigationData?: ({ currentPath }: NavigationData) => void;
  navigationData: NavigationData;
}

export type ValidationType = {
  value: string;
}

export type PlanetType = {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}
