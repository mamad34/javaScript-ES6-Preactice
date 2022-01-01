//Intro to AJAX (Asynchronous JavaScript And XML) & AJAJ (Asynchronous JavaScript And JSON)
// JSON Java Script Object Notation

// XML HTTP REQUEST

/*
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
  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    const filmData = JSON.parse(this.responseText);
    console.log(filmData);
  });
  filmReq.addEventListener("error", function (e) {
    console.log("error", e);
  });
  filmReq.open("GET", filmURL);
  filmReq.send();
});

firstReq.addEventListener("error", (e) => {
  console.log("Error!!!");
});
firstReq.open("GET", "https://swapi.dev/api/planets"); // Creating The Request
firstReq.send(); // Sendig the req that we created
console.log("Request Send");
console.log(firstReq);
*/
// A better way fetch
/*

fetch("https://swapi.dev/api/planets")
  .then((response) => {
    console.log(response);
    //  console.log(response.json()); //also return a promise
    if (!response.ok) {
      throw new Error(`Status Code Error ${response.status}`);
    } else {
      response.json().then((data) => {
        console.log(data);
        for (let planet of data.results) {
          console.log(planet);
          console.log(planet.name);
        }
      });
    }
  })
  .catch((err) => {
    console.log("somthing is wrong");
    console.log(err);
  });

  */
// Chaining Fetch Requests

/*
fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    console.log(response);
    //  console.log(response.json()); //also return a promise
    if (!response.ok) {
      throw new Error(`Status Code Error ${response.status}`);
    } else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
    console.log(data.results[0].films[0]);
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((response) => {
    // then for fetch film url
    if (!response.ok) throw new Error(`STATUS CODE ERROR : ${response.status}`);

    return response.json();
  })
  .then((data) => {
    //then for respnse.json
    console.log("Fetched first film");
    console.log(data.title);
  })
  .catch((err) => {
    console.log("somthing is wrong");
    console.log(err);
  });

  */

// refactoring Fetch Chains
const checkStatusAndPars = (response) => {
  if (!response.ok) {
    throw new Error(`Status Code Error ${response.status}`);
  } else {
    return response.json();
  }
};

const printPlanets = (data) => {
  console.log("Loaded 10 more planets");
  for (let planet of data.results) {
    console.log(planet.name);
  }

  /*
  first way 
  const p = new Promise((resolve, reject) => {
    resolve(data);
  });
  return p;
  */

  // second way

  return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => fetch(url);

fetchNextPlanets()
  .then(checkStatusAndPars)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndPars)
  .then(printPlanets)
  .catch((err) => {
    console.log("somthing is wrong");
    console.log(err);
  });
