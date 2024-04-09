import { Formik, Form, Field } from 'formik';

export default function RegistrationPage() {
  return (
    <Formik>
      <Form>
        <label htmlFor="email">Email</label>
        <Field name="email"></Field>
        <label htmlFor="password">Email</label>
        <Field name="password"></Field>
      </Form>
    </Formik>
  );
}
