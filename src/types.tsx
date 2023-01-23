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

export interface User {
  email: string;
  avatarUrl: string;
}

export interface SideNavToolbarProps {
  title: string;
}

export interface SingleCardProps {
  title?: string;
  description?: string;
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