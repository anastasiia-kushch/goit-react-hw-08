import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import css from '../RegisterForm/RegisterForm.module.css';
import { useId } from 'react';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  password: Yup.string().trim().min(4, 'Too short!').required('Required'),
  email: Yup.string().trim().email().required('Required'),
});

export default function RegisterForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className={css.container}>
        <label htmlFor={nameFieldId}>Username</label>
        <Field name="name" id={nameFieldId}></Field>
        <label htmlFor={emailFieldId}>Email</label>
        <Field name="email" id={emailFieldId}></Field>
        <label htmlFor={passwordFieldId}>Password</label>
        <Field name="password" id={passwordFieldId} type="password"></Field>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
