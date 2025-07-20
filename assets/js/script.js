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
          border: { display: false },
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
          border: { display: false },
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
          border: { display: false },
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
          border: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
}

// PAGE 2 CHARTS

function renderCustomLegend(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear previous content
  container.innerHTML = "";

  items.forEach(({ name, color, infoPoint }) => {
    const legendItem = document.createElement("div");
    legendItem.className = "custom-legend-item d-flex align-items-center gap-2";

    const colorBox = document.createElement("div");
    colorBox.className = "legend-color-box";
    colorBox.style.backgroundColor = color;

    const label = document.createElement("span");
    label.className = "legend-label";
    label.textContent = name;

    // Append <sup> if infoPoint exists
    if (infoPoint !== undefined) {
      const sup = document.createElement("sup");
      sup.textContent = `(${infoPoint})`;
      label.appendChild(sup);
    }

    legendItem.appendChild(colorBox);
    legendItem.appendChild(label);
    container.appendChild(legendItem);
  });
}

function p2Chart1() {
  const ctx = document.getElementById("p2Chart1").getContext("2d");

  const labels = [
    "Q4 2022",
    "Q1 2023",
    "Q2 2023",
    "Q3 2023",
    "Q4 2023",
    "Q1 2024",
    "Q2 2024",
    "Q3 2024",
    "Q4 2024",
  ];

  const longTerm = [20, 30, 25, -15, 10, -5, 35, 40, 0];
  const cash = [10, 5, -10, 5, 15, -10, 10, 5, 20];
  const advisory = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const datasets = [];

  // Stackable segments
  datasets.push({
    label: "Long-Term",
    data: longTerm,
    backgroundColor: "#000000",
    stack: "combined",
    datalabels: {
      display: (ctx) => ctx.dataset.data[ctx.dataIndex] !== 0,
      formatter: (value) => (value < 0 ? `$(${Math.abs(value)})` : `$${value}`),
      color: "white",
      font: { size: 10.67, weight: "bold" },
    },
  });

  datasets.push({
    label: "Cash",
    data: cash,
    backgroundColor: "#7c7b7f",
    stack: "combined",
    datalabels: {
      display: (ctx) => ctx.dataset.data[ctx.dataIndex] !== 0,
      formatter: (value) => (value < 0 ? `$(${Math.abs(value)})` : `$${value}`),
      color: "white",
      font: { size: 10.67, weight: "bold" },
    },
  });

  datasets.push({
    label: "Advisory",
    data: advisory,
    backgroundColor: "#d6d5dd",
    stack: "combined",
    datalabels: {
      display: (ctx) => ctx.dataset.data[ctx.dataIndex] !== 0,
      formatter: (value) => (value < 0 ? `$(${Math.abs(value)})` : `$${value}`),
      color: "white",
      font: { size: 10.67, weight: "bold" },
    },
  });

  // Calculate totals
  const totals = longTerm.map((_, i) => {
    const sum = (longTerm[i] || 0) + (cash[i] || 0) + (advisory[i] || 0);
    return sum !== 0 ? 0.01 : 0; // tiny visible bar just for label
  });

  const totalLabels = longTerm.map((_, i) => {
    const l = longTerm[i] || 0;
    const c = cash[i] || 0;
    const a = advisory[i] || 0;
    const sum = l + c + a;
    return sum !== 0 ? `${sum < 0 ? "-" : ""}$${Math.abs(sum)}` : "";
  });

  // Top visible "Sum" segment
  datasets.push({
    label: "Total",
    data: totals,
    backgroundColor: "transparent", // invisible bar
    stack: "combined",
    datalabels: {
      display: (ctx) => totalLabels[ctx.dataIndex] !== "",
      formatter: (_, ctx) => totalLabels[ctx.dataIndex],
      color: "#000",
      font: { size: 11, weight: "bold" },
      anchor: "end", // position at top of bar
      align: "top", // move slightly above bar
      backgroundColor: "#fff",
      borderColor: "#00000000",
      borderWidth: 1,
      borderRadius: 3,
      padding: 1,
    },
    borderWidth: 0, // no border since it's invisible
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      layout: {
        padding: {
          top: 20,
        },
      },
      plugins: {
        legend: {
          padding: 4,
          display: false,
          position: "top", // 👈 move legend to the top
          labels: {
            color: "#000",
            font: {
              size: 12,
              weight: "bold",
            },
            boxWidth: 12,
            padding: 15,
            filter: function (legendItem) {
              return legendItem.text !== "Total"; // Hide only "Total" from legend
            },
          },
        },

        tooltip: { enabled: true },
        datalabels: {
          anchor: "center",
          align: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },

          ticks: { display: false },
          border: { display: false },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          grid: {
            drawBorder: false,
            color: (ctx) => (ctx.tick.value === 0 ? "#7b7c7f" : "transparent"),
            lineWidth: (ctx) => (ctx.tick.value === 0 ? 2 : 0),
          },
          ticks: { display: false },
          border: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  const customXticksContainer = document.getElementById("p2c1customXticks");

  // Clear old if re-rendering
  customXticksContainer.innerHTML = "";

  // Render each label (with \n split)
  labels.forEach((label) => {
    const [line1, line2] = label.split(" ");
    const tick = document.createElement("div");
    tick.className = "tick";
    tick.innerHTML = `${line1}<br>${line2}`;
    customXticksContainer.appendChild(tick);
  });
  const legends = [
    { name: "Long-Term", color: "#000000" },
    { name: "Cash", color: "#7c7b7f" },
    { name: "Advisory", color: "#d6d5dd" },
  ];

  renderCustomLegend(legends, "p2c1customLegend");
}

function p2Chart2() {
  const ctx = document.getElementById("p2Chart2").getContext("2d");

  const labels = [
    "Q4 2022",
    "Q1 2023",
    "Q2 2023",
    "Q3 2023",
    "Q4 2023",
    "Q1 2024",
    "Q2 2024",
    "Q3 2024",
    "Q4 2024",
  ];

  const data = [-15, 0.3, 4, -4, -9, 7, 6, 7, 5];

  const datasets = [];

  // Stackable segments
  datasets.push({
    label: "Data",
    data: data,
    backgroundColor: "#000000",
    stack: "combined",
    datalabels: {
      display: (ctx) => ctx.dataset.data[ctx.dataIndex] !== 0,
      formatter: "",
      color: "#00000000",
      font: { size: 10.67, weight: "bold" },
    },
  });

  // Calculate totals
  const totals = data.map((_, i) => {
    const sum = data[i] || 0;
    return sum !== 0 ? 0.01 : 0; // tiny visible bar just for label
  });

  const totalLabels = data.map((_, i) => {
    const l = data[i] || 0;
    const sum = l;
    return sum !== 0 ? `${sum < 0 ? "-" : ""}$${Math.abs(sum)}` : "";
  });

  // Top visible "Sum" segment
  datasets.push({
    label: "Total",
    data: totals,
    backgroundColor: "transparent", // invisible bar
    stack: "combined",
    datalabels: {
      display: (ctx) => totalLabels[ctx.dataIndex] !== "",
      formatter: (_, ctx) => totalLabels[ctx.dataIndex],
      color: "#000",
      font: { size: 11, weight: "bold" },
      anchor: "end", // position at top of bar
      align: "top", // move slightly above bar
      backgroundColor: "#fff",
      borderColor: "#00000000",
      borderWidth: 1,
      borderRadius: 3,
      padding: 1,
    },
    borderWidth: 0, // no border since it's invisible
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      layout: {
        padding: {
          top: 20,
        },
      },
      plugins: {
        legend: {
          padding: 4,
          display: false,
          position: "top", // 👈 move legend to the top
          labels: {
            color: "#000",
            font: {
              size: 12,
              weight: "bold",
            },
            boxWidth: 12,
            padding: 15,
            filter: function (legendItem) {
              return legendItem.text !== "Total"; // Hide only "Total" from legend
            },
          },
        },

        tooltip: { enabled: true },
        datalabels: {
          anchor: "center",
          align: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },

          ticks: { display: false },
          border: { display: false },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          grid: {
            drawBorder: false,
            color: (ctx) => (ctx.tick.value === 0 ? "#7b7c7f" : "transparent"),
            lineWidth: (ctx) => (ctx.tick.value === 0 ? 2 : 0),
          },
          ticks: { display: false },
          border: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
  const customXticksContainer = document.getElementById("p2c2customXticks");

  // Clear old if re-rendering
  customXticksContainer.innerHTML = "";

  // Render each label (with \n split)
  labels.forEach((label) => {
    const [line1, line2] = label.split(" ");
    const tick = document.createElement("div");
    tick.className = "tick";
    tick.innerHTML = `${line1}<br>${line2}`;
    customXticksContainer.appendChild(tick);
  });
}

function p2Chart3() {
  const ctx = document.getElementById("p2Chart3").getContext("2d");

  const labels = [
    "Q4 2022",
    "Q1 2023",
    "Q2 2023",
    "Q3 2023",
    "Q4 2023",
    "Q1 2024",
    "Q2 2024",
    "Q3 2024",
    "Q4 2024",
  ];

  const data = [90, 22, 48, 29, 88, 67, 83, 97, 143];

  const datasets = [];

  // Stackable segments
  datasets.push({
    label: "Data",
    data: data,
    backgroundColor: "#000000",
    stack: "combined",
    datalabels: {
      display: (ctx) => ctx.dataset.data[ctx.dataIndex] !== 0,
      formatter: "",
      color: "#00000000",
      font: { size: 10.67, weight: "bold" },
    },
  });

  // Calculate totals
  const totals = data.map((_, i) => {
    const sum = data[i] || 0;
    return sum !== 0 ? 0.01 : 0; // tiny visible bar just for label
  });

  const totalLabels = data.map((_, i) => {
    const l = data[i] || 0;
    const sum = l;
    return sum !== 0 ? `${sum < 0 ? "-" : ""}$${Math.abs(sum)}` : "";
  });

  // Top visible "Sum" segment
  datasets.push({
    label: "Total",
    data: totals,
    backgroundColor: "transparent", // invisible bar
    stack: "combined",
    datalabels: {
      display: (ctx) => totalLabels[ctx.dataIndex] !== "",
      formatter: (_, ctx) => totalLabels[ctx.dataIndex],
      color: "#000",
      font: { size: 11, weight: "bold" },
      anchor: "end", // position at top of bar
      align: "top", // move slightly above bar
      backgroundColor: "#fff",
      borderColor: "#00000000",
      borderWidth: 1,
      borderRadius: 3,
      padding: 1,
    },
    borderWidth: 0, // no border since it's invisible
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      layout: {
        padding: {
          top: 20,
        },
      },
      plugins: {
        legend: {
          padding: 4,
          display: false,
          position: "top", // 👈 move legend to the top
          labels: {
            color: "#000",
            font: {
              size: 12,
              weight: "bold",
            },
            boxWidth: 12,
            padding: 15,
            filter: function (legendItem) {
              return legendItem.text !== "Total"; // Hide only "Total" from legend
            },
          },
        },

        tooltip: { enabled: true },
        datalabels: {
          anchor: "center",
          align: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },

          ticks: { display: false },
          border: { display: false },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          grid: {
            drawBorder: false,
            color: (ctx) => (ctx.tick.value === 0 ? "#7b7c7f" : "transparent"),
            lineWidth: (ctx) => (ctx.tick.value === 0 ? 2 : 0),
          },
          ticks: { display: false },
          border: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });
  const customXticksContainer = document.getElementById("p2c3customXticks");

  // Clear old if re-rendering
  customXticksContainer.innerHTML = "";

  // Render each label (with \n split)
  labels.forEach((label) => {
    const [line1, line2] = label.split(" ");
    const tick = document.createElement("div");
    tick.className = "tick";
    tick.innerHTML = `${line1}<br>${line2}`;
    customXticksContainer.appendChild(tick);
  });
}

function p2Chart4() {
  const ctx = document.getElementById("p2Chart4").getContext("2d");

  const labels = [
    "Q4 2022",
    "Q1 2023",
    "Q2 2023",
    "Q3 2023",
    "Q4 2023",
    "Q1 2024",
    "Q2 2024",
    "Q3 2024",
    "Q4 2024",
  ];

  const cash = [76, 72, 9, 1, 8, 15, 2, 27, 25];
  const advisory = [-5, 9, 4, -36, -24, -13, -35, 29, 28];

  const datasets = [];

  datasets.push({
    label: "Institutional Active",
    data: cash,
    backgroundColor: "#7c7b7f",
    stack: "combined",
    datalabels: {
      display: (ctx) => ctx.dataset.data[ctx.dataIndex] !== 0,
      formatter: (value) => (value < 0 ? `$(${Math.abs(value)})` : `$${value}`),
      color: "white",
      font: { size: 10.67, weight: "bold" },
    },
  });

  datasets.push({
    label: "Institutional Index",
    data: advisory,
    backgroundColor: "#d6d5dd",
    stack: "combined",
    datalabels: {
      display: (ctx) => ctx.dataset.data[ctx.dataIndex] !== 0,
      formatter: (value) => (value < 0 ? `$(${Math.abs(value)})` : `$${value}`),
      color: function (ctx) {
        const barHeight =
          ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.dataIndex]
            ?.height || 0;
        const fontSize = 10.67; // must match your actual font size

        // If bar is too short to show text in white, use black
        return barHeight < fontSize + 4 ? "#7c7b7f" : "#fff";
      },

      font: { size: 10.67, weight: "bold" },
    },
  });

  // Calculate totals
  const totals = cash.map((_, i) => {
    const sum = (cash[i] || 0) + (advisory[i] || 0);
    return sum !== 0 ? 0.01 : 0; // tiny visible bar just for label
  });

  const totalLabels = cash.map((_, i) => {
    const c = cash[i] || 0;
    const a = advisory[i] || 0;
    const sum = c + a;
    return sum !== 0 ? `${sum < 0 ? "-" : ""}$${Math.abs(sum)}` : "";
  });

  // Top visible "Sum" segment
  datasets.push({
    label: "Total",
    data: totals,
    backgroundColor: "transparent", // invisible bar
    stack: "combined",
    datalabels: {
      display: (ctx) => totalLabels[ctx.dataIndex] !== "",
      formatter: (_, ctx) => totalLabels[ctx.dataIndex],
      color: "#000",
      font: { size: 11, weight: "bold" },
      anchor: "end", // position at top of bar
      align: "top", // move slightly above bar
      backgroundColor: "#fff",
      borderColor: "#00000000",
      borderWidth: 1,
      borderRadius: 3,
      padding: 1,
    },
    borderWidth: 0, // no border since it's invisible
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      layout: {
        padding: {
          top: 20,
        },
      },
      plugins: {
        legend: {
          padding: 4,
          display: false,
          position: "top", // 👈 move legend to the top
          labels: {
            color: "#000",
            font: {
              size: 12,
              weight: "bold",
            },
            boxWidth: 12,
            padding: 15,
            filter: function (legendItem) {
              return legendItem.text !== "Total"; // Hide only "Total" from legend
            },
          },
        },

        tooltip: { enabled: true },
        datalabels: {
          anchor: "center",
          align: "center",
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false, drawBorder: false },

          ticks: { display: false },
          border: { display: false },
        },
        y: {
          stacked: true,
          beginAtZero: true,
          grid: {
            drawBorder: false,
            color: (ctx) => (ctx.tick.value === 0 ? "#7b7c7f" : "transparent"),
            lineWidth: (ctx) => (ctx.tick.value === 0 ? 2 : 0),
          },
          ticks: { display: false },
          border: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  const customXticksContainer = document.getElementById("p2c4customXticks");

  // Clear old if re-rendering
  customXticksContainer.innerHTML = "";

  // Render each label (with \n split)
  labels.forEach((label) => {
    const [line1, line2] = label.split(" ");
    const tick = document.createElement("div");
    tick.className = "tick";
    tick.innerHTML = `${line1}<br>${line2}`;
    customXticksContainer.appendChild(tick);
  });
  const legends = [
    { name: "Institutional Active ", color: "#d6d5dd" },
    { name: "Institutional Index", color: "#7c7b7f" },
  ];

  renderCustomLegend(legends, "p2c4customLegend");
}

function createCustomTicks(customTicksId, labels) {
  const customXticksContainer = document.getElementById(customTicksId);

  // Clear old if re-rendering
  customXticksContainer.innerHTML = "";

  // Render each label (with \n split)
  labels.forEach((label) => {
    const [line1, line2] = label.split(" ");
    const tick = document.createElement("div");
    tick.className = "tick";
    tick.innerHTML = `${line1}<br>${line2}`;
    customXticksContainer.appendChild(tick);
  });
}

//  PAGE 3 CHARTS
function createBarAndLineCharts({
  barCanvasId,
  lineCanvasId,
  labels,
  barData,
  lineData,
  customTicksId,
  customLegendsId,
  legends,
  lineSign,
}) {
  let buffer = 250;
  if (barCanvasId == "p4c2BarChart") {
    buffer = 1;
  }
  // Bar Chart
  new Chart(document.getElementById(barCanvasId).getContext("2d"), {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "",
          data: barData,
          backgroundColor: "#000000",
          datalabels: {
            anchor: "end",
            align: "start",
            offset: -20,
            color: "#000000",
            formatter: (val) => `$${val.toLocaleString()}`,
            font: {
              size: 10.67,
              weight: "bold",
            },
          },
        },
      ],
    },
    options: {
      layout: {
        padding: { top: 0 },
      },
      responsive: true,
      plugins: {
        legend: { display: false },
        datalabels: { display: true },
      },
      scales: {
        x: {
          grid: { display: false, drawBorder: false },
          ticks: { display: false },
          border: { display: false },
        },
        y: {
          beginAtZero: true,
          max: Math.max(...barData) + buffer,
          grid: {
            drawBorder: false,
            color: (ctx) => (ctx.tick.value === 0 ? "#7b7c7f" : "transparent"),
            lineWidth: (ctx) => (ctx.tick.value === 0 ? 2 : 0),
          },
          ticks: { display: false },
          border: { display: false },
        },
      },
    },
    plugins: [ChartDataLabels],
  });

  // Line Chart
  if (lineData.length != 0) {
    new Chart(document.getElementById(lineCanvasId).getContext("2d"), {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "",
            data: lineData,
            borderColor: "#ff4713",
            backgroundColor: "#ff4713",
            borderWidth: 6,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 0,
            fill: false,
            datalabels: {
              anchor: "start",
              align: "end",
              color: "#000000",
              formatter: (val) => {
                if (lineSign === "%") return `${val.toFixed(1)}%`;
                if (lineSign === "$") return `$${val.toFixed(1)}`;
                return `${val.toFixed(1)}`;
              },

              font: {
                size: 10.67,
                weight: "bold",
              },
            },
          },
        ],
      },
      options: {
        layout: {
          padding: { left: 20, right: 20, top: 25 },
        },
        backgroundColor: "transparent",
        responsive: true,
        plugins: {
          legend: { display: false },
          datalabels: { display: true },
        },
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: { display: false },
            border: { display: false },
          },
          y: {
            beginAtZero: false,
            grid: { display: false, drawBorder: false },
            ticks: { display: false },
            border: { display: false },
          },
        },
      },
      plugins: [ChartDataLabels],
    });
  }

  createCustomTicks(customTicksId, labels);

  renderCustomLegend(legends, customLegendsId);
}

// Run the chart when document is ready
$(document).ready(function () {
  p1Chart1();
  p1Chart2();
  p1Chart3();
  p1Chart4();

  p2Chart1();
  p2Chart2();
  p2Chart3();
  p2Chart4();

  createBarAndLineCharts({
    barCanvasId: "p3c1BarChart",
    lineCanvasId: "p3c1LineChart",
    lineSign: "%",
    labels: [
      "Q4 2022",
      "Q1 2023",
      "Q2 2023",
      "Q3 2023",
      "Q4 2023",
      "Q1 2024",
      "Q2 2024",
      "Q3 2024",
      "Q4 2024",
    ],
    barData: [1577, 1511, 1675, 1691, 1716, 1775, 1881, 2128, 2326],
    lineData: [41.2, 40.4, 42.5, 42.3, 41.6, 42.2, 44.1, 45.8, 46.3],
    customLegendsId: "p3c1customLegends",
    customTicksId: "p3c1customXticks",
    legends: [
      { name: "Operating Income, as adjusted ", color: "#000000" },
      { name: "Operating Margin, as adjusted", color: "#ff4713" },
    ],
  });

  createBarAndLineCharts({
    barCanvasId: "p3c2BarChart",
    lineCanvasId: "p3c2LineChart",
    lineSign: "$",
    labels: [
      "Q4 2022",
      "Q1 2023",
      "Q2 2023",
      "Q3 2023",
      "Q4 2023",
      "Q1 2024",
      "Q2 2024",
      "Q3 2024",
      "Q4 2024",
    ],
    barData: [1356, 1200, 1399, 1642, 1451, 1473, 1550, 1715, 1874],
    lineData: [8.93, 7.93, 9.28, 10.91, 9.66, 9.81, 10.36, 11.46, 11.93],
    customLegendsId: "p3c2customLegends",
    customTicksId: "p3c2customXticks",
    legends: [
      { name: "Net Income, as adjusted ", color: "#000000" },
      { name: "EPS, as adjusted", color: "#ff4713" },
    ],
  });
  createBarAndLineCharts({
    barCanvasId: "p4c1BarChart",
    lineCanvasId: "p4c1LineChart",
    lineSign: "",
    labels: [
      "Q4 2022",
      "Q1 2023",
      "Q2 2023",
      "Q3 2023",
      "Q4 2023",
      "Q1 2024",
      "Q2 2024",
      "Q3 2024",
      "Q4 2024",
    ],
    barData: [500, 375, 375, 375, 375, 375, 500, 375, 375],
    lineData: [151.8, 151.3, 150.7, 150.5, 150.2, 150.1, 149.7, 149.6, 157.0],
    customLegendsId: "p4c1customLegends",
    customTicksId: "p4c1customXticks",
    legends: [
      { name: "Share repurchases", color: "#000000", infoPoint: 2 },
      { name: "Weighted-average diluted shares", color: "#ff4713" },
    ],
  });
  createBarAndLineCharts({
    barCanvasId: "p4c2BarChart",
    lineCanvasId: "",
    lineSign: "",
    labels: [
      "Q4 2022",
      "Q1 2023",
      "Q2 2023",
      "Q3 2023",
      "Q4 2023",
      "Q1 2024",
      "Q2 2024",
      "Q3 2024",
      "Q4 2024",
    ],
    barData: [4.88, 5.0, 5.0, 5.0, 5.0, 5.1, 5.1, 5.1, 5.1],
    lineData: [],
    customLegendsId: "p4c2customLegends",
    customTicksId: "p4c2customXticks",
    legends: [
      { name: "Share repurchases", color: "#000000", infoPoint: 2 },
      { name: "Weighted-average diluted shares", color: "#ff4713" },
    ],
  });
});
