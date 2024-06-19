export const DiagnosisHistory = () => (
  <div className="bg-white p-5 rounded-2xl">
    <h1 className="text-2xl font-extrabold">Diagnosis History</h1>

    <div className="mt-10 grid grid-cols-3 gap-5">
      <div className="bg-active-2 col-span-full aspect-video p-4 rounded-xl">
        Blood Pressure
      </div>
      <div className="col-span-1 bg-active-2 aspect-square p-4 rounded-xl">
        <div className="w-24 h-24 rounded-full bg-active-1" />
        <p>Respiratory Rate</p>
        <h1 className="text-3xl font-extrabold">20 bpm</h1>
        <p>Normal</p>
      </div>
      <div className="col-span-1 bg-active-2 aspect-square p-4 rounded-xl">
        <div className="w-24 h-24 rounded-full bg-active-1" />
        <p>Temperature</p>
        <h1 className="text-3xl font-extrabold">98.6°F</h1>
        <p>Normal</p>
      </div>
      <div className="col-span-1 bg-active-2 aspect-square p-4 rounded-xl">
        <div className="w-24 h-24 rounded-full bg-active-1" />
        <p>Heart Rate</p>
        <h1 className="text-3xl font-extrabold">78 bpm</h1>
        <p>Lower than Average</p>
      </div>
    </div>
  </div>
)
