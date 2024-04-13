import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));

function App() {
  return (
    <Layout>
      <hr />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
