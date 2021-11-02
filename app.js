console.log("Hello World");


// Table Print

// var tableNumber = parseInt(prompt("Enter your Table Number"));
// var tableLength = parseInt(prompt("Enter your Table Length"));

// document.write("Table Number: " + tableNumber + "<br>" + "Table Length: " + tableLength + "<br><br>");

// for (var i = 1; i <= tableLength; i++) {
//     document.write(tableNumber + " x" + " " + i + " " + "=" + " " + tableNumber * i + "<br>");
// }


// var cities = ["Paris", "Turin", "New York", "London"];

// console.log(cities.length);

// for (var i = 0; i < cities.length; i++) {
//     document.write(cities[i] + "<br>");
// }



// var cities = ["Paris", "Turin", "New York", "London"];


// var UserCity = prompt("Enter your city Name");

// var flag = true;

// for (var i = 0; i < cities.length; i++) {
//     if (UserCity === cities[i]) {
//         alert("World Best Tours");
//         flag = false;
//     }
// }

// if (flag === true) {
//     alert("Your CITY is Undefined");
// }



for (var x = 0; x < 5; x++) {

    for (var j = 0; j <= x; j++) {
        document.write("*")
    }

    document.write("<br>")


}


document.write("<table border='1'>")

document.write("<tr>" +
    "<td>" + "Mohsin Ali Khan" + "</td>" +
    "<td>" + "19" + "</td>" +
    "<td>" + "MALE" + "</td>" +
    "<td>" + "FrontEnd Developer" + "</td>"

    + "</tr>")

document.write("</table>")