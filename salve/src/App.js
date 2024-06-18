//import { MeusDados } from "./components/atvd00/01MeusDados";
//import { MeusDados1 } from "./components/atvd00/02MeusDados";
//import { Temperature } from "./components/atvd00/03Temperatura";
//import { SistemaSolar } from "./components/04Children/SistemaSolar";
//import { Planeta } from "./components/04Children/Planeta";
//import { Galaxia } from "./components/04Children/Galaxia";
//import { ComPai } from "./components/05ComPaiFilho.js/ComPai";
//import { Estado } from "./components/06Estados/Estado";
//import { Pokemon } from "./components/06Estados/Pokemon";
import { useEffect, useState } from "react";
import { instance } from "./components/API ESTUDO/IBGE";
/*
function App() {
  return (
    <div>
      <SistemaSolar >
        <p>Sistema Solar</p>
        <hr />
        <Planeta
          nome="Mercurio"
          tipo="Rochoso"
          posicao="1"
        />
        <hr />
        <Planeta
          nome="Venus"
          tipo="Rochoso"
          posicao="2"
        />
        <hr />
        <Planeta
          nome="Terra"
          tipo="Rochoso"
          posicao="3"
        />
        <hr />
        <Planeta
          nome="Marte"
          tipo="Rochoso"
          posicao="4"
        />
      </SistemaSolar>
    </div>
  );
}
*/

function App() {
  //const [bancos, setBancos] = useState()

  useEffect(()=> {
    instance.get("/banks/v1")
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  return (
    <div>
      <h1>Ola Mundo</h1>

    </div>
  )
  
}
export default App;
