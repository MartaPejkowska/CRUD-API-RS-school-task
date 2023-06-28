type User={
    id:string;
    username:string;
    age:string;
    hobbies: Array<string>;
}
 const Users:User[]=[
    {"id":"1",
    "username":"Kasia",
    "age":"25",
    "hobbies":["reading","watching movies"]
    },
    {"id":"2",
    "username":"Basia",
    "age":"41",
    "hobbies":["walking with a dog","running"]
    },
    {"id":"3",
    "username":"Wojtek",
    "age":"20",
    "hobbies":["playing games","watching movies","cooking"]
    },
    {"id":"4",
    "username":"Zosia",
    "age":"45",
    "hobbies":["swimming","running"]
    },
    {"id":"5",
    "username":"Zdzichu",
    "age":"50",
    "hobbies":["drinking beer"]
    },
    {"id":"6",
    "username":"Tomek",
    "age":"15",
    "hobbies":["playing boardgames","watching movies","karate"]
    },

]

export {Users}