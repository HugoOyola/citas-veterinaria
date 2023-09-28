const Paciente = ({ paciente, setPaciente }) => {
  const { mascota, propietario, email, alta, sintomas } = paciente;

  return (
    <div className="mx-5 my-4 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button type="button" className="py-2 px-5 bg-indigo-500 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" onClick={() => setPaciente(paciente)}>
          Editar
        </button>
        <button type="button" className="py-2 px-5 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
