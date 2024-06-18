import { SistemaSolar } from "./SistemaSolar"
import { Planeta } from "./Planeta"

export const Galaxia = ({nome}) => {
    return (
        <div>
            <h1>Galaxia: {nome}</h1>            
            <SistemaSolar galaxia={nome}>
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
    )
}