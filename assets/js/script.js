"use strict"

// let users = [
//     {
//         name: "Mubariz",
//         surname: "Agayev",
//         age: 18
//     },

//     {
//         name: "Agshin",
//         surname: "Hummetov",
//         age: 27
//     },

//     {
//         name: "Mirze",
//         surname: "Bashirzade",
//         age: 27
//     },

//     {
//         name: "Pervin",
//         surname: "Rehimli",
//         age: 26
//     },

//     {
//         name: "Ibrahim",
//         surname: "Akberov",
//         age: 20
//     },
// ];

// function getUsersByName(str) {
//     let result = users.filter(u => u.name.includes(str));

//     setTimeout(() => {
//         console.log(result);
//     }, 3000);
// }

// getUsersByName("r");

// console.log(users);

// let ul = document.querySelector("ul");

// function getUsers(datas) {
//     setTimeout(() => {
//         let str = "";

//         for (const user of datas) {
//             str += `<li style="background-color: white;" class="list-group-item"><b>${user.name} ${user.surname} ${user.age}</b></li>`
//         }

//         ul.innerHTML = str;
//     }, 2000);
// }

// getUsers();

// function createUser(user) {
//     return new Promise((resolved, rejected) => {
//         setTimeout(() => {
//             users.push(user);
//             let error = true;

//             if (!error) {
//                 resolved(users);
//             }

//             else {
//                 rejected("Something is wrong");
//             }
//         }, 3000);
//     })
// }

// createUser({name: "Elcan", surname: "Qurbanov", age: 20}).then(response => {
//     getUsers(response);
// }).catch(error => {
//     console.error(error);
//     console.error(error);
// });

// function getAllPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(datas => {
//         let str = "";

//         for (const data of datas) {
//             str += `<li data-id="${data.id}" class="list-group-item"><b>${data.id}-${data.body}-${data.userId}</b></li>`
//         }

//         ul.innerHTML = str;
//     })
// }

// getAllPosts();

// function getPostById(id) {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response => response.json())
//     .then(data => {
//         alert(`${data.id} ${data.body} ${data.userId}`);
//     })
// }


// setTimeout(() => {
//     let li = document.querySelectorAll("ul li");

//     li.forEach(elem => {
//         elem.addEventListener("click", function() {
//             getPostById(parseInt(this.getAttribute("data-id")));
//         })
//     });
// }, 1000);

// async function getPostById(id) {
//     let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let result = await data.json();
//     alert(`${result.id} ${result.body}`);
// }

// getPostById(4);


$(function() {
    
})