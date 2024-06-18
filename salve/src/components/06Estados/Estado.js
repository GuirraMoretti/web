import { useState  } from "react"

export const Estado = () => {

    //let contador = 0 static

    let[contador,setCounter] = useState(0)

    const incrementarContador = () => {
        //contador ++
        setCounter(contador => contador + 1)
    }
    
    return(
        <div>
            <h2>Contador: {contador}</h2>
            <button
                onClick={() => incrementarContador()}
            >
                Incrementar contador!
            </button>
        </div>
    )
}