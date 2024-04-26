"use strict";

// class User{
//     register(){
//         console.log("User registered...")
//     }
// }

function testVar() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a);
    }
    console.log(a);
}

testVar();