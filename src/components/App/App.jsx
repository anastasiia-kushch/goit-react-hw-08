import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);

function App() {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/register" element={RegistrationPage} />
        <Route path="/login" element={LoginPage} />
        <Route path="/contacts" element={ContactsPage} />
      </Routes>
    </Suspense>
  );
}

export default App;
