import { IUser } from './user.interface';

export interface SidebarDataProps {
  pageType: string;
  items: {
    path: string;
    name: string;
    icon: JSX.Element;
    subItems?: {
      path: string;
      name: string;
    }[];
  }[];
  userType: string;
}

export interface SidebarProps {
  data: SidebarDataProps;
  user?: IUser;
}
