import LoginForm from '../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/auth/selectors';
import { Loader, ErrorComponent } from '../components/StatusIndicators/StatusIndicators';

export default function LoginPage() {
  const loading = useSelector(selectError);
  const error = useSelector(selectLoading);
  return (
    <div>
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
