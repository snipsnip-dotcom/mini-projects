let data = [
  {
    name: "Matt",
    age: "30",
  },
  {
    name: "Sarah",
    age: "25",
  },
  {
    name: "James",
    age: "17",
  },
  {
    name: "Sam",
    age: "39",
  },
  {
    name: "Honey",
    age: "12",
  },
  {
    name: "Rick",
    age: "25",
  },
];

const info = document.querySelector("#info");
let details = data.map(function (item) {
  return "<div>" + item.name + "" + " is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");
