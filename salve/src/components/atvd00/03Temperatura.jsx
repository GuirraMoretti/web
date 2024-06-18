export const Temperature = () =>{
    function cTOf(c) {
        return (9*c)/5 + 32
    }
    function fTOc(f) {
        return (5*(f-32))/9
    }
    function kelvin(k) {
        //Celcius 
        let c = k - 273
        //Fahrenheit
        let f = (9*(k-273))/5+32

        return {c,f}
    }
    return <div>
        <p>Celsius para farenheit: {cTOf(0)}</p>
        <p>{fTOc(0)}</p>
        <p>{kelvin(0).f}</p>
        <p>{kelvin(0).c}</p>
    </div>
}