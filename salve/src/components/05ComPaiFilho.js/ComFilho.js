export const ComFilho = ({ mensagem, sendmsgtodad }) => (
    <>
        <p>Mensagem do Pai: {mensagem}</p>
        <button
            onClick={() => {
                sendmsgtodad("Oi pai, tudo bem?")
            } }
        >
            Enviar mensagem para o pai
        </button>
    </>
)