import Chart, { elements } from "chart.js/auto";

const table1 = document.getElementById("table1");

//get all the years in an array
let year = [];
for (var i = 0; i < table1.rows[1].cells.length; i++) {
  year.push(table1.rows[1].cells[i].innerHTML);
}
//remove empty elements from array
year = year.filter((elm) => elm);

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
/*
const table2 = document.getElementById("table2");
console.log(table2);
const year1 = table2.rows[0].cells[2].innerHTML;
const year2 = table2.rows[0].cells[3].innerHTML;

console.log(table2.rows[1].cells[2]);
console.log(table2.rows[2].cells[2]);

function createArrayObject(length, array) {
  for (let i = 0; i < length; i++) {
    array.push({ label: [], data: [] });
  }
  return array;
}
//les pays
let coutries2 = [];
for (let i = 1; i < table2.rows.length; i++) {
  coutries2.push(table2.rows[i].cells[1].innerHTML);
}

let table2Object = [];
createArrayObject(coutries2.length, table2Object);

//le premier élement c'est l'année puis le taux de crime
for (let i = 0; i < table2.rows.length; i++) {
  if (i === 0) {
    table2Object.forEach((element) =>
      element.label.push(table2.rows[0].cells[2].innerHTML)
    );
  } else {
    table2Object[i - 1].data.push(table2.rows[i].cells[2].innerHTML);
  }
}
//le premier élement c'est l'année puis le taux de crime année 2
for (let i = 0; i < table2.rows.length; i++) {
  if (i === 0) {
    table2Object.forEach((element) =>
      element.label.push(table2.rows[0].cells[3].innerHTML)
    );
  } else {
    table2Object[i - 1].data.push(table2.rows[i].cells[3].innerHTML);
  }
}
console.log(table2Object);
const canvas2 = document.createElement("canvas");
const data2 = {
  labels: coutries2,
  datasets: table2Object,
};
console.log(data);
console.log(data2);
new Chart(canvas2, {
  type: "bar",
  data: data2,
});
table2.parentNode.insertBefore(canvas2, table2);*/
const table2 = document.getElementById("table2");

const year1 = table2.rows[0].cells[2].innerHTML;
const year2 = table2.rows[0].cells[3].innerHTML;

function createArrayObject(length, array) {
  for (let i = 0; i < length; i++) {
    array.push({ label: [], data: [] });
  }
  return array;
}
//les pays
let table2Object = [];
createArrayObject(table2.rows.length - 1, table2Object);

for (let i = 1; i < table2.rows.length; i++) {
  table2Object[i - 1].label.push(table2.rows[i].cells[1].innerHTML);
}

//le premier élement c'est l'année puis le taux de crime
for (let i = 1; i < table2.rows.length; i++) {
  table2Object[i - 1].data.push(table2.rows[i].cells[2].innerHTML);
}
//le premier élement c'est l'année puis le taux de crime année 2
for (let i = 1; i < table2.rows.length; i++) {
  table2Object[i - 1].data.push(table2.rows[i].cells[3].innerHTML);
}

const canvas2 = document.createElement("canvas");
const data2 = {
  labels: [year1, year2],
  datasets: table2Object,
};

new Chart(canvas2, {
  type: "bar",
  data: data2,
});
table2.parentNode.insertBefore(canvas2, table2);
//fetch
/*
async function getData() {
  const response = await fetch(
    "https://canvasjs.com/services/data/datapoints.php"
  );
  const data = await response.json();
  console.log(data);
}
getData();*/

const firstHeading = document.getElementById("firstHeading");
const canvas3 = document.createElement("canvas");
canvas3.setAttribute("id", "chartContainer");
firstHeading.parentNode.insertBefore(canvas3, firstHeading);
/*
var dataPoints = [];
var chart;
fetch("https://canvasjs.com/services/data/datapoints.php")
  .then((response) => response.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      dataPoints.push({ x: data[i][0], y: parseInt(data[i][1]) });
    }

    chart = new Chart(canvas3, {
      type: "line",
      data: {
        labels: dataPoints.map((d) => d.x),
        datasets: [
          {
            label: "Live Chart with dataPoints from External JSON",
            data: dataPoints.map((d) => d.y),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
    updateChart();
  });

function updateChart() {
  fetch(
    "https://canvasjs.com/services/data/datapoints.php" +
      (dataPoints.length + 1) +
      "&ystart=" +
      dataPoints[dataPoints.length - 1].y +
      "&length=1&type=json"
  )
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({ x: data[i][0], y: parseInt(data[i][1]) });
      }
      chart.update();
      setTimeout(function () {
        updateChart();
      }, 1000);
    });
}*/
/*
window.onload = function () {
  var dataPoints = [];
  var chart;
  fetch("https://canvasjs.com/services/data/datapoints.php")
    .then((response) => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        dataPoints.push({ x: data[i][0], y: parseInt(data[i][1]) });
      }
      chart = new Chart(canvas3, {
        type: "line",
        data: {
          labels: dataPoints.map((d) => d.x),
          datasets: [
            {
              label: "Live Chart with dataPoints from External JSON",
              data: dataPoints.map((d) => d.y),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {},
      });
      updateChart();
    });

  function updateChart() {
    fetch("https://canvasjs.com/services/data/datapoints.php")
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          dataPoints.push({ x: data[i][0], y: parseInt(data[i][1]) });
        }
        chart.update();
        setTimeout(function () {
          updateChart();
        }, 1000);
      });
  }
};*/
window.onload = function () {
  var dataPoints = [];
  var chart;
  chart = new Chart(canvas3, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Live Chart with dataPoints from External JSON",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
  updateChart();
  function updateChart() {
    dataPoints = [];
    fetch("https://canvasjs.com/services/data/datapoints.php", {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          dataPoints.push({ x: data[i][0], y: parseInt(data[i][1]) });
        }
        chart.data.labels = dataPoints.map((d) => d.x);
        chart.data.datasets[0].data = dataPoints.map((d) => d.y);
        chart.update();
        setTimeout(function () {
          updateChart();
        }, 1000);
      });
  }
};
