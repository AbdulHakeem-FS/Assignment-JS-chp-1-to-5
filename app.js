// Chapter 1
// Exercise 1

// alert("Wlcome to my Website");

// Exercise 2
// alert("Error! Please enter a valid password.");

// Exercise 3
// alert("Welcome to JS Land...\nHappy Coding!");

// Exercise 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// Exercise 5
// console.log("Hello... I can run JS through my web browser's console");

// Exercise 6
// 1. Include script in head or body section
// 2. External file
// 3. At the end of body section

// Chapter 2
// Exercise 1
// var username;

// Exercise 2
// var myName = "Hyder Lodhi";

// Exercise 3
// var message;
// message = "Hello World";
// alert(message);

// Exercise 4
// var name = "Hyder Lodhi";
// var age = "19 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);

// Exercise 5
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// Exercise 6
// var email = "hyderlodhi3@gmail.com";
// alert("My email address is " + email);

// Exercise 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// Exercise 8
// document.writeln("Yah! I can write HTML content through JavaScript");

// Exercise 9
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);

// Chapter 3
// Exercise 1
// var age = 19;
// alert("I am " + age + " years old");

// Exercise 2
// var visit = 14;
// alert("You have visited this site " + visit + " times");

// Exercise 3
// var birthYear = 2004;
// document.writeln("My birth year is " + birthYear + "<br>Data type of my declared variable is number");

// Exercise 4
// var visitorName = "John Doe";
// var productTitle = "T-shirt(s)";
// var quantity = 5;
// document.writeln(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");


// Chapter 4
// Exercise 1
// var a, b, c;

// Exercise 2
// Legal Variables
// var myName;
// var $name;
// var name1;
// var _name;
// var userName;

// Illegal Variables
// var 1name;
// var my-name;
// var my name;
// var @name;
// var alert;

// Exercise 3
// document.writeln("<h1>Rules for naming JS variables</h1><br>");
// document.writeln("Variable names can only contain letters, numbers, $ and _. For example $my_1stVariable<br>");
// document.writeln("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
// document.writeln("Variable names are case sensitive<br>");
// document.writeln("Variable names should not be JS keywords");

// Chapter 5
// Exercise 1
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// document.writeln("Sum of " + num1 + " and " + num2 + " is " + sum);

// Exercise 2
// var num1 = 3;
// var num2 = 5;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;
// document.writeln("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");
// document.writeln("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");
// document.writeln("Division of " + num1 + " and " + num2 + " is " + div + "<br>");
// document.writeln("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br>");

// Exercise 3
// var num;
// document.writeln("Value after variable declaration is: " + num + "<br>");
// num = 5;
// document.writeln("Initial value: " + num + "<br>");
// num++;
// document.writeln("Value after increment is: " + num + "<br>");
// num = num + 7;
// document.writeln("Value after addition is: " + num + "<br>");
// num--;
// document.writeln("Value after decrement is: " + num + "<br>");
// num = num % 3;
// document.writeln("The remainder is: " + num + "<br>");

// Exercise 4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// Exercise 5
// var num = 4;
// document.writeln("Table of " + num + "<br>");
//     document.writeln(num + " x 1 = " + (num*1) + "<br>");
//     document.writeln(num + " x 2 = " + (num*2) + "<br>");
//     document.writeln(num + " x 3 = " + (num*3) + "<br>");
//     document.writeln(num + " x 4 = " + (num*4) + "<br>");
//     document.writeln(num + " x 5 = " + (num*5) + "<br>");
//     document.writeln(num + " x 6 = " + (num*6) + "<br>");
//     document.writeln(num + " x 7 = " + (num*7) + "<br>");
//     document.writeln(num + " x 8 = " + (num*8) + "<br>");
//     document.writeln(num + " x 9 = " + (num*9) + "<br>");
//     document.writeln(num + " x 10 = " + (num*10) + "<br>");

// Exercise 6
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F<br>");
// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C<br>");

// Exercise 7
// var item1Price = 650;
// var item2Price = 100;
// var quantity1 = 3
// var quantity2 = 7
// var shipping = 100

// document.writeln("Price of item 1 is " + item1Price)
// document.writeln("<br> Quantity of item 1 is " + quantity1)
// document.writeln("<br> Price of item 2 is " + item2Price)
// document.writeln("<br> Quantity of item 2 is " + quantity2)
// document.writeln("<br> Shipping Charges: " + shipping)

// document.writeln("<br> <br> Total cost of your order is " + (item1Price * quantity1 + item2Price * quantity2 + shipping))

// Exercise 7
// var totalMarks = 980;
// var obtainedMarks = 804;
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.writeln("Total Marks: " + totalMarks);
// document.writeln("<br>Obtained Marks: " + obtainedMarks);
// document.writeln("<br>Percentage: " + percentage.toFixed(2) + "%");

// Exercise 8

// var dollar = 104.80
// var riyal = 28
// document.writeln("Total currency in PKR: " + ((dollar * 10) + (riyal * 25)))

// Exercise 9
// var number = 10; 
// var result = ((number + 5) * 10) / 2;

// document.writeln("Initial number: " + number);
// document.writeln("<br>Result after calculations: " + result);

// Exercise 10
// var currentYear = 2016;
// var birthYear = 1992;
// var age1 = currentYear - birthYear;

// document.writeln("Current Year: " + currentYear);
// document.writeln("<br>Birth Year: " + birthYear);
// document.writeln("<br> Your age is: "+ age1 );

// Exercise 11
// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;

// document.writeln("Radius of the circle: " + radius);
// document.writeln("<br>The circumference is " + circumference.toFixed(2));
// document.writeln("<br>The area is " + area.toFixed(2));

// Exercise 12
// var favoriteSnack = "Chocolate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalNeeded = (maxAge - currentAge) * amountPerDay;

// document.writeln("<h1>The Lifetime Supply Calculator</h1>");
// document.writeln("<br>Favorite Snack: " + favoriteSnack);
// document.writeln("<br>Current Age: " + currentAge);
// document.writeln("<br>Estimated Maximum Age: " + maxAge);
// document.writeln("<br>Amount Per Day: " + amountPerDay);
// document.writeln("<br>You will need " + totalNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");