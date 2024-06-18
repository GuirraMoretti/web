import { Planeta } from "./Planeta"
import React from "react"

export const SistemaSolar = ({ children, galaxia }) => {
    return (
        <>
            <h2>Sistema Solar da Galaxia {galaxia}</h2>
            {React.Children.map(
                children, (elemento) => {
                    return React.cloneElement(elemento, { galaxia })
                }
            )}
        </>
    )
}