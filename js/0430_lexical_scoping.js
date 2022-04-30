
let suhong = "SU HONG"
let global = "global string"

{
    let suhong = "su hong"
    let local = "local string"
    console.log(suhong) // su hong 출력
    console.log(global) // global string 출력
}

console.log(suhong) // SU HONG 출력
// console.log(local) // ReferenceError: local is not defined


// outerFunction = function(x) {

//     innerFunction = function() {
//         console.log(x++)
//     }

//     innerFunction() // 0
//     innerFunction() // 1
//     innerFunction() // 2
//     innerFunction() // 3
//     innerFunction() // 4
// }

// outerFunction(0) // 실행

outerFunction = function(x) {

    innerFunction = function() {
        console.log(x++)
    }

    return innerFunction
}

countFrom0 = outerFunction(0); // x = 0 부터 시작하는 innerFunction
countFrom10 = outerFunction(10); // x = 10 으로 시작하는 innerFunction

countFrom0() // 0
countFrom0() // 1
countFrom0() // 2
countFrom0() // 3
countFrom0() // 4

countFrom10() // 10
countFrom10() // 11
countFrom10() // 12
countFrom10() // 13
countFrom10() // 14
