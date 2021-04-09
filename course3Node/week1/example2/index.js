//javascript object
// var rect = {
//     perimeter: (x, y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// };

var rect = require('./rectangle');

function solveRectangle(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b)

    rect(l,b, (err, rectangle) => {
        if(err){
            console.log("ERROR",err.message)
        }
        else{
            console.log("the area of the rectangle for "+l + " and " + b + " is " + rectangle.area() );
            console.log("the perimeter of the rectangle for "+l + " and " + b + " is " + rectangle.perimeter() );
        }

    });

    console.log("The statement after func is called");

}


solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,5);