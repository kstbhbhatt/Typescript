var person = {
    name: "kaustubh",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person.role.push("admin");
person.role[1] = 10;
var favoriteActivites;
favoriteActivites = ["strings", "Cooking"];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.split("").map);
}
// console.log(person.name);
