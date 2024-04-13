import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations.js';
import { useId } from 'react';

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form autoComplete="off">
        <label htmlFor={emailFieldId}>Email</label>
        <Field name="email" id={emailFieldId}></Field>
        <label htmlFor={passwordFieldId}>Password</label>
        <Field name="password" id={passwordFieldId} type="password"></Field>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
