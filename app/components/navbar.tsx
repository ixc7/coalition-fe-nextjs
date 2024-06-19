const NavButton = () => (
  <div className="py-3 px-4 rounded-full flex gap-2 body-emphasized bg-active-1">
    <div className="h-5">X</div>
    <div>Patients</div>
  </div>
)

export const NavBar = () => (
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
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
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
