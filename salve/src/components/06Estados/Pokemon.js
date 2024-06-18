import { useState  } from "react"

export const Pokemon = () => {

    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let [counter, setCounter] = useState(1)

    const incrementarContador = () => {
        setCounter(contador => contador + 1)
    }
    const decrementContador = () => {
        if (counter < 2) return
        setCounter(contador => contador - 1)
    }
    const resetCounter = () => {
        setCounter(contador => contador = 1)
    }


    return (
        <div>
            <h2>ID: {counter}</h2>
            <img
                src={url+counter+".png"}
                alt= "Pokemon not found"
                width = {200}
            />
            <button
            onClick={()=>incrementarContador()}>
                Incrementar
            </button>

            <button

            onClick={()=>decrementContador()}>
                Decrementar
            </button>

            <button
            onClick={()=>resetCounter()}>
                Resetar
            </button>


        </div>
    )
}