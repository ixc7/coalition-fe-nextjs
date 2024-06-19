const Button = () => (
  <div className="py-3 px-4 rounded-full flex gap-2 body-emphasized bg-active-1">
    <div className="h-5">X</div>
    <div>Patients</div>
  </div>
)

const Home = () => {
  return (
    <div className="grid grid-cols-12  bg-red-200 m-[1.125rem]">
      <div
        className="
        col-span-full bg-red-700 px-8 py-3 
        grid grid-cols-subgrid gap-8
      ">
        <div className="col-span-3 bg-red-100">left logo</div>

        <div className="col-span-6 flex justify-around gap-10 bg-red-200">
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </div>

        <div className="col-span-3 bg-red-100 text-right">right content</div>
      </div>

      <div
        className="
        col-span-3 bg-red-400
        p-5
      ">
        <h1 className="text-2xl font-extrabold">Patients</h1>
        <div className="bg-red-600 mt-10">profiles</div>
      </div>
      <div
        className="
        col-span-6 bg-red-500
      ">
        <h1 className="text-2xl font-extrabold">Diagnosis History</h1>
      </div>
      <div
        className="
        col-span-3 bg-red-300
      ">
        <h1 className="text-2xl font-extrabold">Jessica Taylor</h1>
      </div>
    </div>
  )
}

export default Home
