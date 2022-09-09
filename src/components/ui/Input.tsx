import { FormikTouched } from 'formik';
import { FC, InputHTMLAttributes } from 'react';

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  touched?: FormikTouched<unknown>;
  errors?: string;
}

export const Input: FC<InputsProps> = ({ name, label, touched, errors, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-green-500 font-semibold mb-2">
        {label}
      </label>

      <input
        id={name}
        name={name}
        {...rest}
        className="appearance-none rounded-lg px-4 py-3 w-full bg-slate-100 focus:outline-none focus:shadow-outline"
      />

      {touched && errors && <div className="text-red-500 text-xs italic pt-2">{errors}</div>}
    </div>
  );
};
