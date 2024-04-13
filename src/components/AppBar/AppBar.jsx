import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import css from '../AppBar/AppBar.module.css';
import { selectIsRefreshing } from '../../redux/contacts/selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const iRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.container}>
      <Navigation />
      {!iRefreshing && <div> {isLoggedIn ? <UserMenu /> : <AuthNav />}</div>}
    </header>
  );
}
