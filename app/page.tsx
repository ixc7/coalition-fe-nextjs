const Button = () => (
  <div className="py-3 px-4 rounded-full flex gap-2 body-emphasized bg-active-1">
    <div className="h-5">X</div>
    <div>Patients</div>
  </div>
)

const NavBar = () => (
  <div
    className="
    col-span-full bg-white px-8 py-4 
    grid grid-cols-subgrid gap-8
    rounded-[4.375rem]
  ">
    <div className="col-span-3">
      <div className="h-12">left logo</div>
    </div>
    <div className="col-span-6 flex justify-around gap-2 px-5">
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>

    <div className="col-span-3 flex items-center justify-end">
      <div className="h-12 w-12 bg-active-1 rounded-full mr-2"></div>
      <div className="mr-3 pr-3 border-r border-color-1">
        <p>Dr. Jose Simmons</p>
        <p>General Practitioner</p>
      </div>
      <div className="h-5 mr-2">X</div>
      <div>.</div>
    </div>
  </div>
)

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

const Patients = () => (
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

const DiagnosisHistory = () => (
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

const DiagnosticList = () => (
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

const ProfileDetail = () => (
  <div className="flex mt-8 px-5">
    <div className="h-[2.625rem] w-[2.625rem] bg-active-1 rounded-full mr-4" />
    <div>
      <p>Profile Detail</p>
      <p>Lorem Ipsum</p>
    </div>
  </div>
)

const PatientInfo = () => (
  <div className="bg-white rounded-2xl px-5 py-8">
    <div className="flex flex-col items-center">
      <div className="bg-active-1 w-[12.5rem] h-[12.5rem] rounded-full" />
      <h1 className="text-2xl font-extrabold mt-6">Jessica Taylor</h1>
    </div>

    <div>
      <ProfileDetail />
      <ProfileDetail />
      <ProfileDetail />
      <ProfileDetail />
      <ProfileDetail />
    </div>

    <div className="w-[12.5rem] mt-10 mx-auto py-2.5 rounded-full text-center bg-active-1">
      Show All Information
    </div>
  </div>
)

const LabResults = () => (
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

const Home = () => {
  return (
    <div
      className="
      grid grid-cols-12 gap-8 m-[1.125rem_auto]
      max-w-[1600px] 
    ">
      <NavBar />

      <div className="col-span-3 bg-white p-5 rounded-2xl">
        <Patients />
      </div>

      {/* p-5 */}
      <div className="col-span-6">
        <DiagnosisHistory />
        <DiagnosticList />
      </div>

      {/* p-5 */}
      <div className="col-span-3">
        <PatientInfo />
        <LabResults />
      </div>
    </div>
  )
}

export default Home
