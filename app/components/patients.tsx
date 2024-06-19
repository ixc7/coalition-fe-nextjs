const profiles = [
  {
    name: "Emily Williams",
    info: "Female, 18",
    img: "Layer 8",
  },
  {
    name: "Ryan Johnson",
    info: "Male, 45",
    img: "Layer 1",
  },
  {
    name: "Brandon Mitchell",
    info: "Male, 36",
    img: "Layer 3",
  },
  {
    name: "Jessica Taylor",
    info: "Female, 28",
    img: "Layer 2",
  },
  {
    name: "Samantha Johnson",
    info: "Female, 56",
    img: "Layer 6",
  },
  {
    name: "Ashley Martinez",
    info: "Female, 54",
    img: "Layer 12",
  },
  {
    name: "Olivia Brown",
    info: "Female, 32",
    img: "Layer 10",
  },
  {
    name: "Tyler Davis",
    info: "Male, 30",
    img: "Layer 9",
  },
  {
    name: "Kevin Anderson",
    info: "Male, 30",
    img: "Layer 4",
  },
  {
    name: "Dylan Thompson",
    info: "Male, 36",
    img: "Layer 5",
  },
  {
    name: "Nathan Evans",
    info: "Male, 58",
    img: "Layer 7",
  },
  {
    name: "Mike Nolan",
    info: "Male, 31",
    img: "pexels-photo-1222271",
  },
]

export const Patients = () => (
  <>
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-extrabold">Patients</h1>
      <div className="h-[1.125rem] w-[1.125rem]" />
    </div>

    <div className="mt-10 max-h-[1000px] overflow-y-scroll">
      {profiles.map(({ name, info, img }) => (
        <div className="relative flex items-center py-4 px-5 patient-card">
          <div
            className="w-12 h-12 rounded-full mr-3"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url('./${img}.png')`,
            }}
          />
          <div>
            <p className="font-bold">{name}</p>
            <p>{info}</p>
          </div>
          <div className="absolute right-0 w-[1.125rem] h-1 more-horizontal-icon" />
        </div>
      ))}
    </div>
  </>
)
