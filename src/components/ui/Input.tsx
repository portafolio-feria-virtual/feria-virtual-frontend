import { FormikTouched } from 'formik';
import { FC, InputHTMLAttributes } from 'react';

interface InputsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  touched?: FormikTouched<unknown>;
  errors?: string;
  disabled?: boolean;
  className?: string;
}

export const Input: FC<InputsProps> = ({
  name,
  label,
  touched,
  errors,
  disabled,
  className,
  ...rest
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className={`block text-green-500 font-semibold mb-2 ${
          disabled && 'cursor-not-allowed opacity-50'
        }`}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        {...rest}
        className={`appearance-none rounded-lg px-4 py-3 w-full bg-slate-100 focus:outline-none focus:shadow-outline ${
          disabled && 'cursor-not-allowed opacity-50'
        }`}
        {...(disabled && { disabled: true })}
      />

      {touched && errors && <div className="text-red-500 text-xs italic pt-2">{errors}</div>}
    </div>
  );
};
