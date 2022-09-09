import { FC } from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom';

interface INavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: FC<INavLinkProps> = ({ to, children, ...props }) => {
  return (
    <NavLinkRouter
      to={to}
      className={({ isActive }) => (isActive ? 'active' : undefined)}
      {...props}>
      {children}
    </NavLinkRouter>
  );
};
