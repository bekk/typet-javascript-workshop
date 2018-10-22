// Enums og never
// Lag en Enum som settes som typen til colors. Den skal ha tre mulige verdier, de dere ser i oppgaven.
// Se hva som skjer når man legger til en ny mulighet i enumen som ikke håndteres av funksjonen.
// Forsøk å forklar hvorfor.

export function colorsAreCool() {
    console.log(switchOnEnums())
}

export function switchOnEnums(colors){
    switch (colors) {
        case Color.YELLOW: {
        }
        case Color.GREEN: {
        }
        case Color.BLUE: {
        }
        default:
            throw new UnreachableCaseError(colors);

    }
}

class UnreachableCaseError extends Error {
    constructor(val: never) {
        super(`Unreachable case: ${val}`);
    }
}