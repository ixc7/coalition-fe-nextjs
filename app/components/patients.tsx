const PatientCard = () => (
  <div className="relative flex items-center py-4 px-5 patient-card">
    <div className="bg-active-1 w-12 h-12 rounded-full mr-3" />
    <div>
      <p>Firstname Lastname</p>
      <p>Gender, Age</p>
    </div>
    <div className="absolute right-0 w-[1.125rem]">...</div>
  </div>
)

export const Patients = () => (
  <>
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-extrabold">Patients</h1>
      <div className="h-[1.125rem] w-[1.125rem]" />
    </div>

    <div className="mt-10 max-h-[1054px] overflow-y-scroll">
      {Array.from(Array(25)).map((i) => (
        <PatientCard />
      ))}
    </div>
  </>
)
