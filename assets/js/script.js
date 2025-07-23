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

function createCustomTicks(customTicksId, labels, breaks = false) {
  const customXticksContainer = document.getElementById(customTicksId);

  // Clear old if re-rendering
  customXticksContainer.innerHTML = "";

  labels.forEach((label) => {
    const tick = document.createElement("div");
    tick.className = "tick";

    if (!breaks) {
      const words = label.split(" ");
      const processedWords = [];

      for (let i = 0; i < words.length; i++) {
        processedWords.push(words[i]);

        // Check if next word exists and both current and next are >= 3 letters
        if (i < words.length - 1 && words[i].length > 1) {
          processedWords.push("<br>");
        }
      }

      tick.innerHTML = processedWords.join(" ");
    } else {
      tick.textContent = label;
    }

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

function waterfallChart({
  elementId = "waterfallChart",
  labels = [],
  values = [],
  valueInfo = [],
  title = "",
  relativeColorIncreasing = "#2ca02c",
  relativeColorDecreasing = "#d62728",
  totalColor = "#000000",
  textPrefix = "$",
  cutLineWidth = 12,
  customTicksId,
}) {
  if (labels.length !== values.length || labels.length < 2) {
    console.error(
      "Labels and values must be of same length and at least 2 items."
    );
    return;
  }
  let sum = 0;
  // Calculate measure array
  const measure = ["absolute"];
  for (let i = 1; i < values.length - 1; i++) {
    sum += values[i];
    measure.push("relative");
  }
  measure.push("absolute");

  // Calculate total
  const total =
    values[0] + values.slice(1, -1).reduce((sum, val) => sum + val, 0);
  values[values.length - 1] = total;

  const formattedText = values.map((val, i) => {
    const info = valueInfo.find((v) => v.index === i);
    const display =
      val < 0 ? `$(${Math.abs(val)})` : `$${val.toLocaleString()}`;
    return info ? `${display}<sup>(${info.info})</sup>` : display;
  });

  const textSizes = labels.map((_, i) => {
    return i === 0 || i === labels.length - 1 ? 12 : 11; // absolute bars = 16px, others = 12px
  });

  const data = [
    {
      type: "waterfall",
      orientation: "v",
      measure: measure,
      x: labels,
      y: values,
      text: formattedText,
      textposition: "outside",
      textfont: {
        family: "Arial Black, sans-serif",
        size: textSizes,
        color: "#000000",
      },
      decreasing: { marker: { color: relativeColorDecreasing } },
      increasing: { marker: { color: relativeColorIncreasing } },
      totals: { marker: { color: totalColor } },
      connector: {
        line: { color: "rgba(0,0,0,0)" },
      },
    },
  ];

  const maxY = Math.max(...values);
  const barWidth = 0.8;

  // Make cut lines 30% wider than the bar
  const cutLineSpan = barWidth * 1.3;
  const halfCutSpan = cutLineSpan / 2;

  // Vertical placement just above bottom
  const cutHeight = maxY * 0.05;
  const gap = cutHeight * 0.3;
  const baseY = cutHeight + 200;

  // Bar centers
  const firstBarX = 0; // index 0
  const lastBarX = labels.length - 1; // last index

  const shapes = [
    // Bottom axis line
    {
      type: "line",
      xref: "paper",
      yref: "y",
      x0: 0,
      x1: 1,
      y0: 0,
      y1: 0,
      line: {
        color: "#7b7c7f",
        width: 2,
      },
    },
    // Left (first) bar cut line
    {
      type: "line",
      xref: "x",
      yref: "y",
      x0: firstBarX - halfCutSpan,
      x1: firstBarX + halfCutSpan,
      y0: baseY,
      y1: baseY + cutHeight,
      line: { color: "#ffffff", width: cutLineWidth },
    },
    // Right (last) bar cut line
    {
      type: "line",
      xref: "x",
      yref: "y",
      x0: lastBarX - halfCutSpan,
      x1: lastBarX + halfCutSpan,
      y0: baseY,
      y1: baseY + cutHeight,
      line: { color: "#ffffff", width: cutLineWidth },
    },
  ];

  const layout = {
    title: { text: "", font: { size: 0 } },
    xaxis: {
      showticklabels: false,
      showgrid: false,
      zeroline: false,
      ticks: "",
    },
    yaxis: {
      showticklabels: false,
      showgrid: false,
      zeroline: false,
      ticks: "",
    },
    margin: { t: 0, b: 0, l: 0, r: 0 }, // Remove all margins
    padding: 0, // Not required, but safe to include for clarity

    plot_bgcolor: "#ffffff",
    paper_bgcolor: "#ffffff",

    shapes: shapes,
  };

  const capTopY = maxY * 1.2; // Top vertical line for "SUM"
  const capMidY = maxY * 1.15; // Horizontal line level
  const capBottomY = maxY * 1.1; // Bottom vertical lines from cap
  const centerX = (labels.length - 1) / 2;

  const annotations = [
    {
      xref: "x",
      yref: "y",
      x: centerX,
      y: capTopY + maxY * 0.06,
      text:
        "<b style='font-size: 13px !important;'>$" +
        sum.toLocaleString() +
        "</b>",
      showarrow: false,
      font: {
        size: 15,
        family: "Arial Black, sans-serif",
        color: "#000",
      },
      align: "center",
    },
  ];

  const capShapes = [
    // Vertical line in center pointing up to label
    {
      type: "line",
      xref: "x",
      yref: "y",
      x0: centerX,
      x1: centerX,
      y0: capMidY,
      y1: capTopY,
      line: { color: "#7c7b7f", width: 1 },
    },
    // Horizontal line connecting first to last bar
    {
      type: "line",
      xref: "x",
      yref: "y",
      x0: 0,
      x1: labels.length - 1,
      y0: capMidY,
      y1: capMidY,
      line: { color: "#7c7b7f", width: 1 },
    },
    // Left vertical line
    {
      type: "line",
      xref: "x",
      yref: "y",
      x0: 0,
      x1: 0,
      y0: capMidY,
      y1: capBottomY,
      line: { color: "#7c7b7f", width: 1 },
    },
    // Right vertical line
    {
      type: "line",
      xref: "x",
      yref: "y",
      x0: labels.length - 1,
      x1: labels.length - 1,
      y0: capMidY,
      y1: capBottomY,
      line: { color: "#7c7b7f", width: 1 },
    },
  ];
  layout.annotations = [...(layout.annotations || []), ...annotations];
  layout.shapes.push(...capShapes);

  const config = {
    displayModeBar: false,
    staticPlot: true,
    responsive: true, // ensures no overflow on resize
  };

  Plotly.newPlot(elementId, data, layout, config);

  createCustomTicks(customTicksId, labels, false);
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

  waterfallChart({
    elementId: "waterfallChart1",
    labels: [
      "Q4 2023",
      "Base fees",
      "Performance fees",
      "Technology services revenue",
      "Advisory and other revenue",
      "Distribution fees",
      "Securities lending revenue",
      "Q4 2024",
    ],
    values: [4631, 808, 140, 49, 26, 19, 4, 0], // End gets auto-calculated
    relativeColorIncreasing: "#008b5c",
    relativeColorDecreasing: "#c00b28",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p5c1customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart2",
    labels: [
      "Q4 2023",
      "Base fees",
      "Performance fees",
      "Technology services revenue",
      "Securities lending revenue",
      "Advisory and other revenue",
      "Distribution fees",
      "Q4 2024",
    ],
    values: [5197, 375, 63, 25, 12, 6, -1, 0], // End gets auto-calculated
    relativeColorIncreasing: "#008b5c",
    relativeColorDecreasing: "#c00b28",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p5c2customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart3",
    labels: [
      "Q4 2023",
      "ETFs EQ",
      "Alts",
      "Active EQ",
      "Cash",
      "ETFs FI",
      "Multi-Asset",
      "Non-ETF EQ",
      "Active FI",
      "Non-ETF FI",
      "Q4 2024",
    ],
    values: [3605, 273, 273, 74, 53, 49, 27, 26, 26, 11, 4417], // End gets auto-calculated
    valueInfo: [{ index: 2, info: 1 }],
    relativeColorIncreasing: "#008b5c",
    relativeColorDecreasing: "#c00b28",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p6c1customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart4",
    labels: [
      "Q4 2023",
      "Alts",
      "ETFs EQ",
      "Cash",
      "Non-ETF EQ",
      "ETFs FI",
      "Active EQ",
      "Non-ETF FI",
      "Active FI",
      "Multi-Asset",
      "Q4 2024",
    ],
    values: [4030, 265, 66, 29, 11, 6, 5, 3, 1, 1, 4417], // End gets auto-calculated
    valueInfo: [{ index: 1, info: 1 }],
    relativeColorIncreasing: "#008b5c",
    relativeColorDecreasing: "#c00b28",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p6c2customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart5",
    labels: [
      "Q4 2023",
      "General & administration",
      "Sales, asset & account",
      "Employee comp. & benefits",
      "Q4 2024",
    ],
    values: [2915, -1, 141, 296, 3351], // End gets auto-calculated
    valueInfo: [],
    relativeColorIncreasing: "#c00b28",
    relativeColorDecreasing: "#008b5c",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p7c1customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart6",
    labels: [
      "Q4 2023",
      "Sales, asset & account",
      "General & administration",
      "Employee comp. & benefits",
      "Q4 2024",
    ],
    values: [3069, 34, 39, 209, 3351], // End gets auto-calculated
    valueInfo: [],
    relativeColorIncreasing: "#c00b28",
    relativeColorDecreasing: "#008b5c",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p7c2customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart7",
    labels: [
      "2023",
      "Base Fees",
      "Performance fees",
      "Technology services revenue",
      "Advisory and other revenue",
      "Distribution fees",
      "Securities lending revenue",
      "2024",
    ],
    values: [17859, 1761, 653, 118, 65, 11, -60, 20407], // End gets auto-calculated
    valueInfo: [],
    relativeColorIncreasing: "#008b5c",
    relativeColorDecreasing: "#c00b28",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p8c1customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart8",
    labels: [
      "Q4 2023",
      "ETFs EQ",
      "Alts",
      "Active EQ",
      "Cash",
      "ETFs FI",
      "Multi-Asset",
      "Non-ETF EQ",
      "Active FI",
      "Non-ETF FI",
      "Q4 2024",
    ],
    values: [14399, 706, 365, 166, 140, 137, 75, 55, 41, 16, 16100], // End gets auto-calculated
    valueInfo: [],
    relativeColorIncreasing: "#008b5c",
    relativeColorDecreasing: "#c00b28",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p9c1customXticks",
  });

  waterfallChart({
    elementId: "waterfallChart10",
    labels: [
      "&nbsp;2023&nbsp;",
      "General & administration",
      "Sales, asset & account",
      "Employee comp. & benefits",
      "&nbsp;2024&nbsp;",
    ],
    values: [11266, 104, 277, 650, 0], // End gets auto-calculated
    valueInfo: [],
    relativeColorIncreasing: "#c00b28",
    relativeColorDecreasing: "#008b5c",
    totalColor: "#000000",
    cutLineWidth: 12,
    customTicksId: "p10c1customXticks",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const pageNumberElements = document.querySelectorAll(".page-number");

  pageNumberElements.forEach((el, index) => {
    el.textContent = index + 1;
  });
});
function p12Charts({ canvasId, datasets }) {
  console.log(canvasId);
  const ctx = document.getElementById(canvasId).getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Bar 1", "Bar 2"],
      datasets: datasets,
    },
    options: {
      responsive: true,
      layout: {
        padding: {
          top: 20,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        datalabels: {
          display: true,
          color: "#fff",
          backgroundColor: function (context) {
            const value = context.dataset.data[context.dataIndex];
            return value < 15 ? context.dataset.backgroundColor : null;
          },
          borderRadius: 4,
          padding: function (context) {
            const value = context.dataset.data[context.dataIndex];
            return value < 15 ? 4 : 0;
          },
          font: function (context) {
            const value = context.dataset.data[context.dataIndex];
            let size = 12;
            if (value < 15) size = 10;

            return { weight: "bold", size };
          },
          formatter: (value) => value,

          // 🔁 Alternate horizontal alignment
          align: function (context) {
            const value = context.dataset.data[context.dataIndex];
            if (value < 15) {
              // Alternate between left and right
              return context.dataIndex % 2 === 0 ? "left" : "right";
            }
            return "center";
          },

          anchor: "center", // Keep vertical center to prevent jumping
          offset: 20, // Push it outward slightly
          textAlign: "center",
          clip: false, // Let labels overflow the chart area if needed
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
    plugins: [
      ChartDataLabels,
      {
        id: "totalLabelPlugin",
        afterDatasetsDraw(chart, args, pluginOptions) {
          const {
            ctx,
            data,
            chartArea: { top },
            scales: { x, y },
          } = chart;

          ctx.save();
          data.labels.forEach((label, i) => {
            let total = 0;
            data.datasets.forEach((ds) => {
              const val = ds.data[i];
              if (typeof val === "number") total += val;
            });

            // Position above the top of the bar
            const xPos = x.getPixelForValue(i);
            const yPos = y.getPixelForValue(total) - 10;

            ctx.fillStyle = "#000";
            ctx.font = "bold 9pt sans-serif";
            ctx.textAlign = "center";
            ctx.fillText("$" + total, xPos, yPos);
          });
          ctx.restore();
        },
      },
    ],
  });
}

function renderStackLabels(datasets) {
  const container = document.getElementById("stack-labels");
  if (!container) return;

  // Clear old labels
  container.innerHTML = "";

  // Loop in reverse order
  datasets.slice().reverse().forEach((item) => {
    const labelDiv = document.createElement("div");
    labelDiv.className = "stack-label d-flex align-items-center mb-2";

    const circle = document.createElement("span");
    circle.className = "color-circle me-2";
    circle.style.backgroundColor = item.backgroundColor;

    const labelText = document.createElement("span");
    labelText.textContent = item.label;

    labelDiv.appendChild(circle);
    labelDiv.appendChild(labelText);
    container.appendChild(labelDiv);
  });
}

$(document).ready(function () {
  p12Charts({
    canvasId: "p12Chart1Canvas",
    datasets: [
      {
        label: "Institutional",
        data: [84, 90],
        backgroundColor: "#000000",
      },
      {
        label: "Institutional",
        data: [75, 76],
        backgroundColor: "#ff4713",
      },
      {
        label: "Institutional",
        data: [51, 170],
        backgroundColor: "#7c7b7f",
      },
      {
        label: "Institutional",
        data: [42, 43],
        backgroundColor: "#9062bc",
      },
      {
        label: "Institutional",
        data: [34, 38],
        backgroundColor: "#fc9bb3",
      },
      {
        label: "Retail",
        data: [28, 27],
        backgroundColor: "#d6d5dd",
      },
      {
        label: "Multi-alternatives",
        data: [13, 11],
        backgroundColor: "#ffd838",
      },
    ],
  });

  p12Charts({
    canvasId: "p12Chart2Canvas",
    datasets: [
      {
        label: "Liquid credit",
        data: [84, 90],
        backgroundColor: "#000000",
      },
      {
        label: "Liquid alternatives",
        data: [74, 76],
        backgroundColor: "#ff4713",
      },
      {
        label: "Infrastructure",
        data: [36, 110],
        backgroundColor: "#7c7b7f",
      },
      {
        label: "Private equity",
        data: [35, 36],
        backgroundColor: "#9062bc",
      },
      {
        label: "Private credit",
        data: [31, 32],
        backgroundColor: "#fc9bb3",
      },
      {
        label: "Real estate",
        data: [28, 26],
        backgroundColor: "#d6d5dd",
      },
      {
        label: "Multi-alternatives",
        data: [7, 7],
        backgroundColor: "#ffd838",
      },
    ],
  });

  renderStackLabels([
    {
      label: "Liquid credit",
      backgroundColor: "#000000",
    },
    {
      label: "Liquid alternatives",
      backgroundColor: "#ff4713",
    },
    {
      label: "Infrastructure",
      backgroundColor: "#7c7b7f",
    },
    {
      label: "Private equity",
      backgroundColor: "#9062bc",
    },
    {
      label: "Private credit",
      backgroundColor: "#fc9bb3",
    },
    {
      label: "Real estate",
      backgroundColor: "#d6d5dd",
    },
    {
      label: "Multi-alternatives",
      backgroundColor: "#ffd838",
    },
  ]);
});
