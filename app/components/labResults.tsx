import data from "../data.json"

const { lab_results } = data

export const LabResults = () => (
  <div className="bg-white mt-8 p-5 rounded-2xl shadow-sm">
    <h1 className="text-2xl font-extrabold mb-4">Lab Results</h1>
    <div className="relative max-h-[300px] overflow-y-scroll">
      {lab_results.map((i, k) => (
        <div
          key={k}
          className="py-2.5 px-4 flex items-center justify-between">
          <p>{i}</p>
          <div className="aspect-square w-5 download-icon" />
        </div>
      ))}
    </div>
  </div>
)
