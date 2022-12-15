import DownloadConfirmation from './DownloadConfirmation';

const reportHeader = ['#', 'Nombre', 'Descripción', 'Fecha de creación', 'Acciones'];

const saleReport = [
  {
    id: '1',
    name: 'Reporte 1',
    description: 'Reporte de ventas',
    createdAt: '2021-05-01'
  },
  {
    id: '2',
    name: 'Reporte 2',
    description: 'Reporte de ventas',
    createdAt: '2021-05-01'
  }
];

const lossReport = [
  {
    id: '1',
    name: 'Reporte 1',
    description: 'Reporte de perdida',
    createdAt: '2021-05-01'
  },
  {
    id: '2',
    name: 'Reporte 2',
    description: 'Reporte de perdida',
    createdAt: '2021-05-01'
  }
];

const GenerateReport = () => {
  return (
    <div>
      <h2>Generar y Descargar Reporte</h2>

      <p>Seleccione el tipo de reporte que desea generar y presione descargar.</p>

      <div className="space-y-4 mt-8">
        <h3>Reportes de Ventas</h3>
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {reportHeader.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {saleReport.map((report, index) => (
              <tr key={report.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{report.name}</td>
                <td className="py-4 px-6">{report.description}</td>
                <td className="py-4 px-6">{report.createdAt}</td>
                <td className="py-4 px-6">
                  <DownloadConfirmation id={report.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 mt-8">
        <h3>Reportes de Perdida</h3>
        <table className="w-full max-w-7xl text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="text-left">
              {reportHeader.map(header => (
                <th key={header} scope="col" className="py-3 px-6">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lossReport.map((report, index) => (
              <tr key={report.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900/50 whitespace-nowrap">
                  {index + 1}
                </th>
                <td className="py-4 px-6">{report.name}</td>
                <td className="py-4 px-6">{report.description}</td>
                <td className="py-4 px-6">{report.createdAt}</td>
                <td className="py-4 px-6">
                  <DownloadConfirmation id={report.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenerateReport;
