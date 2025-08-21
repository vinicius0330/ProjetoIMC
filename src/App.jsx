import Header from "./components/Header"

function App() {
 
  return (
    // fragment
    <div className="container">
      <div className="box">
     <Header/>
     <form>
      <div>
        <label htmlFor="altura"><span className="span">(exemplo: 1.80)</span></label>
        <input type="number" id="altura" placeholder="Digite sua Altura"
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
    {mostraResultado && (

      <Resultado resultado={resultado}/>
    )}

    </div>

  )
}

export default App