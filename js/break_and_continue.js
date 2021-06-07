

//var picknumber;

//alert("Skip 27")

//while(true) {
   // picknumber = parseInt(prompt("Choose a odd number between 1 and 50"));
   // if(picknumber % 2 != 0) {
    //    break;
// picknumber % 2 !=0
  //  }
//}

//for (let index = 1; index < 50; index++) {
 //   if(index == picknumber) {
   //     console.log("Yikes! Skipping number: " + index);
   //     continue

   // }if (index %2 !=0) {
   //     console.log("Here is an odd number: " + index);




     //   }

//}


//var tree = 1;
//while(true) {
  //  tree = tree* 2;
 //   if (tree > 65536)
  //      break;
  //  console.log(tree)
//}


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

}while (totalSold < totalSales);
