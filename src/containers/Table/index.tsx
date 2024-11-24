import axios from "axios";
import React from "react";
const TablaPacientes = () => {

    const [error, setError] = React.useState<string | null>('')
    const [data, setData] = React.useState<any>([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://pocki-api-env-1.eba-pprtwpab.us-east-1.elasticbeanstalk.com/api/getAgendamientos`)
                setData(response.data)
            } catch (err) {
                setError('Error consultando los agendamientos')
            }
        }
        fetchData() 
    }, [])

    return data.length ?  (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-md border border-gray-300">
        {/* Header */}
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-300">Nombre</th>
            <th className="px-4 py-2 text-left border border-gray-300">Tipo Documento</th>
            <th className="px-4 py-2 text-left border border-gray-300">Número Documento</th>
            <th className="px-4 py-2 text-left border border-gray-300">Plan de Salud</th>
            <th className="px-4 py-2 text-left border border-gray-300">Síntomas</th>
            <th className="px-4 py-2 text-left border border-gray-300">Sede</th>
            <th className="px-4 py-2 text-left border border-gray-300">Fecha y Hora de Cita</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data?.map((paciente: any) => (
            <tr key={paciente.id} className="hover:bg-secondary border-b border-gray-300">
              <td className="px-4 py-2 border border-gray-300">{paciente.nombre}</td>
              <td className="px-4 py-2 border border-gray-300">{paciente.tipo_documento}</td>
              <td className="px-4 py-2 border border-gray-300">{paciente.numero_documento}</td>
              <td className="px-4 py-2 border border-gray-300">{paciente.plan_de_salud}</td>
              <td className="px-4 py-2 border border-gray-300">{paciente.sintomas}</td>
              <td className="px-4 py-2 border border-gray-300">{paciente.sede}</td>
              <td className="px-4 py-2 border border-gray-300">
                {new Date(paciente.fecha_cita).toLocaleDateString()} -{" "}
                {paciente.hora_cita}
              </td>
            </tr>
          ))}
        </tbody>

        {/* Footer */}
        <tfoot className="bg-auxiliar">
          <tr>
            <td colSpan={7} className="text-center px-4 py-2 text-gray-700">
              Total Pacientes: {data?.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  ) : <p> {error} </p>;
};

export default TablaPacientes;
