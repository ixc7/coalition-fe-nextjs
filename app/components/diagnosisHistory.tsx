export const DiagnosisHistory = () => (
  <div className="bg-white p-5 rounded-2xl shadow-sm">
    <h1 className="text-2xl font-extrabold">Diagnosis History</h1>

    <div className="mt-10 grid grid-cols-3 gap-5">
      <div
        className="
        col-span-full aspect-video p-4 rounded-xl bg-[#F4F0FE]
        grid grid-cols-subgrid gap-5
      ">
        <div className="col-span-2">Blood Pressure</div>
        <div className="col-span-1">Systolic Diastolic</div>
      </div>
      <div className="col-span-1 aspect-square p-4 rounded-xl bg-[#E0F3FA]">
        <div
          className="w-24 h-24 rounded-full bg-cover"
          style={{
            backgroundImage: "url('./respiratory rate.svg')",
          }}
        />
        <p>Respiratory Rate</p>
        <h1 className="text-3xl font-extrabold">20 bpm</h1>
        <p>Normal</p>
      </div>
      <div className="col-span-1 aspect-square p-4 rounded-xl bg-[#FFE6E9]">
        <div
          className="w-24 h-24 rounded-full bg-cover"
          style={{
            backgroundImage: "url('./temperature.svg')",
          }}
        />
        <p>Temperature</p>
        <h1 className="text-3xl font-extrabold">98.6°F</h1>
        <p>Normal</p>
      </div>
      <div className="col-span-1 aspect-square p-4 rounded-xl bg-[#FFE6F1]">
        <div
          className="w-24 h-24 rounded-full bg-cover"
          style={{
            backgroundImage: "url('./heartBPM.svg')",
          }}
        />
        <p>Heart Rate</p>
        <h1 className="text-3xl font-extrabold">78 bpm</h1>
        <p>Lower than Average</p>
      </div>
    </div>
  </div>
)
