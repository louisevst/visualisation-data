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

//stats all countries
function addAllDataCoutries(emptyArray, rowNumber) {
  emptyArray = [];
  for (var i = 2; i < table1.rows[1].cells.length; i++) {
    let x = table1.rows[rowNumber].cells[i].innerHTML;
    x = x.replace(",", ".");
    x = Number(x);
    emptyArray.push(x);
  }
  data1.push(emptyArray);
}
let newCountry = [];
let data1 = [];

for (var i = 2; i < table1.rows.length; i++) {
  addAllDataCoutries(newCountry, i);
}

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
    data: data1[i],
    borderColor: colours[i],
    fill: false,
  };
  allData.push(object);
}

const data = {
  labels: year,
  datasets: allData,
};

const canvas = document.createElement("canvas");

//2eme graph

const table2 = document.getElementById("table2");

const year1 = table2.rows[0].cells[2].innerHTML;
const year2 = table2.rows[0].cells[3].innerHTML;

function createArrayObject(length, array) {
  for (let i = 0; i < length; i++) {
    array.push({ label: [], data: [], backgroundColor: colours[i] });
  }
  return array;
}
let table2Object = [];

createArrayObject(table2.rows.length - 1, table2Object);

for (let i = 1; i < table2.rows.length; i++) {
  if (table2.rows[i].cells[1].innerHTML.includes("<br>")) {
    table2Object[i - 1].label.push(
      table2.rows[i].cells[1].innerHTML.replace("<br>", " ")
    );
  } else table2Object[i - 1].label.push(table2.rows[i].cells[1].innerHTML);
}

for (let i = 1; i < table2.rows.length; i++) {
  table2Object[i - 1].data.push(table2.rows[i].cells[2].innerHTML);
}

for (let i = 1; i < table2.rows.length; i++) {
  table2Object[i - 1].data.push(table2.rows[i].cells[3].innerHTML);
}

const canvas2 = document.createElement("canvas");
const data2 = {
  labels: [year1, year2],
  datasets: table2Object,
};

//fetch

const firstHeading = document.getElementById("firstHeading");
const canvas3 = document.createElement("canvas");
canvas3.setAttribute("id", "chartContainer");
firstHeading.parentNode.insertBefore(canvas3, firstHeading);

window.onload = function () {
  //GRAPH 1
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
  //GRAPH 2
  new Chart(canvas2, {
    type: "bar",
    data: data2,
  });
  table2.parentNode.insertBefore(canvas2, table2);
  //GRAPH 3
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
