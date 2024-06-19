export const LabResults = () => (
  <div className="bg-white mt-8 p-5 rounded-2xl">
    <h1 className="text-2xl font-extrabold mb-4">Lab Results</h1>
    <div className="relative max-h-[420px] overflow-y-scroll">
      {Array.from(Array(20)).map((i) => (
        <div className="py-2.5 px-4 flex items-center justify-between">
          <p>Blood Tests</p>
          <div className="h-5 w-5 bg-active-1" />
        </div>
      ))}
    </div>
  </div>
)
