import { LineChart } from "./lineChart.tsx"

export const DiagnosisHistory = ({ apiData }) => {
  const { heart_rate, respiratory_rate, temperature, blood_pressure } =
    apiData.diagnosis_history[0]
  const { systolic, diastolic } = blood_pressure

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h1 className="text-2xl font-extrabold">Diagnosis History</h1>

      <div className="mt-10 grid grid-cols-3 gap-5">
        <div
          className="
        col-span-full p-4 rounded-xl bg-chart
        grid grid-cols-subgrid gap-5
      ">
          <div className="col-span-2">
            <div className="flex justify-between">
              <h1 className="font-bold text-[1.125rem] leading-6">
                Blood Pressure
              </h1>
              <ul>Last 6 months</ul>
            </div>

            <LineChart />
          </div>

          <div className="col-span-1">
            <div className="flex items-center gap-1 mb-2">
              <div className="w-3.5 h-3.5 bg-systolic rounded-full" />
              <h2 className="font-bold">Systolic</h2>
            </div>
            <p className="text-[1.375rem] font-bold mb-2 leading-8">
              {systolic.value}
            </p>
            <p>{systolic.levels}</p>

            <hr className="my-[1.125rem]" />

            <div className="flex items-center gap-1 mb-2">
              <div className="w-3.5 h-3.5 bg-diastolic rounded-full" />
              <h2 className="font-bold">Diastolic</h2>
            </div>

            <p className="text-[1.375rem] font-bold mb-2 leading-8">
              {diastolic.value}
            </p>

            <p>{diastolic.levels}</p>
          </div>
        </div>

        <div className="col-span-1 aspect-square p-4 rounded-xl bg-respiratory">
          <div
            className="w-24 h-24 rounded-full bg-cover"
            style={{
              backgroundImage: "url('./respiratory rate.svg')",
            }}
          />
          <p className="mt-4 text-base">Respiratory Rate</p>
          <h1 className="text-3xl font-extrabold">
            {respiratory_rate.value} bpm
          </h1>
          <p className="mt-4">{respiratory_rate.levels}</p>
        </div>

        <div className="col-span-1 aspect-square p-4 rounded-xl bg-temperature">
          <div
            className="w-24 h-24 rounded-full bg-cover"
            style={{
              backgroundImage: "url('./temperature.svg')",
            }}
          />
          <p className="mt-4 text-base">Temperature</p>
          <h1 className="text-3xl font-extrabold">{temperature.value}°F</h1>
          <p className="mt-4">{temperature.levels}</p>
        </div>

        <div className="col-span-1 aspect-square p-4 rounded-xl bg-heart-rate">
          <div
            className="w-24 h-24 rounded-full bg-cover"
            style={{
              backgroundImage: "url('./heartBPM.svg')",
            }}
          />
          <p className="mt-4 text-base">Heart Rate</p>
          <h1 className="text-3xl font-extrabold">{heart_rate.value} bpm</h1>
          <p className="mt-4">{heart_rate.levels}</p>
        </div>
      </div>
    </div>
  )
}
