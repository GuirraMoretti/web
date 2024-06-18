import { ComFilho } from "./ComFilho"

export const ComPai = () => {

    function recebermsgdoFilho(mensagem) {
        alert("Recebi do meu filho: " + mensagem)
    }

    return (
        <>
            <ComFilho mensagem= "Oi" sendmsgtodad={recebermsgdoFilho}/>
        </>
    )
}