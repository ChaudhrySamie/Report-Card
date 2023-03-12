var studentName = prompt("What is your name ?")
var rollNo =+prompt("Your Roll no Sir/Madam")
var whichGroup = prompt("Your Class 1stYear / 2ndYear \n Give answer in '1' or '2' ")
if(whichGroup == 1){
    console.log("group ok")
}
else if(whichGroup == 2){
    console.log("group ok")
}
else{
    alert("Plz type your group correctly exp : '1' or '2'")
    
}


var yearPassing = +prompt("Passing Year between 2000 to 2023")
if(yearPassing >= 2000 && yearPassing <= 2023){
    console.log("passing year ok")
}
else{
    alert("Plz enter your passing year between 2000 to 2023")
}
var mathMarks = +prompt("Which marks you obtained in Math/Bio subject? (Out of 100)")
if(mathMarks >=0 && mathMarks <=100){
    console.log("Math marks Ok")
}
else{
    alert("Plz Sir/Madam Enter Math Marks 0 to 100")
}
var chemistryhMarks = +prompt("Which marks you obtained in Chemistry subject? (Out of 100)") 
if(chemistryhMarks >=0 && chemistryhMarks <=100){
    console.log("chemistry marks Ok")
}
else{
    alert("Plz Sir/Madam Enter Chemistry Marks 0 to 100")
}
var physicsMarks = +prompt("Which marks you obtained in Physics subject? (Out of 100)")
if(physicsMarks >=0 && physicsMarks <=100){
    console.log("Physics marks Ok")
}
else{
    alert("Plz Sir/Madam Enter Physics Marks 0 to 100")
}
var englishMarks = +prompt("Which marks you obtained in English subject? (Out of 100)")
if(englishMarks >=0 && englishMarks <=100){
    console.log("English marks Ok")
}
else{
    alert("Plz Sir/Madam Enter Eng Marks 0 to 100 (Out of 100)")
}

var urduMarks = +prompt("Which marks you obtained in Urdu subject? (Out of 100)")
if(urduMarks >=0 && urduMarks <=100){
    console.log("Urdu marks Ok")
}
else{
    alert("Plz Sir/Madam Enter Urdu Marks 0 to 100 (Out of 100)")
}
var islamiatMarks = +prompt("Which marks you obtained in Islamiat/Pak Study subject? (Out of 50)")
if(islamiatMarks >=0 && islamiatMarks <=50){
    console.log("Isl marks Ok")
}
else{
    alert("Plz Sir/Madam Enter Islamiat/Pak Study Marks 0 to 50")
}
var obtainedmarks = (mathMarks+physicsMarks+chemistryhMarks+urduMarks+islamiatMarks+englishMarks)
var Percentage = (obtainedmarks * 100 ) / 550

var yourgrade;
if(Percentage>=80){
    yourgrade = "A+"
}
else if(Percentage>=70){
    yourgrade= "A"

}
else if(Percentage >=60){
    yourgrade= "B"

}
else if(Percentage >=50){
    yourgrade= "C"

}
else if(Percentage>=40){
    yourgrade= "D"

}
else{
    yourgrade= "Fail"

}

document.write("<div class=firstrow><span class=firstword><h3> Name:</h3><h3 class=name>"+studentName+"</h3></span>"+"<span class=secondword><h3>Roll No:</h3><h3 class=rollno>"+rollNo+"</h3></span></div>"+"<div class=secondrow><span class=thirdword><h3>Group:</h3><h3 class=group>"+whichGroup+" year</h3></span>"+"<span class=forthword><h3>Year:</h3><h3 class=passingyear>"+yearPassing+"</h3></span></div>"+"<table border='2px' class='datatab'>"+"<th>Subjects</th><th>Marks</th>+<tr><td>Math</td><td>"+mathMarks+"</td></tr><tr><td>Physics</td><td>"+physicsMarks+"</td></tr><tr><td>Chemistry</td><td>"+chemistryhMarks+"</td></tr><tr><td>English</td><td>"+englishMarks+"</td></tr><tr><td>Urdu</td><td>"+urduMarks+"</td></tr><tr><td>Islamiat</td><td>"+islamiatMarks+"</td></tr></table>"+" <span class='responsive '><table class='bottomtab'>"+"+<th>Total Marks</th><th>Obtained Marks</th><tr><td>550</td><td>"+obtainedmarks+"</td></table><table class='bottomtab'><th>Percentage</th><th>Grade</th><tr><td>"+Percentage.toFixed(2)+"%"+"</td><td>"+yourgrade+"</td></tr></table></span><footer class='bottomfot'><h2>Created BY Chaudhry Samie</h2></footer>")

