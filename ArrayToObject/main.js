function arrayToObject(array) {
    let arrayOfProperties = [];
    array.forEach(item => {
        arrayOfProperties.push(...getValueKeyPairs(item));
    });
    return Object.fromEntries(arrayOfProperties);
}

function getValueKeyPairs(object) {
    return Object.entries(object).map(prop => prop.reverse());
}

let array = [{k1: "v1"}, {k2: "v2"}, {k3: "v3"}, {k4: "v4", k5: "v5"}];
let result = arrayToObject(array);
console.log(array);
console.log(result);