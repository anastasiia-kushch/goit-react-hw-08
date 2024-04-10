import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import css from '../RegisterForm/RegisterForm.module.css'

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch();
    actions.resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit}>
      <Form className={css.container}>
        <label htmlFor="username">Username</label>
        <Field name="username"></Field>
        <label htmlFor="email">Email</label>
        <Field name="email"></Field>
        <label htmlFor="password">Email</label>
        <Field name="password"></Field>
      </Form>
    </Formik>
  );
}
