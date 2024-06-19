const NavButton = ({ className, children }) => (
  <div className="py-3 px-4 rounded-full flex gap-2 items-center body-emphasized bg-active-1">
    <div className={`aspect-square w-5 ${className}`} />
    <div>{children}</div>
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
      <div className="h-12 test-logo"></div>
    </div>
    <div className="col-span-6 flex justify-around gap-2 px-5">
      <NavButton className="home-icon">Overview</NavButton>
      <NavButton className="patients-icon">Patients</NavButton>
      <NavButton className="calendar-icon">Schedule</NavButton>
      <NavButton className="message-icon">Message</NavButton>
      <NavButton className="credit-card-icon">Transactions</NavButton>
    </div>

    <div className="col-span-3 flex items-center justify-end">
      <div className="h-12 w-12 bg-active-1 rounded-full mr-2"></div>
      <div className="mr-3 pr-3 border-r border-color-1">
        <p>Dr. Jose Simmons</p>
        <p>General Practitioner</p>
      </div>
      <div className="aspect-square w-5 mr-3 settings-icon" />
      <div className="h-5 w-1 more-vertical-icon" />
    </div>
  </div>
)
