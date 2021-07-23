"use strict"

fetch('https://api.github.com/users/Santana19996/events', {headers:
        {'Authorization':'token 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'}})
    .then(function(response) {
        console.log(response);
        return response.json();

    })



// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));

.then(function (jsonData){
    console.log(jsonData)
})


function wait (num){
    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            resolve(num)
        }, num)
    })
}