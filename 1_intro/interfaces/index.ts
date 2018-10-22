// Oppgave 1
export function interfaceByShape(typeWithShape): void {
    console.log(typeWithShape.propertyOfType)
}


interface LabelledValue{
}

export function printLabel(labelledObject): void{
    console.log(labelledObject.label)
}

// Oppgave 2 -> Lag et interface som passer med koden under. Bruk optional typer
interface SquareConfig {

}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);

// Funksjoner som typer. Assign mySearch til en funksjon som på en lovlig måten.
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;



