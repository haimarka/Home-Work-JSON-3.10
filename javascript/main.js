//1

// jsonMasege = `{
//     "name": "haim",
//     "masege": "hello",
//     "email": "haimarka1@gmail.com"
// }`

// console.log(JSON.parse(jsonMasege));

//2
//a
//b
//c

// let jsonVehicle = `{
//     "carsArray": [
//         {
//             "model": "mazda",
//             "price": "1,000,000",
//             "year": "2021"
//         },
//         {
//             "model": "opal",
//             "price": "2,000,000",
//             "year": "2020"
//         }
//     ],
//     "shipsArray": [
//             {
//                 "name": "ocen",
//                 "year": "2019",
//                 "docking": "yavne",
//                 "pic": "https://cdn.pixabay.com/photo/2018/09/19/14/52/emerald-cockroach-wasp-3688723__340.jpg"
//             },
//             {
//                 "name": "water",
//                 "year": "2018",
//                 "docking": "rehovot",
//                 "pic": "https://cdn.pixabay.com/photo/2018/09/19/14/52/emerald-cockroach-wasp-3688723__340.jpg"
//             }
//         ]
    
// }`

// let changeToJs = JSON.parse(jsonVehicle)
// console.log(changeToJs.shipsArray);
// for (const iterator of changeToJs.shipsArray) {
//     ships.innerHTML += `<article>${iterator.name} ${iterator.year} ${iterator.docking} <img src="${iterator.pic}"></article>`
// }


//3
//a
//b
// let nameInput = document.getElementById("nameInput");
// let maillInput = document.getElementById("maillInput");
// let masegeInput = document.getElementById("masegeInput");
// let btn = document.getElementById("btn");

// let newObject = {}
// btn.addEventListener("click",()=>{
//      newObject = {
//         name: nameInput.value,
//         maill: maillInput.value,
//         masege: masegeInput.value
//     }
//     console.log(newObject);

//     let changeToJson = JSON.stringify(newObject)
//     console.log(changeToJson);
    
// });

//4
// let object ={masege:"hello",time:"21:50"}
// let toJson = (obj)=>{
//     let a = JSON.stringify(obj)
//     return a
// }

// console.log(toJson(object));

// //5

// let object1 = `{"masege": "hello","time": "21:58"}`
// let toObject = (obj)=>{
//     let b = JSON.parse(obj)
//     return b
// }

// console.log(toObject(object1));

//6

// let userObject = {age: 10,name:"haim",mail:"haimarka1@gmail.com"}
// let getUserObject = (obj)=>{
//     obj.age *= 3
//     let c = JSON.stringify(obj)
//     return c
// }

// console.log(getUserObject(userObject));











