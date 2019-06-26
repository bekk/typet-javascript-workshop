// Enums og never
// 1. Lag en Enum som heter Color. Den skal ha tre mulige verdier, de dere ser i
// oppgaven. Rett opp eventuelle feil så ting kompilerer fint.
// 2. Se hva som skjer når man legger til ett nytt alternativ i enumen som ikke
// håndteres av funksjonen.

enum Color {
  YELLOW,
  GREEN,
  BLUE
}

export function colorsAreCool() {
    console.log(switchOnEnums(Color.YELLOW))
}

export function switchOnEnums(colors: Color) {
    switch (colors) {
        case Color.YELLOW: {
            return "Gult er kult"
        }
        case Color.GREEN: {
            return "Grønt er skjønt"
        }
        case Color.BLUE: {
            return "Blått er rått"
        }
        default:
            neverHappens(colors);
    }
}

export function neverHappens(neverEver: never): void {

}
