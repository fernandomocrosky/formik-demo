'use client';

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) errors.name = 'Required';
  if (!values.email) errors.email = 'Required';
  if (!values.channel) errors.channel = 'Required';

  return errors;
};

function FormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}>
      <Form>
        <Field
          type="text"
          placeholder="name"
          name="name"
        />
        <ErrorMessage name="name"></ErrorMessage>
        <br></br>

        <Field
          type="text"
          placeholder="email"
          name="email"
        />
        <ErrorMessage name="email"></ErrorMessage>
        <br></br>

        <Field
          type="text"
          placeholder="channel"
          name="channel"
        />
        <ErrorMessage name="channel"></ErrorMessage>
        <br></br>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
