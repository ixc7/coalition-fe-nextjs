const listItems = [
  {
    problem: "Hypertension",
    description: "Chronic high blood pressure",
    status: "Under Observation",
  },
  {
    problem: "Type 2 Diabetes",
    description: "Insulin resistance and elevated blood sugar",
    status: "Cured",
  },
  {
    problem: "Asthma",
    description: "Recurrent episodes of bronchial constriction",
    status: "Inactive",
  },
]

export const DiagnosticList = () => (
  <div className="bg-white mt-8 p-5 rounded-2xl">
    <h1 className="text-2xl font-extrabold">Diagnostic List</h1>

    <div className="mt-10">
      <div className="bg-active-1 rounded-3xl p-4 mb-2.5 font-bold grid grid-cols-6">
        <h2 className="col-span-2">Problem/Diagnosis</h2>
        <h2 className="col-span-3">Description</h2>
        <h2 className="col-span-1">Status</h2>
      </div>
      <div className="max-h-[350px] px-4 overflow-y-scroll">
        {listItems.map(({ problem, description, status }) => (
          <div className="py-2.5 grid grid-cols-6">
            <p className="col-span-2">{problem}</p>
            <p className="col-span-3">{description}</p>
            <p className="col-span-1">{status}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)
