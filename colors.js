// oude style loops

var colors = ["yellow", "blue", "red", "orange"];

var i = 0;
while (i < colors.length) {
    console.log(colors[i++]);
}

for (i = 0; i < colors.length;) {
    console.log(colors[i++]);
}

//nieuwe stijl: array

const array1 = ['yellow', 'blue', 'red', 'orange'];

array1.forEach(element => console.log(element));

// extra vragen 
// 1: 2
// 2: 1
// 3: array is makkelijker leesbaar, logischere benamingen
//4. JA:

const user = {

    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

// iterate over the user object

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}