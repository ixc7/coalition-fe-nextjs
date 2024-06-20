// import apiData from "../fullData.json"

export const Patients = async ({ apiData }) => {
  // const data = await fetch(
  //   "https://fedskillstest.coalitiontechnologies.workers.dev",
  //   {
  //     headers: {
  //       Authorization: `Basic ${btoa("coalition:skills-test")}`,
  //     },
  //   },
  // )
  // const apiData = await data.json()

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h1 className="text-2xl font-extrabold">Patients</h1>
        <div className="h-[1.125rem] w-[1.125rem] search-icon" />
      </div>

      <div className="mt-10 max-h-[1000px] overflow-y-scroll">
        {apiData.map(({ name, gender, age, profile_picture }, k) => (
          <div
            key={k}
            className={`
            relative flex items-center py-4 px-5 
            ${name === "Jessica Taylor" ? "bg-active-2" : "patient-card"}
          `}>
            <div
              className="w-12 h-12 rounded-full mr-3"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url('${profile_picture}')`,
              }}
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-secondary mt-1">
                {gender}, {age}
              </p>
            </div>
            <div className="absolute right-5 w-[1.125rem] h-1 more-horizontal-icon" />
          </div>
        ))}
      </div>
    </>
  )
}
