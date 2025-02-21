import { useState, useEffect } from "react";

function Temporizador() {

  //cracion de los estados de la variables
  const [segundos, setSegundos] = useState(0);
  const [tiempoTotal, setTiempoTotal] = useState(null);
  const [enEjecucion, setEnEjecucion] = useState(false);

  //el useEffebct permite ejecutar efectos en los componentes
  useEffect(() => {
    let intervalo;

    //si la variable enEjecucion y la variable segundos es menos que la variable tiempo total...
    if (enEjecucion && segundos < tiempoTotal) {
      //el intervalo es un intervalo de 1 segundo, que se modifica sumando 1 cada segundo que pasa
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    //se devuelve un reinicio del intervalo
    return () => clearInterval(intervalo);
  }, [segundos, tiempoTotal]);

  const iniciarConteo = () => {
    //se obtiene el valor introducido en el html
    const inputTiempo = parseInt(document.getElementById("numero").value);
    //si es un numero y el tiempo introducido es mayor a 0...
    if (!isNaN(inputTiempo) && inputTiempo > 0) 
      {
        //se modifica el tiempo total por el itroducido
      setTiempoTotal(inputTiempo);
      //se modifica los segundos a 0, aunque esta de inicio a 0
      setSegundos(0);
      //se modifica la ejecucion a true, indicando que ha llegado al final del conteo
      setEnEjecucion(true);
    }
  };

 

  return (
    <div>
      {!enEjecucion && tiempoTotal === null && (
        <div>
          <p>¿Cuántos segundos vamos a contar?</p>
          <input type="number" id="numero" />
          <button onClick={iniciarConteo}>Iniciar</button>
        </div>
      )}

      <h2>Contador</h2>
      {enEjecucion && (
        <p>
           {segundos} de {tiempoTotal}
        </p>
      )}
    </div>
  );
}

export default Temporizador;
