let uniqueUser = {
    "id": "0010",
    "name": "Alice 10",
    "address": {
        "street": "1100 Main St",
        "city": "City 100"
    },
    "hobbies": [
        "Reading 10",
        "Hiking 10"
    ]
};

function printFullObject(fullObject) {
    Object.keys(fullObject).forEach(key => {
        let value = fullObject[key];
        if (typeof value === 'object') {
            console.log(key);
            printFullObject(value);
        } else {
            console.log(key + ": " + value);
        }
    });                 
}

function printLastHobby(user) {
    let lastHobbie = user.hobbies[user.hobbies.length - 1];              
    console.log("Останнє хобі:" + lastHobbie);
}

function printFormattedAddress(user) {                 
    let userAdress = user.address;
    let formattedAddress = "address: " + userAdress.city + ", " + userAdress.street;
    console.log(formattedAddress);
}

printLastHobby(uniqueUser);
printFormattedAddress(uniqueUser);
printFullObject(uniqueUser)