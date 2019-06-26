// TYPEGUARDS
// Typeguards lar oss konkretisere typer som har muligheten til å være flere.
// Noen ting vi vil trenge:
// Type assertions: For å si at en type som kan være flere typer er en type kan man skrive:
// (variableName as T)..
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
        console.log("I have two wheels!")
    }
    brake() {
        console.log("BRAKE!")
    }
}

let vehicle = getVehicle(2);
// Begge potensielle typer kan bremse
vehicle.brake();
// Vi vet ikke hvilken type vi er og det er dermed usikkert om man kan kjøre på to hjul.
(vehicle as Motorcycle).driveOnTwoWheels();

// La oss konkretisere typene med type assertions! Bruk dette til å fikse koden over.
if ((vehicle as Car).driveOnFourWheels) {
    (vehicle as Car).driveOnFourWheels();
}
else if ((vehicle as Motorcycle).driveOnTwoWheels) {
    (vehicle as Motorcycle).driveOnTwoWheels();
}

// Fulfør koden under:
function isCar(vehicle: Car | Motorcycle): vehicle is Car {
    return (vehicle as Car).driveOnFourWheels !== undefined
}

if(isCar(vehicle)) {
    vehicle.driveOnFourWheels()
} else {
    vehicle.driveOnTwoWheels()
}
