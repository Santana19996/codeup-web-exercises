(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**

     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split('|')
    console.log(planetsArray)

    // console.log(planetsArray);



   //  * Create a string with <br> tags between each planet. console.log() your
   //  * results. Why might this be useful?

     var pop = "Mercury<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
     console.log(pop)

     //* BONUS:
   //  * Create another string that would display your planets in an undordered
   //  * list. You will need an opening AND closing <ul> tags around the entire
    // * string, and <li> tags around each planet.

         let sakura = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";
     console.log(sakura)
    document.write(sakura)

})();
