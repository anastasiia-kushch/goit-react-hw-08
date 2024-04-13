import RegisterForm from '../components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/auth/selectors';
import { Loader, ErrorComponent } from '../components/StatusIndicators/StatusIndicators';

export default function RegistrationPage() {
  const loading = useSelector(selectError);
  const error = useSelector(selectLoading);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorComponent />}
      {!loading && !error && (
        <div>
          <h1>Register your accpunt</h1>
          <RegisterForm />
        </div>
      )}
    </div>
  );
}
