// oude style loops

const colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//nieuwe stijl: array

const array1 = ['yellow', 'blue', 'red', 'orange'];

array1.forEach(color => console.log(color));

// extra vragen 
// 1: 5 (while), 2(loop)
// 2: 1
// 3: array is makkelijker leesbaar, logischere benamingen
//4. JA:

const myColors = {

    colorWall: 'red',
    colorFruit: 'yellow',
    ColorClothes: 'blue',
    ColorHair: 'orange',
    ColorBag: 'pink',
};

for (i in myColors) {
    console.log(myColors[i]);
}