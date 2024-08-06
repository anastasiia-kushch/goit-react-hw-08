import LoginForm from '../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/auth/selectors';
import {
  Loader,
  ErrorComponent,
} from '../components/StatusIndicators/StatusIndicators';
import css from '../components/App/App.module.css';

export default function LoginPage() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <div>
          <h1>Log in</h1>
          <LoginForm />
        </div>
      )}
    </div>
  );
}
