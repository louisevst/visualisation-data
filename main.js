import Chart from "chart.js/auto";

const table1 = document.getElementById("table1");
console.log(table1);

//get all the years in an array
let year = [];
for (var i = 0; i < table1.rows[1].cells.length; i++) {
  year.push(table1.rows[1].cells[i].innerHTML);
}
//remove empty elements from array
year = year.filter((elm) => elm);
console.log(year);
//name of the coutries
let countries = [];
for (var i = 2; i < table1.rows.length; i++) {
  countries.push(table1.rows[i].cells[1].innerHTML);
}
//stats for belgium in the order of year
let Belgium = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[2].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Belgium.push(x);
}

let Bulgaria = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[3].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Bulgaria.push(x);
}

let Czech = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[4].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Czech.push(x);
}
let Denmark = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[5].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Denmark.push(x);
}
let Germany = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[6].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Germany.push(x);
}
let Estonia = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[7].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Estonia.push(x);
}
let Ireland = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[8].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Ireland.push(x);
}
let Greece = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[9].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Greece.push(x);
}
let Spain = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[10].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Spain.push(x);
}
let France = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[11].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  France.push(x);
}
let Croatia = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[12].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Croatia.push(x);
}
let Italy = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[13].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Italy.push(x);
}
let Cyprus = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[14].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Cyprus.push(x);
}
let Latvia = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[15].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Latvia.push(x);
}
let Lithuania = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[16].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Lithuania.push(x);
}
let Luxembourg = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[17].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Luxembourg.push(x);
}
let Hungary = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[18].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Hungary.push(x);
}
let Malta = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[19].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Malta.push(x);
}
let Netherlands = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[20].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Netherlands.push(x);
}
let Austria = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[21].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Austria.push(x);
}
let Poland = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[22].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Poland.push(x);
}
let Portugal = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[23].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Portugal.push(x);
}
let Romania = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[24].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Romania.push(x);
}
let Slovenia = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[25].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Slovenia.push(x);
}
let Slovakia = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[26].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Slovakia.push(x);
}
let Finland = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[27].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Finland.push(x);
}
let Sweden = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[28].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Sweden.push(x);
}
let Iceland = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[29].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Iceland.push(x);
}
let Liechtenstein = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[30].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Liechtenstein.push(x);
}
let Norway = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[31].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Norway.push(x);
}
let Switzerland = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[32].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Switzerland.push(x);
}
let Montenegro = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[33].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Montenegro.push(x);
}
let Macedonia = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[34].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Montenegro.push(x);
}
let Serbia = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[35].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Serbia.push(x);
}
let Turkey = [];
for (var i = 2; i < table1.rows[2].cells.length; i++) {
  let x = table1.rows[36].cells[i].innerHTML;
  x = x.replace(",", ".");
  x = Number(x);
  Turkey.push(x);
}
console.log(France);
let crimeRate = [
  Belgium,
  Bulgaria,
  Czech,
  Denmark,
  Germany,
  Estonia,
  Ireland,
  Greece,
  Spain,
  France,
  Croatia,
  Italy,
  Cyprus,
  Latvia,
  Lithuania,
  Luxembourg,
  Hungary,
  Malta,
  Netherlands,
  Austria,
  Poland,
  Portugal,
  Romania,
  Slovenia,
  Slovakia,
  Finland,
  Sweden,
  Iceland,
  Liechtenstein,
  Norway,
  Switzerland,
  Montenegro,
  Macedonia,
  Serbia,
  Turkey,
];
let colours = [
  "#d71dbc",
  "#630d56",
  "#630d2d",
  "#ed78a3",
  "#ed7878",
  "#3f0909",
  "#b41818",
  "#8818b4",
  "#2c083a",
  "#d693f0",
  "#2d0c55",
  "#c5a1f2",
  "#3c31e3",
  "#a29cf2",
  "#0b083a",
  "#1d77d7",
  "#8abbef",
  "#0c325a",
  "#1dc7d3",
  "#0d5d63",
  "#1dd796",
  "#0d5e42",
  "#45c966",
  "#1f6b32",
  "#2c6b1f",
  "#173710",
  "#90c639",
  "#537321",
  "#cad161",
  "#b29b34",
  "#d9c87d",
  "#cf8826",
  "#e7bb7e",
  "#cb5a25",
  "#000000",
];
let allData = [];
for (i = 0; i < 35; i++) {
  var object = {
    label: countries[i],
    data: crimeRate[i],
    borderColor: colours[i],
    fill: false,
  };
  allData.push(object);
}

const data = {
  labels: year,
  datasets: allData,
};

//new Chart("myChart", config);

const canvas = document.createElement("canvas");
new Chart(canvas, {
  type: "line",
  data: data,
  options: {
    animation: false,
    aspectRatio: 1,
    responsive: true,
    scales: {
      y: {
        type: "logarithmic",
      },
    },
  },
});
table1.parentNode.insertBefore(canvas, table1);
//2eme graph
//table1.rows[34].cells[i].innerHTML;
const table2 = document.getElementById("table2");
console.log(table2);
console.log(table2.rows[3].cells[2].innerHTML);
