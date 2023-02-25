//it is only practice of javascript function with condition

// function campareValue(a,b){
//     if ((a > 50 && a <= 60) && (b > 60 && b <= 85)) {
//         console.log("you are eligiable")
//         prompt("what is your name?")
//         } else if ((a < 70 && a >= 60) && (b < 90 && b >= 85 )) {
//             console.log("you are not eligiable")
//             } else {
//                 console.log("satisfactory")
//             } {
//         }
// }
// campareValue(55,70)

//tarnory opreter

// function campareValue(a,b){
//     var tata = (a > 50 && a <= 60) && (b > 60 && b <= 85) ? "you are eligiable" : (a < 70 && a >= 60) && (b < 90 && b >= 85 ) ? "you are not eligiable":
//      "satisfactory" ;
//     console.log(tata)
// }
// campareValue(55,70)

//paractice of aaray

// var fruits = ["apple","banana","kivi","guava","mango"]
//  console.log(fruits[4]);

// var arrayList = [function NameList(){console.log("what is your name")},function AgeList(){console.log("what is your age")}]

// console.log(arrayList[1]);

//inside the array we can store same data type or diff. data type

// var mixedData = ["himanshi", 5,false, function UserName(){console.log("hey user")}]
// console.log(mixedData[3]);

//mulidimension array

// let Data = [
//     ["sonam",18,"b.com","Agra"],
//     ["bhola",23,"b.a","delhi"],
//     ["gurav",26,"b.b.a","rajamandi"],
// ];
// console.log(Data )

 // object

//  let obj1 = {
//     name: "bhanu sharma",
//     age: 26,
//     address: "agra",
//     hobby: "playing cricket",
//  }
// //  console.log(obj1)
// //  console.log(obj1.name)

// //insert the another key in obj1

// obj1.course = " b.com"
// console.log(obj1)

//created objected in array

// let FSDbatch = [
//    {
//       name: "himanshu",
//       age: 24,
//       address: "barkin",
//       profileName: "him234@",
//    },
//    {
//       name: "riya",
//       age: 23,
//       address: "U.S.A",
//       profileName: "riya234@",
//    },
//    {
//       name: "yuvan",
//       age: 26,
//       address: "portugal",
//       profileName: "yuvan234@",
//    },
// ];
// //console.log(FSDbatch)
// console.log(FSDbatch[1].address);

//created array in object

// let stJohnsStudent = {
//    id: 1,
//    Name: "yuvan",
//    section: "B",
//    skills: ["html","css","javascript","recat"],
// }
// console.log(stJohnsStudent);
// console.log(stJohnsStudent.skills);
// console.log(stJohnsStudent.skills[3]);

//how to call the function in a array and in a object

//  let houseMember = [
//    {
//       name: "madhu",
//       age: 28,
//       address:"delhi",
//       isFunc: function() {
//          console.log("hello am a cook")
//       },
//    }
//  ]
//  console.log( houseMember[0].isFunc)
//  console.log( houseMember[0].isFunc())

