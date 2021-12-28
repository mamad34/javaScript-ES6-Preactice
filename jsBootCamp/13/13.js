//Intro to AJAX (Asynchronous JavaScript And XML) & AJAJ (Asynchronous JavaScript And JSON)
// JSON Java Script Object Notation

// XML HTTP REQUEST

const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", () => {
  console.log("it Worked");
  console.log(firstReq.responseText);
  console.log(this.responseText); // undefined not working in arrow function
  const data = JSON.parse(firstReq.responseText);
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", () => {
  console.log("Error!!!");
});
firstReq.open("GET", "https://swapi.dev/api/planets"); // Creating The Request
firstReq.send(); // Sendig the req that we created
console.log("Request Send");
console.log(firstReq);
