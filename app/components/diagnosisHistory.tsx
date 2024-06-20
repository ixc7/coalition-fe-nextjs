import { LineChart } from "./lineChart.tsx"
import apiData from "../data.json"

const { diagnosis_history } = apiData
const { heart_rate, respiratory_rate, temperature, blood_pressure } =
  diagnosis_history[0]
const { systolic, diastolic } = blood_pressure

export const DiagnosisHistory = () => (
  <div className="bg-white p-5 rounded-2xl shadow-sm">
    <h1 className="text-2xl font-extrabold">Diagnosis History</h1>

    <div className="mt-10 grid grid-cols-3 gap-5">
      <div
        className="
        col-span-full p-4 rounded-xl bg-[#F4F0FE]
        grid grid-cols-subgrid gap-5
      ">
        <div className="col-span-2">
          <div className="flex justify-between">
            <h1 className="font-bold text-[1.125rem]">Blood Pressure chart</h1>
            <ul>Last 6 months</ul>
          </div>
          <LineChart />
        </div>
        <div className="col-span-1">
          <div className="flex items-center gap-1 mb-2">
            <div className="w-3.5 h-3.5 bg-[#E66FD2] rounded-full" />
            <h2 className="font-bold text-[0.875rem]">Systolic</h2>
          </div>
          <p className="text-[1.375rem] font-bold mb-2">{systolic.value}</p>
          <p className="text-[0.875rem]">{systolic.levels}</p>

          <hr className="my-[1.125rem]" />

          <div className="flex items-center gap-1 mb-2">
            <div className="w-3.5 h-3.5 bg-[#8C6FE6] rounded-full" />
            <h2 className="font-bold text-[0.875rem]">Diastolic</h2>
          </div>

          <p className="text-[1.375rem] font-bold mb-2">{diastolic.value}</p>
          <p className="text-[0.875rem]">{diastolic.levels}</p>
        </div>
      </div>

      <div className="col-span-1 aspect-square p-4 rounded-xl bg-[#E0F3FA]">
        <div
          className="w-24 h-24 rounded-full bg-cover"
          style={{
            backgroundImage: "url('./respiratory rate.svg')",
          }}
        />
        <p>Respiratory Rate</p>
        <h1 className="text-3xl font-extrabold">
          {respiratory_rate.value} bpm
        </h1>
        <p>{respiratory_rate.levels}</p>
      </div>
      <div className="col-span-1 aspect-square p-4 rounded-xl bg-[#FFE6E9]">
        <div
          className="w-24 h-24 rounded-full bg-cover"
          style={{
            backgroundImage: "url('./temperature.svg')",
          }}
        />
        <p>Temperature</p>
        <h1 className="text-3xl font-extrabold">{temperature.value}°F</h1>
        <p>{temperature.levels}</p>
      </div>
      <div className="col-span-1 aspect-square p-4 rounded-xl bg-[#FFE6F1]">
        <div
          className="w-24 h-24 rounded-full bg-cover"
          style={{
            backgroundImage: "url('./heartBPM.svg')",
          }}
        />
        <p>Heart Rate</p>
        <h1 className="text-3xl font-extrabold">{heart_rate.value} bpm</h1>
        <p>{heart_rate.levels}</p>
      </div>
    </div>
  </div>
)
