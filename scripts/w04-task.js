/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ana Julia Leal",
    photo: 'images/myself.png',
    favoriteFoods: [
        "Grape",
        "Ice Cream",
        "Gummy Candy",
        "Japanese Candies",
        "Mango"
    ],
    hobbies: [
        "Playing LOL with my husband",
        "Walking with my dog",
        "Talking with my friends",
        "Reading some book",
        "Watching Naruto Shippuden"
    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Piracicaba",
        length: "3 Years"
    },
    {
        place: "Monte Mor",
        length: "16 Years"
    },
    {
        place: "Hortolandia",
        length: "9 Months"
    }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})