//javascript object
// var rect = {
//     perimeter: (x, y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// };

var rect = require('./rectangle');

function solveRectangle(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b)

    if( l < 0 || b <0){
        console.log("l and b value should be greater than 0")
    }
    else{
        console.log("The area of the rectangle is " + rect.area(l,b));
        console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }

}


solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,5);