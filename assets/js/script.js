// PAGE 1
function p1Chart1() {
  const ctx = document.getElementById("p1Chart1Canvas").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Bar 1", "Bar 2"],
      datasets: [
        {
          label: "ETFs",
          data: [37, 41],
          backgroundColor: "#7c7b7f",
        },
        {
          label: "Retail",
          data: [9, 25],
          backgroundColor: "#ff4713",
        },
        {
          label: "Institutional",
          data: [54, 34],
          backgroundColor: "#000000",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          color: "#fff",
          align: "center",
          font: function (context) {
            const value = context.dataset.data[context.dataIndex];
            let size = 12;

            // Shrink based on value (you can fine-tune this)
            if (value < 8) size = 7;
            if (value < 10) size = 10;
            else if (value < 20) size = 11;

            return {
              weight: "bold",
              size: size,
            };
          },

          formatter: function (value, context) {
            const label =
              context.chart.data.datasets[context.datasetIndex].label;
            if (value > 15) {
              return label + "\n" + value + "%";
            } else {
              return label + " " + value + "%";
            }
          },
          anchor: "center",
          align: "center",
          textAlign: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
        y: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

function p1Chart2() {
  const ctx = document.getElementById("p1Chart2Canvas").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Bar 1", "Bar 2"],
      datasets: [
        {
          label: "Cash",
          data: [8, 7],
          backgroundColor: "#008b5c",
        },
        {
          label: "ETFs",
          data: [37, 41],
          backgroundColor: "#7c7b7f",
        },
        {
          label: "Index",
          data: [30, 7],
          backgroundColor: "#ff4713",
        },
        {
          label: "Active",
          data: [25, 45],
          backgroundColor: "#000000",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          color: "#fff",
          align: "center",
          font: function (context) {
            const value = context.dataset.data[context.dataIndex];
            let size = 12;

            // Shrink based on value (you can fine-tune this)
            if (value < 8) size = 7;
            if (value < 10) size = 10;
            else if (value < 20) size = 11;

            return {
              weight: "bold",
              size: size,
            };
          },

          formatter: function (value, context) {
            const label =
              context.chart.data.datasets[context.datasetIndex].label;
            if (value > 15) {
              return label + "\n" + value + "%";
            } else {
              return label + " " + value + "%";
            }
          },
          anchor: "center",
          align: "center",
          textAlign: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
        y: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

function p1Chart3() {
  const ctx = document.getElementById("p1Chart3Canvas").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Bar 1", "Bar 2"],
      datasets: [
        {
          label: "Cash",
          data: [8, 7],
          backgroundColor: "#008b5c",
        },
        {
          label: "Alternatives",
          data: [4, 16],
          backgroundColor: "#9062bc",
        },
        {
          label: "Multi-asset",
          data: [8, 7],
          backgroundColor: "#7c7b7f",
        },
        {
          label: "Fixed Income",
          data: [25, 22],
          backgroundColor: "#ff4713",
        },
        {
          label: "Equity",
          data: [55, 48],
          backgroundColor: "#000000",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          color: "#fff",
          align: "center",
          font: function (context) {
            const value = context.dataset.data[context.dataIndex];
            let size = 12;

            // Shrink based on value (you can fine-tune this)
            if (value < 8) size = 7;
            if (value < 10) size = 10;
            else if (value < 20) size = 11;

            return {
              weight: "bold",
              size: size,
            };
          },

          formatter: function (value, context) {
            const label =
              context.chart.data.datasets[context.datasetIndex].label;
            if (value > 15) {
              return label + "\n" + value + "%";
            } else {
              return label + " " + value + "%";
            }
          },
          anchor: "center",
          align: "center",
          textAlign: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
        y: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

function p1Chart4() {
  const ctx = document.getElementById("p1Chart4Canvas").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Bar 1", "Bar 2"],
      datasets: [
        {
          label: "Asia-Pacific",
          data: [8, 5],
          backgroundColor: "#7c7b7f",
        },
        {
          label: "EMEA",
          data: [24, 28],
          backgroundColor: "#ff4713",
        },
        {
          label: "Americas",
          data: [68, 67],
          backgroundColor: "#000000",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          color: "#fff",
          align: "center",
          font: function (context) {
            const value = context.dataset.data[context.dataIndex];
            let size = 12;

            // Shrink based on value (you can fine-tune this)
            if (value < 8) size = 7;
            if (value < 10) size = 10;
            else if (value < 20) size = 11;

            return {
              weight: "bold",
              size: size,
            };
          },

          formatter: function (value, context) {
            const label =
              context.chart.data.datasets[context.datasetIndex].label;
            if (value > 15) {
              return label + "\n" + value + "%";
            } else {
              return label + " " + value + "%";
            }
          },
          anchor: "center",
          align: "center",
          textAlign: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
        y: {
          stacked: true,
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}
// Run the chart when document is ready
$(document).ready(function () {
  p1Chart1();
  p1Chart2();
  p1Chart3();
  p1Chart4();
});
