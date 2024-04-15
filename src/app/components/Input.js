'use client';

import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

function Input(props) {
  const { label, name, ...rest } = props;

  console.log(props);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage
        name={name}
        component={TextError}
      />
    </div>
  );
}

export default Input;
