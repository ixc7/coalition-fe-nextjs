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

export const LineChart = ({ apiData }) => {
  const { diagnosis_history } = apiData

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
    labels: diagnosis_history
      .map(({ month, year }) => `${month}, ${year}`)
      .toReversed()
      .slice(-6),

    datasets: [
      {
        label: "Systolic",
        data: diagnosis_history
          .toReversed()
          .map((i) => i.blood_pressure.systolic.value)
          .slice(-6),

        borderColor: "#E66FD2",
        tension: 0.35,
      },
      {
        label: "Diastolic",
        data: diagnosis_history
          .toReversed()
          .map((i) => i.blood_pressure.diastolic.value)
          .slice(-6),

        borderColor: "#8C6FE6",
        tension: 0.35,
      },
    ],
  }

  return (
    <Line
      options={options}
      data={data}
    />
  )
}
