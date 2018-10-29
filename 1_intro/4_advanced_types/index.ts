// TYPEGUARDS
// Typeguards lar oss konkretisere typer som har muligheten til å være flere.
// Noen ting vi vil trenge:
// Type assertions: For å si at en type som kan være flere typer er en type kan man skrive:
// (<T>variableName)..
// Et litt konstruert eksempel vi kan jobbe videre med ser slik ut.
interface Car {
    driveOnFourWheels();
    brake();
}

interface Motorcycle {
    driveOnTwoWheels();
    brake();
}

function getVehicle(vehicleWheelCount: number) : Car | Motorcycle {
    if (vehicleWheelCount === 2) {
        return new Toyota()
    }
    if(vehicleWheelCount === 4) {
        return new Harley()
    }
}

class Toyota implements Car {
    driveOnFourWheels() {
        console.log("I have four wheels!")
    }
    brake() {
        console.log("BRAKE!")
    }
}

class Harley implements Motorcycle {
    driveOnTwoWheels() {
        console.log("I have four wheels!")
    }
    brake() {
        console.log("BRAKE!")
    }
}

let vehicle = getVehicle(2);
// Begge potensielle typer kan bremse
vehicle.brake();
// Vi vet ikke hvilken type vi er og det er dermed usikkert om man kan kjøre på to hjul.
vehicle.driveOnTwoWheels();

// La oss konkretisere typene med type assertions! Bruk dette til å fikse koden over.
if ((<Car>vehicle).driveOnFourWheels) {
    (<Car>vehicle).driveOnFourWheels();
}
else if ((<Motorcycle>vehicle).driveOnTwoWheels) {
    (<Motorcycle>vehicle).driveOnTwoWheels();
}

// Fulfør koden under:
function isCar(vehicle): vehicle is Car {
}

if(isCar(vehicle)) {
    vehicle.driveOnFourWheels()
} else {
    vehicle.driveOnTwoWheels()
}
