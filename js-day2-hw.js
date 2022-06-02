//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(person3);  




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
console.log('\n\nCustom Object Prototypes:');
// Create our Person Prototype
class People {
  constructor(name, age=34){
    this.name = name;
    this.age = age;
  }

  printInfo(){
    console.log(`${this.name} is ${this.age} years old.`)
  }

}

let person1 = new People('Cliff');
console.log(typeof person1);
person1.printInfo();

let person4 = new People('Jeff',44);
console.log(typeof person4);
person4.printInfo();
  
  
let person2 = new People('Jane');
console.log(typeof person2);
person2.printInfo();



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// 1.  Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    var arr = str.split('')
    var res = []
 
    for(let i = 0; i<arr.length; i+=2){
      if(arr[i+1]) res.push(arr[i]+arr[i+1])
      else res.push(arr[i]+'_')
    }
 
   return res
 }


//  2. Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }