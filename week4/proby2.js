// The Dunder Mifflin paper company (you know, the one from "the Office") is undergoing some changes! They have decided to rearrange the seating assignments for their sales team in their main meeting room. You have been given the job of making these changes. In this problem, you have access to some data stored on the company HR system.

// Here's what the data might look like: 

// let officeStaff = [ "Michael Scott", "Jim Halpert", "Pam Beesly", "Dwight Schrute", "Angela Martin", "Stanley Hudson"]; 

// Write a function called fixSeating that takes in two parameters: one called seatNumber (which you can expect will be an integer value argument) and another called staffMember (which you can expect will be a string argument, representing someone's name). Your function should remove the person sitting at that seatNumber index location from the officeStaff array, and replace them with the staffMember. Your function should also move the person who was removed from the seating arrangement to the end of the officeStaff array. Lastly, your function should return the newly updated officeStaff array. 

// For example: 

// If you were provided the following, fixSeating(3, "Creed Bratton") // would return: 

// /* [ "Michael Scott", "Jim Halpert", "Pam Beesly", "Creed Bratton", "Angela Martin", "Stanley Hudson", "Dwight Schrute"]; */

let officeStaff = ["Michael Scott", "Jim Halpert", "Pam Beesly", "Dwight Schrute", "Angela Martin", "Stanley Hudson"];

function fixSeating(seat, staff) {
    officeStaff[seat] = staff
    return officeStaff
}

console.log(fixSeating(1, 'ligma'))