import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
function LineChart() {
  const labels = [
    "May 2021",
    "Jun 2021",
    "Jul 2021",
    "Aug 2021",
    "Sep 2021",
    "Nov 2021",
    "Dec 2021",
  ];

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        align: "start",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#fff",
          beginAtZero: true,
          font: {
            size: 12,
          },
        },
      },

      y: {
        ticks: {
          color: "#fff",
          beginAtZero: true,
          font: {
            size: 13,
          },
          // }
        },
      },
    },

    elements: {
      point: {
        radius: 2,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        data: [
          255000,
          265000,
          257000,
          275000,
          270000,
          280000,
          270000,
          280000,
          252000,
        ],
        fill: false,
        tension: 0.4,
        borderColor: "#6e50b6",
      },
    ],
  };
  return (
    <div className="lineChartWrapper">
      <Line
        data={data}
        options={options}
        width={"625px"}
        height={"213px"}
        margin={"0px 20px"}
      />
    </div>
  );
}

export default LineChart;
