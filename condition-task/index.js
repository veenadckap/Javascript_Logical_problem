let sum1 = prompt("Enter a value A");
let sum2 = prompt("Enter a value B");
let sum3 = prompt("Enter a value C");

if (sum1 == sum2 || sum2 == sum3 || sum3 == sum1) {
    if ((sum1 == sum2) && (sum2 == sum3)) {
        console.log("A ,B and C are equal")
    }
    if (sum1 == sum2) {

        if (sum3 > sum1) {
            console.log("A and B is equal" + " " + sum3 + " " + " is largest ");
        }

        else (sum3 < sum1)
        {
            console.log("A and B is equal" + " " + sum3 + " " + " is smaller ");
        }

    }

    if (sum2 == sum3) {

        if (sum1 > sum2) {
            console.log("B and C is equal" + " " + sum1 + "" + "is largest")
        }
        else (sum1 < sum2)
        {
            console.log("B and C is equal" + " " + sum1 + " " + "is smaller")
        }
    }

    if (sum3 == sum1) {
        if (sum2 > sum3) {
            console.log("A and C is equal" + " " + sum2 + " " + "is largest")
        }
        else (sum2 < sum3)

        {
            console.log("A and C is equal" + " " + sum2 + " " + "is smaller")
        }

    }
}

else {
    if ((sum1 > sum2) && (sum1 > sum3)) {
        console.log(+sum1 + " " + "is largest")
    }
    else if ((sum2 > sum1) && (sum2 > sum3)) {
        console.log(+sum2 + " " + "is largest")
    }
    else if ((sum3 > sum1) && (sum3 > sum1)) {
        console.log(+sum3 + " " + "is largest")
    }
}









