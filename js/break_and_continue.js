

var picknumber;

alert("Skip 27")

while(true) {
   picknumber = parseInt(prompt("Choose a odd number between 1 and 50"));
   if(picknumber % 2 != 0) {
       break;
picknumber % 2 !=0
   }
}

for (let index = 1; index < 50; index++) {
   if(index == picknumber) {
       console.log("Yikes! Skipping number: " + index);
       continue

   }if (index %2 !=0) {
       console.log("Here is an odd number: " + index);




       }

}


var tree = 1;
while(true) {
   tree = tree* 2;
   if (tree > 65536)
       break;
   console.log(tree)
}


