import apiData from "../fullData.json"

export const Patients = () => (
  <>
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-extrabold">Patients</h1>
      <div className="h-[1.125rem] w-[1.125rem]" />
    </div>

    <div className="mt-10 max-h-[1000px] overflow-y-scroll">
      {apiData.map(({ name, gender, age, profile_picture }) => (
        <div className="relative flex items-center py-4 px-5 patient-card">
          <div
            className="w-12 h-12 rounded-full mr-3"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url('${profile_picture}')`,
            }}
          />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-secondary">
              {gender}, {age}
            </p>
          </div>
          <div className="absolute right-0 w-[1.125rem] h-1 more-horizontal-icon" />
        </div>
      ))}
    </div>
  </>
)
