/* Description
Let's have some more practice with arrays! In this exercise we expect you to become more acquainted with arrays, and what we can do with them.
So we start with an array of last names, and from there you're going to perform a bunch of operations in it!

Instructions
1. ✔ Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
2. ✔ Have a prompt that adds your last name to the array
3. ✔ Have an output that has the names sorted alphabetically
4. ✔ Have an output that tells you what is the position of your name in the sorted array
5. ✔ Have an output that Uppercase's all names in the array

Tips
- Try to keep track of your data, and when it is being changed
- Remember to google docs if you don't know or remember certain details

Challenge
Let's take it a step further and group each sorted name with its upper-cased one in a sub-array, which in its turn will go inside another array to group it all together. 

It should look like this in your output:

[  ["Surname A", "SURNAME A"], ["Surname B", "SURNAME B"] ...other names ]

Output the result to the console
*/

//STEP 1
const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]
console.log(`
Here is the list of names:`)
for (const name of names) {
    console.log(name)
}                               

//STEP 2
let yourName = prompt(`What's your last name?`)
yourName = yourName.charAt(0).toUpperCase() + yourName.slice(1)
names.push(yourName)
console.log(`
Here is the list of names wih your name added at the end:`)
for (const name of names) {
    console.log(name)
}


//STEP 3
names.sort()
console.log(`
Here are the names alphabetised:`)
for (const name of names) {
    console.log(name)
}

//STEP 4
console.log(`
Your name is at the ${names.indexOf(yourName)} index position of the names array.`)

//STEP 5
const capatalisedNames = []
console.log(`
Here are the names UPPERCASED:`)
for (const name of names) {
    console.log(name.toUpperCase())
    capatalisedNames.push(name.toUpperCase())
}


//CHALLENGE
const combinedArray = []
for (const name of names) {
    combinedArray.push([name, name.toUpperCase()])
}
console.log(combinedArray)
