import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5  ">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-1 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      <div className="md:h-screen overflow-y-scroll">
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
      </div>
    </div>
  );
};

export default ListadoPacientes;
