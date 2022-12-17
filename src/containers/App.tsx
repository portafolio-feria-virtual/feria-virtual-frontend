import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from '../contexts/providers/AuthProvider';

import Layout from '../components/layout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { ProtectedRoute } from './utils/ProtectedRoute';
import { RegisterCE, RegisterCL, RegisterPD, RegisterTA } from '../components/register';
import Dashboard from '../components/dashboard/Dashboard';
import ViewOffers from '../components/dashboard/dashboardCL/ViewOffers';
import Marketplace from '../components/marketplace/Marketplace';
import CreateOffer from '../components/dashboard/dashboardCL/CreateOffer';
import GenerateReport from '../components/dashboard/dashboardConsultor/GenerateReport';
import ShippingStatusTA from '../components/dashboard/dashboardTA/ShippingStatusTA';
import ViewPostulation from '../components/dashboard/dashboardTA/ViewPostulation';
import ViewLicitationTA from '../components/dashboard/dashboardTA/ViewLicitationTA';
import ViewLicitationsAdmin from '../components/dashboard/dashboardAdmin/licitations/ViewLicitationsAdmin';
import ViewOffersAdmin from '../components/dashboard/dashboardAdmin/offers/ViewOffers';
import ViewLocalSalesAdmin from '../components/dashboard/dashboardAdmin/localSales/ViewLocalSalesAdmin';
import ViewContract from '../components/dashboard/dashboardAdmin/contract/ViewContract';
import ShippingStatusCE from '../components/dashboard/dashboardCE/ShippingStatusCE';
import CreateLicitationCE from '../components/dashboard/dashboardCE/CreateLicitationCE';
import ViewLicitationsCE from '../components/dashboard/dashboardCE/ViewLicitationsCE';
import { LocalSaleFormPD } from '../components/dashboard/dashboardPD/localSale/LocalSaleFormPD';
import ViewLocalSalePD from '../components/dashboard/dashboardPD/localSale/ViewLocalSalePD';
import ViewLicitationOfferPD from '../components/dashboard/dashboardPD/licitation/ViewLicitationOfferPD';
import ViewShippingStatusPD from '../components/dashboard/dashboardPD/shipping/ViewShippingStatusPD';
import LicitationPD from '../components/dashboard/dashboardPD/licitation/LicitationPD';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />

          <Route path="/ingreso" element={<LoginPage />} />

          <Route path="/registro" element={<RegisterPage />}>
            <Route path="/registro" element={<Navigate to="cliente-extranjero" replace />} />

            <Route path="cliente-extranjero" element={<RegisterCE />} />
            <Route path="cliente-local" element={<RegisterCL />} />
            <Route path="productor" element={<RegisterPD />} />
            <Route path="transportista" element={<RegisterTA />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/panel/" element={<Dashboard />}>
            <Route path="ver-ofertas-de-compras" element={<ViewOffers />} />
            <Route path="crear-oferta" element={<CreateOffer />} />
            <Route path="marketplace" element={<Marketplace />} />

            <Route path="ver-envio-transportista" element={<ShippingStatusTA />} />
            <Route path="ver-postulaciones" element={<ViewPostulation />} />
            <Route path="ver-licitaciones-transportista" element={<ViewLicitationTA />} />

            <Route path="ver-envios" element={<ShippingStatusCE />} />
            <Route path="licitaciones">
              <Route
                path="/panel/licitaciones"
                element={<Navigate to="ver-licitaciones" replace />}
              />
              <Route path="ver-licitaciones" element={<ViewLicitationsCE />} />
              <Route path="crear-licitacion" element={<CreateLicitationCE />} />
            </Route>

            <Route path="solicitudes">
              <Route
                path="/panel/solicitudes"
                element={<Navigate to="ver-licitaciones-admin" replace />}
              />
              <Route path="ver-licitaciones-admin" element={<ViewLicitationsAdmin />} />
              <Route path="ver-ofertas-admin" element={<ViewOffersAdmin />} />
              <Route path="ver-ventas-locales-admin" element={<ViewLocalSalesAdmin />} />
            </Route>

            <Route path="contratos" element={<ViewContract />} />

            <Route path="generar-reportes" element={<GenerateReport />} />

            <Route path="ventas-locales">
              <Route
                path="/panel/ventas-locales"
                element={<Navigate to="crear-venta-local" replace />}
              />
              <Route path="crear-venta-local" element={<LocalSaleFormPD />} />
              <Route path="ver-ventas-locales" element={<ViewLocalSalePD />} />
            </Route>

            <Route path="ver-envios-productor" element={<ViewShippingStatusPD />} />

            <Route path="licitaciones-productor">
              <Route
                path="/panel/licitaciones-productor"
                element={<Navigate to="crear-oferta-productor" replace />}
              />
              <Route path="crear-oferta-productor" element={<LicitationPD />} />
              <Route path="ver-ofertas-licitacion" element={<ViewLicitationOfferPD />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
