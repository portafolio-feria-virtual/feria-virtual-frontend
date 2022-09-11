import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface INavLinkDashboardProps {
  to: string;
  children: JSX.Element;
  activeClassName?: string;
}

const NavLinkDashboard: FC<INavLinkDashboardProps> = ({
  to,
  children,
  activeClassName,
  ...props
}) => {
  const activeStyle = {
    textDecoration: 'underline'
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeClassName : undefined)}
      {...props}>
      {children}
    </NavLink>
  );
};

export default NavLinkDashboard;
