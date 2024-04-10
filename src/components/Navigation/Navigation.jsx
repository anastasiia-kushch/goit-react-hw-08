import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export default function Navigation() {
    //условный рендер для контактов (только если пользователь залогинен (через юзселектор))

  return (
    <nav className={css.container}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contats">Contacts</NavLink>
    </nav>
  );
}
