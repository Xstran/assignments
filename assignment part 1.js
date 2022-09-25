const sandwitch_calculator=(bread)=>{
return bread/2;
}
console.log(sandwitch_calculator(10));

sandwitchwith_chese=(bread,chese)=>{
    if (bread / 2 > chese)
     return chese; 
     
}
console.log(sandwitchwith_chese(4,1));

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    var keys= Object.keys(student);
    console.log("the properties are ",student);

    // q3
console.log("before deleting student rollno  ",student);
delete student.rollno;
console.log("after deleting student rollno  ",student);    
