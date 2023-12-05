/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ana Julia Leal",
    photo: 'images/myself.png',
    favoriteFoods: [
        "Grape",
        "Ice Cream",
        "Bananas",
        "Mango",
        "Gummy Candy"
    ],
    hobbies: [
        "Playing with my husband",
        "Walking with my dog Billy",
        "Reading a book",
        "Watching Naruto Shippuden",
        "Talking with my friends"
    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Piracicaba, Brazil",
        length: "3 Years"
    },
    {
        place: "Monte Mor, Brazil",
        length: "16 Years"
    },
    {
        place: "Hortolandia, Brazil",
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