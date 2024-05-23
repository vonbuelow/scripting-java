/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const myPhone = {
    name: "iPhone 10",
    case: "WildFlower",
    color: "Black",
    gb: 128, 
    charging: false, 
    battery: 76,
    toggleCharging: function (chargingStatus) {
        this.charging = chargingStatus;
        console.log(`Charging status changed.`);
    },
};

const backpack = {
    mainPocket: {
        items: ["book", "sticky notes", "camera"],
        open:  false,
    },
    pockets: 10,
    color: "grey",
    full: false,
};

console.log(myPhone);
console.log(backpack);