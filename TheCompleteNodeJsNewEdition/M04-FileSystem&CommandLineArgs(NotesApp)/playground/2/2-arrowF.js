// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

//const square = (x) => x * x
//console.log(square(3))

// const event = {
//     name: 'bday p',
//     printGL: function () {
//         console.log('Guest list for ', this.name)
//     }
// }

//arrow function avoid this property
const event = {
    name: 'bday p',
    gL: ['s', 'a', 'b'],
    printGL() {
        console.log('Guest list for ', this.name);

        //here we are using arrow function because arrow fun dont use its own this property so now this refers to it parent this property
        this.gL.forEach((guest) => {
            console.log(guest + ' is attending' + this.name);
        })
    }
}

event.printGL();
