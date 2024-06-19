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

const Home = () => {
  return (
    <div className="grid grid-cols-12 gap-8 bg-red-200 m-[1.125rem]">
      <NavBar />
      <div className="col-span-3 bg-red-400 p-5">
        <h1 className="text-2xl font-extrabold">Patients</h1>
        <div className="bg-red-600 mt-10">profiles</div>
      </div>
      <div className="col-span-6 bg-red-500 p-5">
        <h1 className="text-2xl font-extrabold">Diagnosis History</h1>
        <div className="bg-red-600 mt-10">Blood Pressure</div>
      </div>
      <div className="col-span-3 bg-red-300 p-5">
        <h1 className="text-2xl font-extrabold">Jessica Taylor</h1>
      </div>
    </div>
  )
}

export default Home
