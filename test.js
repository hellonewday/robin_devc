const data = [
  {
    id: 1,
    title: "Hello From East Wangshington",
  },
  {
    id: 2,
    title: "Passenger",
  },
  {
    id: 3,
    title: "Rota 2",
  },
  {
    id: 4,
    title: "Hello World",
  },
  {
    id: 5,
    title: "Pass me by the car",
  },
];

let query = "rO";

let transformData = data.map((item) => {
  return { id: item.id, title: item.title.toLocaleLowerCase() };
});

let transformQuery = query.toLowerCase();

function search(q, td, d) {
  let searchResult = td.filter((item) => {
    return item.title.includes(q);
  });

  return searchResult.map((item) => {
    return {
      id: item.id,
      title: item.title.toLocaleUppercase(),
    };
  });
}

console.log(search(transformQuery, transformData, data));
