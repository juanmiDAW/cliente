import { useState, useEffect } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [tiempoTotal, setTiempoTotal] = useState(null);
  const [enEjecucion, setEnEjecucion] = useState(false);

  useEffect(() => {
    let intervalo;

    if (enEjecucion && segundos < tiempoTotal) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [segundos, tiempoTotal]);

  const iniciarConteo = () => {
    const inputTiempo = parseInt(document.getElementById("numero").value);
    if (!isNaN(inputTiempo) && inputTiempo > 0) {
      setTiempoTotal(inputTiempo);
      setSegundos(0);
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
