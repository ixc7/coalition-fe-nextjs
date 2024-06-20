export const DiagnosticList = ({ apiData }) => {
  const { diagnostic_list } = apiData
  return (
    <div className="bg-white mt-8 p-5 rounded-2xl shadow-sm">
      <h1 className="text-2xl font-extrabold">Diagnostic List</h1>

      <div className="mt-10">
        <div className="bg-[#F6F7F8] rounded-3xl p-4 mb-2.5 font-bold grid grid-cols-6">
          <h2 className="col-span-2">Problem/Diagnosis</h2>
          <h2 className="col-span-3">Description</h2>
          <h2 className="col-span-1">Status</h2>
        </div>
        <div className="max-h-[350px] px-4 overflow-y-scroll">
          {diagnostic_list.map(({ name, description, status }, k) => (
            <div
              key={k}
              className="py-2.5 grid grid-cols-6">
              <p className="col-span-2">{name}</p>
              <p className="col-span-3">{description}</p>
              <p className="col-span-1">{status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
