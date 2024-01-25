import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
          <spanc className="text-indigo-600 font-bold "> Pacientes y Citas</spanc>
        </p>

        {pacientes.map( (paciente) => (
            <Paciente
              key= {paciente.id}
              paciente= {paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
            
            />
          ))}
      </>
      ) : (
        
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <spanc className="text-indigo-600 font-bold "> y aparecerán en este lugar</spanc>
          </p>
        </>
      )}

          

          
          

      </div>
    )
  }
  
  export default ListadoPacientes

  