
alert("Here is while");

let value = 2;

while (value < 65537) {
    console.log(value);
    value = value * 2;

}
let totalSales = Math.ceil(Math.random() * (100-50) + 50);
console.log("The number of cones I can sell" + totalSales);

let totalSold = 0;

do
{
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1)
    console.log("My customer bought + conesBought");
    if((totalSold + conesBought) > totalSales) {
        console.log("No can do sir");
    }
    totalSales = totalSales(conesBought);
    console.log("I've sold this many + totalSold");

}while (totalSold < totalSales)
