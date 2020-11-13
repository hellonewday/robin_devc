const stories = [
  {
    id: 1,
    name: "Story 1",
    views: 34,
  },
  {
    id: 2,
    name: "Story 2",
    views: 14,
  },
  {
    id: 3,
    name: "My new story",
    views: 21,
  },
  {
    id: 4,
    name: "My worst one",
    views: 454,
  },
];

console.log(
  stories.sort((item1, item2) => {
    return item2.views - item1.views;
  })
);
