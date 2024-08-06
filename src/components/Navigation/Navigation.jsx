import { NavLink, useLocation } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';

export default function Navigation() {
  const location = useLocation();

  const getLocation = to => {
    return to === location.pathname
      ? clsx(css.navItem, css.active)
      : css.navItem;
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.container}>
      <NavLink to="/" className={`${getLocation('/')}`}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={`${getLocation('/contacts')}`}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
