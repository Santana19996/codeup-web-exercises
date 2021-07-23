const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let  user = users.filter(function (user) {
//     return user.languages.length >= 3
// })
//
//
//     console.log(user)

let filteredusers = users.filter(user => user.languages.length >= 3)
console.log(filteredusers)



var mapUser = users.map(function(user){
    return user.email
})
console.log(mapUser)

//4th Question Reduce
let totalYearsExp = users.reduce(function (accumulator,user ){
return accumulator + user.yearsOfExperience
},0)

console.log(totalYearsExp)

let AverageExp = totalYearsExp/users.length
console.log(AverageExp);


//5th Question



let longestEmail = users.reduce(function (currentLongest , user){
    if(user.email.length > currentLongest.email.length) {
        return user
    }else{
        return currentLongest
    }
}, users[0])

console.log(longestEmail.email)

//6th Question

let nameString = users.reduce(function (accumalator , user){
    if(accumalator === '') {
        return "Your instructors are:" + user.name
    }else{
        return accumalator + ', ' + user.name
    }
})
console.log("Your instructors are : " + nameString + ".");