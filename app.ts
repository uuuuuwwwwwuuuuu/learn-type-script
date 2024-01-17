class Vehicle {
    run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle
}

function logId<T extends string | number, Y>(id: T, additionalData: Y): {id: T, data: Y} {
    console.log(id);
    console.log(additionalData);
    return {id, data: additionalData};
}