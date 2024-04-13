import LoginForm from '../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/auth/selectors';
import {
  Loader,
  ErrorComponent,
} from '../components/StatusIndicators/StatusIndicators';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <div>
          <h1>Log in</h1>
          <LoginForm />
          <div>or {<NavLink to="/register">register</NavLink>}</div>
        </div>
      )}
    </div>
  );
}
