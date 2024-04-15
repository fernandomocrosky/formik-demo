'use client';

import { Form, Formik } from 'formik';
import FormikControl from './FormikControl';

function FormikContainer() {
  const initialValues = {
    email: '',
  };
  const validate = (values) => {
    const errors = {};

    if (!values.email) errors.email = 'Required';
    return errors;
  };

  const handleChange = (values) => {
    console.log(values);
  };

  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      onChange={handleChange}>
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            name="email"
            id="email"
            placeholder="email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
