// Enums og never
// 1. Lag en Enum som heter Color. Den skal ha tre mulige verdier, de dere ser i
// oppgaven. Rett opp eventuelle feil så ting kompilerer fint.
// 2. Se hva som skjer når man legger til ett nytt alternativ i enumen som ikke
// håndteres av funksjonen.

export function colorsAreCool() {
    console.log(switchOnEnums());
}

export function switchOnEnums(color: Color){
    switch (color) {
        case Color.YELLOW: {
        }
        case Color.GREEN: {
        }
        case Color.BLUE: {
        }
        default:
            neverHappens(color);
    }
}

export function neverHappens(neverEver: never): void{

}
