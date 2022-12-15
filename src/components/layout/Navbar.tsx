import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur transition-colors duration-500 supports-backdrop-blur:bg-white/20 bg-slate-50/90 flex-none w-full px-4 lg:border-b lg:border-slate-600/10">
      <article className="max-w-7xl mx-auto">
        <section className="relative block lg:flex items-center justify-between border-b lg:border-0 py-7 border-slate-700/10">
          <Link to="/" className="block max-w-min">
            <img src={logo} alt="Logo" className="w-14" />
          </Link>

          <nav id="menu" className="hidden lg:block mt-5 mb-7 lg:my-0 pl-2 lg:pl-0">
            <ul className="lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-4 xl:space-x-8">
              <li>
                <a
                  href="#"
                  className="block hover:text-green-500 transition duration-100 active-link">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="block hover:text-green-500 transition duration-100">
                  Marketplace
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex space-x-3">
            <div id="login-button" className="hidden lg:block pb-2 lg:pb-0 pl-2 lg:pl-0">
              <Link
                to="/ingreso"
                className="focus:outline-none active:ring-2 active:ring-green-500 active:ring-offset-2 py-2 px-4 rounded-lg text-white font-semibold bg-green-500 hover:bg-green-700 hover:bg-netfree-500 transition duration-100">
                Ingresar
              </Link>
            </div>

            <div id="login-button" className="hidden lg:block pb-2 lg:pb-0 pl-2 lg:pl-0">
              <Link
                to="/registro/cliente-extranjero"
                className="text-green-500 hover:text-green-700 font-medium">
                Registrarme
              </Link>
            </div>
          </div>

          <button id="toggle-nav" className="lg:hidden absolute top-6 right-0">
            <i className="text-2xl text-slate-500 fa-solid fa-bars"></i>
          </button>
        </section>
      </article>
    </header>
  );
};

export default Navbar;
