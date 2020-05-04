
// Enums og never
// Nyttige linker:
// https://www.typescriptlang.org/docs/handbook/enums.html

// 1. Lag Enum for Media, få koden til å kompilere og sett typer på resten

enum Media {
    Newspaper,
    Magazine
}

function getMedia(mediaName: string): Media | string {
    if (mediaName === 'VG' || mediaName == 'Dagbladet') {
        return Media.Newspaper;
    }

    if (mediaName === 'Se og Hør') {
        return Media.Magazine;
    }

    return "Ukjent media";
}

let mediaType: Media | string = getMedia('VG'); // skal returnere Newspaper


// 2. Lag en Enum som heter Color. Den skal ha tre mulige verdier, de dere ser i
// oppgaven. Rett opp eventuelle feil så ting kompilerer fint.
// 3. Se hva som skjer når man legger til ett nytt alternativ i enumen som ikke
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
    throw new Error("Didn't expect to get here");
}
