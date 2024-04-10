/*
export const MeusDados1 = () => {
    
    const propsMeusDados = {nome: "Joao", curso:"SI", universidade:"UFC"};

    const {nome, curso, universidade} = propsMeusDados;
    return <div>
        <h1>Nome: {nome}</h1>
        <h1>Curso: {curso}</h1>
        <h1>Universidade: {universidade}</h1>
    </div>
}
*/

export const MeusDados1 = ({nome, curso, universidade}) => {
    return <div>
        <h1>Nome: {nome}</h1>
        <h1>Curso: {curso}</h1>
        <h1>Universidade: {universidade}</h1>
    </div>
}