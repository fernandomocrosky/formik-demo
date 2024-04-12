'use client';

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import TextError from './TextError';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  addres: '',
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
        <ErrorMessage
          name="name"
          component={TextError}
        />
        <br></br>

        <Field
          type="text"
          placeholder="email"
          name="email"
        />
        <ErrorMessage name="email">{(errorMessage) => <div style={{ color: 'red' }}>{errorMessage}</div>}</ErrorMessage>
        <br></br>

        <Field
          type="text"
          placeholder="channel"
          name="channel"
        />
        <ErrorMessage name="channel" />
        <br></br>

        <Field
          name="comments"
          as="textarea"></Field>
        <br></br>

        <Field name="address">
          {({ field, form, meta }) => {
            <input
              type="text"
              {...field}></input>;
            {
              meta.touched && meta.error ? <div>{meta.error}</div> : null;
            }
          }}
        </Field>
        <br></br>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
