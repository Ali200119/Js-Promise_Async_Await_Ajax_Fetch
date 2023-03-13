"use strict"

let users = [
    {
        name: "Mubariz",
        surname: "Agayev",
        age: 18
    },

    {
        name: "Agshin",
        surname: "Hummetov",
        age: 27
    },

    {
        name: "Mirze",
        surname: "Bashirzade",
        age: 27
    },

    {
        name: "Pervin",
        surname: "Rehimli",
        age: 26
    },

    {
        name: "Ibrahim",
        surname: "Akberov",
        age: 20
    },
];

// function getUsersByName(str) {
//     let result = users.filter(u => u.name.includes(str));

//     setTimeout(() => {
//         console.log(result);
//     }, 3000);
// }

// getUsersByName("r");

// console.log(users);

let ul = document.querySelector("ul");

function getUsers() {
    setTimeout(() => {
        let str = "";
        
        for (const user of users) {
            str += `<li class="list-group-item"><b>${user.name} ${user.surname} ${user.age}</b></li>`
        }

        ul.innerHTML = str;
    }, 2000);
}

// getUsers();

function createUser(user, callback) {
    setTimeout(() => {
        users.push(user);
        callback();
    }, 3000);
}

createUser({name: "Elcan", surname: "Qurbanov", age: 20}, getUsers);