// start of AXIOS
const res = axios
  .get("https://swapi.dev/api/planets/")
  .then((results) => {
    console.log(results.data);
  })
  .catch((err) => {
    console.log(err);
  });
// first way to use get req axios
/*
axios
  .get("https://swapi.dev/api/planets/")
  .then(({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    
  // axios.get(data.next).then(({ data }) => {
  //   console.log(data);
  //   for (let planet of data.results) {
  //     console.log(planet.name);
  //   }
  // });
  
    //or

    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
  })
  .catch((err) => {
    console.log(err);
  });
  */

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return axios.get(url);
};

const printNextPlanets = ({ data }) => {
  console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

fetchNextPlanets()
  .then(printNextPlanets)
  .then(fetchNextPlanets)
  .then(printNextPlanets)
  .catch(() => {
    console.log(err);
  });
