import {useState, useEffect} from "react"
import Header from "./components/Header"
import "./css/global.css"
import "./css/estilo.css"

function App() {

  //HOOK-useState - manipula o estado da variável

  const [peso,setPeso]=useState(0);
  const [altura,setAltura]=useState(0);
  const [resultado,setResultado]=useState(0);
  const [mostrarresultado, setMostrarResultado]=useState(false);

  // FUNÇÃO CALCULAR IMC
  const calcularImc=()=>{
    const imc = peso /(altura*altura)
    return setResultado(imc.toFixed(2))
  }
  useEffect(()=>{
    // ?-IF / :-ELSE
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false)
  },[resultado]) //Retorno
 
  return (
    // fragment
    <div className="container">
      <div className="box">
     <Header/>
     <form>
      <div>
        <label htmlFor="altura"><span className="span">(exemplo: 1.80)</span></label>
        <input type="number" id="altura" placeholder="Digite sua Altura"
        // clicar fora ja funciona
        onBlur={({target})=>setAltura(parseFloat(target.value))}/>    
      </div>

      <div>
        <label htmlFor="peso"><span className="span">(exemplo: 80)</span></label>
        <input type="number" id="peso" placeholder="Digite seu Peso"
        onBlur={({target})=>setPeso(parseFloat(target.value))}/>
      </div>

      <button onClick={calcularImc}>Calcular</button>
     </form>
    </div>
    {/* mostra o resultado ao digitar altura e peso */}
    {mostrarresultado && (

      <Resultado resultado={resultado}/>
    )}

    </div>

  )
}

export default App