const ElevatorSystem = require("./elevatorSystem.js");
const numberOfFloors = 10;
const numberOfElevators = 3;

function test() {
  console.log("-------------------- Running ---------------------");
  let elevator = new ElevatorSystem(numberOfFloors, numberOfElevators);

  elevator.callElevator(4, 1);
  elevator.callElevator(2, 3);
  elevator.callElevator(7, 9);
}

test();
