import { ClickEvent } from 'devextreme/ui/button';

export type HeaderProps = {
  menuToggleEnabled: boolean;
  title?: string;
  toggleMenu: (e: ClickEvent) => void;
}
