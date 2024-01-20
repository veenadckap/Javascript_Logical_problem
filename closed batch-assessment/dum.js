"use strict"
// ------------------------------sum 1-----------------------------------------------------------
{
    let a = value("welcome to DCKAP organization")
    function value(x) {
        let b = x.split(" ")
        console.log(b)
        for (let i = 0; i < b.length; i++) {
            if (b[i].length >= 5) {
                let reverse = '';
                for (let j = b[i].length - 1; j >= 0; j--) {
                    reverse += b[i][j];
                }
                b[i] = reverse;
            }
        }
        console.log(b.join(" "))
    }
}
// ---------------------------------------sum 2------------------------------------------------------------
{
    let a = 'dckap'
    let b = a.split('')
    console.log(b)
    let alpha = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < a.length; i++) {
        let x = alpha.indexOf(b[i])
        console.log(x)
        var y = x + 1
        b[i] = y
        console.log(y)
    }
    console.log(b.join(' '))
}
// -------------------------------------sum 3-----------------------------------------------------------------------------
{
    let a = 'dckap'
    let arr = []

    for (let i = 0; i < a.length; i++) {
        let arr1 = a.split('')
        console.log(arr1);
        arr1[i] = arr1[i].toUpperCase()
        console.log(arr1)       
        arr[i] = arr1.join("")
        console.log(arr)

    }
    console.log(arr);
}
// ---------------------------------------------------------------------------------------------------------------------