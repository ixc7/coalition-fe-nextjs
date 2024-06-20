const NavButton = ({ icon, className, children }) => (
  <div
    className={`py-3 px-4 rounded-full flex gap-2 items-center button ${className}`}>
    <div className={`aspect-square w-5 ${icon}`} />
    <p className="font-bold">{children}</p>
  </div>
)

export const NavBar = () => (
  <div
    className="
    col-span-full bg-white px-8 py-4 
    grid grid-cols-subgrid gap-8
    rounded-[4.375rem] shadow-sm
  ">
    <div className="col-span-3">
      <div className="h-12 test-logo"></div>
    </div>
    <div className="col-span-6 flex justify-around gap-2 px-5">
      <NavButton icon="home-icon">Overview</NavButton>
      <NavButton
        icon="patients-icon"
        className="bg-active-1">
        Patients
      </NavButton>
      <NavButton icon="calendar-icon">Schedule</NavButton>
      <NavButton icon="message-icon">Message</NavButton>
      <NavButton icon="credit-card-icon">Transactions</NavButton>
    </div>

    <div className="col-span-3 flex items-center justify-end">
      <div
        className="h-12 w-12 rounded-full mr-2"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url('./senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png')",
        }}
      />
      <div className="mr-3 pr-3 border-r border-color-1">
        <p className="font-bold">Dr. Jose Simmons</p>
        <p className="text-secondary">General Practitioner</p>
      </div>
      <div className="aspect-square w-5 mr-3 settings-icon" />
      <div className="h-5 w-1 more-vertical-icon" />
    </div>
  </div>
)
