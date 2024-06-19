"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

const options = {
  responsive: true,
  scales: {
    y: {
      suggestedMin: 60,
      suggestedMax: 180,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

const data = {
  labels: [
    "Oct, 2023",
    "Nov, 2023",
    "Dec, 2023",
    "Jan, 2024",
    "Feb, 2024",
    "Mar, 2024",
  ],
  // labels: ["a", "b", "c", "d", "e", "f"],
  datasets: [
    {
      label: "Systolic",
      data: [60, 70, 160, 150, 100, 140],
      borderColor: "rgb(255, 99, 132)",
      tension: 0.25,
    },
    {
      label: "Diastolic",
      data: [60, 80, 130, 120, 100, 110],
      borderColor: "rgb(53, 162, 235)",
      tension: 0.25,
    },
  ],
}

export const LineChart = () => {
  return (
    <Line
      options={options}
      data={data}
    />
  )
}
