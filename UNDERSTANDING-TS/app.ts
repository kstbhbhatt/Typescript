const person = {
  name: "kaustubh",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin");
person.role[1] = 10;

let favoriteActivites: string[];
favoriteActivites = ["strings", "Cooking"];

for (const hobby of person.hobbies) {
  console.log(hobby.split("").map);
}

// console.log(person.name);
