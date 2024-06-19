const Button = () => (
  <div className="py-3 px-4 rounded-full flex gap-2 body-emphasized bg-active-1">
    <div className="h-5">X</div>
    <div>Patients</div>
  </div>
)

const NavBar = () => (
  <div
    className="
    col-span-full bg-red-700 px-8 py-4 
    grid grid-cols-subgrid gap-8
    shadow-xl rounded-full
  ">
    <div className="col-span-3 bg-red-100">
      <div className="h-12 bg-red-300">left logo</div>
    </div>
    <div className="col-span-6 flex justify-around gap-2 bg-red-200 px-5">
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>

    <div className="col-span-3 bg-red-100 flex items-center justify-end">
      <div className="h-12 w-12 bg-red-300 rounded-full mr-2"></div>
      <div className="mr-3 pr-3 bg-red-400 border-r border-color-1">
        <p>Dr. Jose Simmons</p>
        <p>General Practitioner</p>
      </div>
      <div className="h-5 bg-red-500 mr-2">X</div>
      <div className="bg-red-600">.</div>
    </div>
  </div>
)

const ProfileDetail = () => (
  <div className="bg-red-300 flex mt-8">
    <div className="h-[2.625rem] w-[2.625rem] bg-red-900 rounded-full mr-4" />
    <div>
      <p>Profile Detail</p>
      <p>Lorem Ipsum</p>
    </div>
  </div>
)

const PatientCard = () => (
  <div className="relative flex items-center mb-8 bg-red-600">
    <div className="bg-red-200 w-12 h-12 rounded-full mr-3" />
    <div className="bg-red-300">
      <p>Firstname Lastname</p>
      <p>Gender, Age</p>
    </div>
    <div className="absolute right-0 w-[1.125rem] bg-red-800">...</div>
  </div>
)

const Home = () => {
  return (
    <div
      className="
      grid grid-cols-12 gap-8 bg-red-200 m-[1.125rem_auto]
      max-w-[1600px]  
    ">
      <NavBar />

      <div className="col-span-3 bg-red-400 p-5">
        <div className="flex bg-red-100 items-center justify-between">
          <h1 className="text-2xl font-extrabold">Patients</h1>
          <div className="h-[1.125rem] w-[1.125rem] bg-red-800" />
        </div>

        <div className="bg-red-900 mt-10 max-h-[1054px] overflow-y-scroll">
          {Array.from(Array(25)).map((i) => (
            <PatientCard />
          ))}
        </div>
      </div>

      <div className="col-span-6 bg-red-500 p-5">
        <h1 className="text-2xl font-extrabold">Diagnosis History</h1>
        
        <div className="bg-red-600 mt-10 grid grid-cols-3 gap-5">
          <div className="bg-red-200 col-span-full">
            Blood Pressure
          </div>
          <div className="col-span-1 bg-red-700">
            Respiratory Rate
          </div>
          <div className="col-span-1 bg-red-700">
            Temperature
          </div>
          <div className="col-span-1 bg-red-700">
            Heart Rate
          </div>
        </div>
        
        <div className="bg-red-400 mt-8 max-h-[350px]">Diagnostic List</div>
      </div>

      <div className="col-span-3 bg-red-300 p-5">
        <div className="flex flex-col items-center">
          <div className="bg-red-800 w-[12.5rem] h-[12.5rem] rounded-full" />
          <h1 className="text-2xl font-extrabold mt-6">Jessica Taylor</h1>
        </div>

        <div className="bg-red-200">
          <ProfileDetail />
          <ProfileDetail />
          <ProfileDetail />
          <ProfileDetail />
          <ProfileDetail />
        </div>

        <div className="w-[12.5rem] mt-10 mx-auto p-5 rounded-full text-center bg-active-1">
          Show All Information
        </div>

        <div className="bg-red-900 mt-8 max-h-[300px]">
          Lab Results
        </div>
      </div>
    </div>
  )
}

export default Home
