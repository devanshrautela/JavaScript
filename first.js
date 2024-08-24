//Multiple of 5
alert("This page will check wheather you input is a multiple of 5 or not");
let num = prompt("Enter a Number");
if(num % 5 === 0){
    console.log("The Number is Multiple of 5");
}
else {
    console.log("The Number is not a Multiple of 5");
}

//Get you Grade
alert("This code will give you Grade according to your score");
let score = prompt("Enter you score out of 100");
let Grade = null
switch(true){
    case (score<=100 && score>=90):
        grade = "A";
        break;
    case (score<90 && score>=80):
        grade = "B";
        break;
    case (score<80 && score>=70):
        grade = "C";
        break;
    case (score<70 && score>=60):
        grade = "D";
        break;
    case (score<60 && score>=50):
        grade = "E";
        break;
    case (score<50 && score>=0):
        grade = "F";
        break;
    default: console.log("Invalid score");
}
console.log("Your Grade is:",grade);