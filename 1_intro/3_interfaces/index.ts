// Oppgave 1. Assign en type til typeWithShape som gjør at vi vet hvilke verdier som er tilgjengelige.
export function interfaceByShape(typeWithShape): void {
    console.log(typeWithShape.propertyOfType)
}

interface LabelledValue{
}

export function printLabel(labelledObject: LabelledValue): void{
    console.log(labelledObject.label)
}

//Oppgave 2. Som vi lærte så fokuserer typescript på structural typing.
// Lag et interface som er et supersett av LabeledValue og pass det til printLabel.
interface LabelledValueExpanded{
}

const labeledValueWithMore: LabelledValueExpanded;
printLabel(labeledValueWithMore);

// Oppgave 3 -> Lag et interface som passer med koden under. Bruk optional typer / nullable types
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

// Oppgave 4. Funksjoner som typer. Assign mySearch til en funksjon som gjør at koden er lovlig
interface SearchFunc {
    (source: string, target: string): boolean;
}

let mySearch: SearchFunc = () => {
};
