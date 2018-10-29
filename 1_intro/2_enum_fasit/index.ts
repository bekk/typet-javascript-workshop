enum Color{YELLOW, GREEN, BLUE}

export function colorsAreCool() {
    console.log(switchOnEnums(Color.YELLOW))
}

export function switchOnEnums(colors: Color) {
    switch (colors) {
        case Color.YELLOW: {
            return "Gul er kult"
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

export function neverHappens(neverEver: never): void{

}
