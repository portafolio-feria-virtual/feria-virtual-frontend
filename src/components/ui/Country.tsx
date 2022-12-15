import { FormikTouched } from 'formik';
import { FC, SelectHTMLAttributes } from 'react';
import { countries } from './utils/countries';

interface ICountry extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string | undefined;
  touched?: FormikTouched<unknown>;
  errors?: string;
}

export const Country: FC<ICountry> = ({ name, touched, errors, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-green-500 font-semibold mb-2">
        País *
      </label>
      <div className="group relative">
        <select
          name={name}
          id={name}
          placeholder="Seleccione su país"
          className="appearance-none rounded-lg px-4 py-3 w-full bg-slate-50 focus:outline-none focus:shadow-outline"
          {...rest}>
          <option value="" disabled>
            Seleccione su país
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <svg
          className="absolute inset-y-0 my-auto right-4"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {touched && errors && <div className="text-red-500 text-xs italic pt-2">{errors}</div>}
    </div>
  );
};
