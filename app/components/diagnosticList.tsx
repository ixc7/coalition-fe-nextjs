export const DiagnosticList = () => (
  <div className="bg-white mt-8 p-5 rounded-2xl">
    <h1 className="text-2xl font-extrabold">Diagnostic List</h1>

    <div className="mt-10">
      <div className="bg-active-1 rounded-3xl p-4 mb-2.5">
        item/diagnosis description status
      </div>
      <div className="max-h-[350px] px-4 overflow-y-scroll">
        {Array.from(Array(20)).map((i) => (
          <div className="mb-2.5 py-5">
            Hypertension Chronic high blood pressure Under Observation
          </div>
        ))}
      </div>
    </div>
  </div>
)
