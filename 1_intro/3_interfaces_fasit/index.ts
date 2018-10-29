export function interfaceByShape(typeWithShape: {propertyOfType: string}): void {
    console.log(typeWithShape.propertyOfType)
}

interface LabeledValue{
    label: string
}

export function printLabel(labelledObject: LabeledValue){
    console.log(labelledObject.label)
}

let temp: LabelledValueMore = {label: "teste", labelMore: "evenMore"};
console.log(temp);

// Oppgave 2 -> Lag et interface som passer med koden under
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

//Oppgave 3. Som vi lærte så fokuserer typescript på structural typing.
// Lag et interface som er et supersett av LabeledValue og pass det til printLabel.
interface LabelledValueMore{
    label: string
    labelMore: string
}


