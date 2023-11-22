console.log("main.js werkt");
const container = document.querySelector(".container");

//opdr 1 
let person = {
    firstName: "Hubert Andre",
    lastName: "Rongcales", 
    age: 19, 
    course: "ICT", 
    score: 7.5,
}
container.innerHTML += person.firstName;
container.innerHTML += person.age;

//opdr 2 
let personOnFb = {
    username: "Jamir", 
    title: "unknown", 
    caption: "show my love for you",
    date: "02-11-2023",
    views: 6200, 
}


//opdr 3
let food = {
    title: "adobo",
    description: "chicken soup with soy sauce",
    gezond: "good for your muscle growth",
}

const foodJSON = JSON.stringify(food);
container.innerHTML += `<p>${food.title}</p>`;
container.innerHTML += `<p>${food.description}</p>`;
container.innerHTML += `<p>${food.gezond}</p>`;
container.innerHTML += foodJSON;

// opdr 4 

let MercedesCLA = {
    mileAge: 60000,
    yearBuilt: 2017,
    engineSize: 1.6, 
    description: "Mercedes CLA-Klasse 180 1.6 90KW Blue Eff. Edit. 2017",
    price: 24000, 
}



//opdr 5 

let item1 = {
    title: "1 de Beste Elstar",
    prijs: 2.19,
    actie: 1.18, 
    description: "Met 1 de Beste Elstar heb je altijd een appeltje voor de dorst.",
    ingredients: "appels", 
}

// opdr 6 
