import { NavLink } from '../ui/';

export const registerItems = [
  { id: 1, name: 'Cliente extranjero', path: 'cliente-extranjero' },
  { id: 2, name: 'Cliente Local', path: 'cliente-local' },
  { id: 3, name: 'Productor', path: 'productor' },
  { id: 4, name: 'Transportista', path: 'transportista' }
];

const RegisterOptions = () => {
  return (
    <div className="flex overflow-auto mb-10 -mx-4 sm:-mx-6">
      <div className="flex-none min-w-full px-4 sm:px-6">
        <ul className="border-y border-slate-200 space-x-5 flex justify-between whitespace-nowrap">
          {registerItems.map(item => (
            <li key={item.id} className="py-5">
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RegisterOptions;
