let user = {
    name: 'crystal',
    age:'30',
    email: 'oscarsantana213@gmail.com',
    location: 'texas',
    blogs:['why i hate rain', 'and also heat']
}
console.log(user)
console.log(user.name); //this returns crystal

user.age = 35
console.log(user.age)    //Overwrite Values


console.log(user['email'])   //another way to overwrite/ update


//Adding Methods to Objects ☟☟☟☟☟☟


let myCar = {
    make: ['Ford'],
    model: 'Mustang',
    year: 1969,
    login: function() {
        console.log('the user logged in')
    },
   logout:function(){
        console.log('the user is outtie')
   },
    logmake:function(){
      //console.log(this.make)
        console.log('This is the the type of car')
        this.make.forEach(make => {
            console.log(make)
        })
    }
};
myCar.logmake()
myCar.logout()
myCar.login();







//Math Object


 