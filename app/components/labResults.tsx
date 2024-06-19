const items = [
  "Blood Tests",
  "CT Scans",
  "Radiology Reports",
  "X-Rays",
  "Urine Test",
]

export const LabResults = () => (
  <div className="bg-white mt-8 p-5 rounded-2xl">
    <h1 className="text-2xl font-extrabold mb-4">Lab Results</h1>
    <div className="relative max-h-[300px] overflow-y-scroll">
      {items.map((i) => (
        <div className="py-2.5 px-4 flex items-center justify-between">
          <p>{i}</p>
          <div className="aspect-square w-5 download-icon" />
        </div>
      ))}
    </div>
  </div>
)
