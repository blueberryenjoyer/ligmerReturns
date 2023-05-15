/*
You're an up and coming developer for your company, but you've run into a little problem - you've accidentally saved all your company's data as arrays instead of objects! Now, your coworkers will not be able to know what the datasets all represent, and that could land you in huge trouble with your boss…

Wait, there might be a fix. You notice that each dataset is listed in the following order of: username, then password, then email.

For example:
let sampleDataset = ["oprah1", "yougetacar", "oprah@oprah.com"]

Write a function called labelData that takes in one parameter called companyData, which you can expect will be a multidimensional array, where each nested array contains data like the example above. Your function should, for each nested array, print to the console a string that looks like the following: 

"Username is: oprah1 Password is: yougetacar Email is: oprah@oprah.com" 

Lastly, have your function output a string value of "Data Labelling Completed". 

Test Example:
labelData([
    ["oprah1", "yougetacar", "oprah@oprah.com"], 
    ["bob123", "bob1234", "bob@gmail.com"], 
    ["beyonce", "imbeyonce", "beyonce@gmail.com"]
])

Would result in:
    "Username is: oprah1 Password is: yougetacar Email is: oprah@oprah.com"
    "Username is: bob123 Password is: bob1234 Email is: bob@gmail.com"
    "Username is: beyonce Password is: imbeyonce Email is: beyonce@gmail.com"
    "Data Labelling Completed"
*/

let data = ([
    ["oprah1", "yougetacar", "oprah@oprah.com"],
    ["bob123", "bob1234", "bob@gmail.com"],
    ["beyonce", "imbeyonce", "beyonce@gmail.com"]
])

function labelData(companyData) {
    for (let index = 0; index < companyData.length; index++) {
        console.log(`your username is: ${companyData[index][0]}`)
        console.log(`your password is: ${companyData[index][1]}`)
        console.log(`your email is: ${companyData[index][2]}`)
    }
    return `data labelling complete`
}


console.log(labelData(data))



