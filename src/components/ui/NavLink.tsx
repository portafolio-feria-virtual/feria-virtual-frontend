import { NavLink as NavLinkRouter } from 'react-router-dom';

interface INavLinkProps {
  to: string;
  type?: 'link' | 'item';
  children: JSX.Element | JSX.Element[] | string;
}

export const NavLink: React.FC<INavLinkProps> = ({ to, type, children, ...props }) => {
  return (
    <NavLinkRouter
      to={to}
      className={({ isActive }) =>
        isActive ? `${type === 'item' ? 'active-link' : 'active'}` : undefined
      }
      {...props}>
      {children}
    </NavLinkRouter>
  );
};
