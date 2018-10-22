enum Color{YELLOW, GREEN, BLUE, RED}

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
            throw new UnreachableCaseError(colors);
    }
}

class UnreachableCaseError extends Error {
    constructor(val: never) {
        super(`Unreachable case: ${val}`);
    }
}