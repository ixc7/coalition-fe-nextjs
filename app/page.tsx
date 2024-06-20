import { NavBar } from "./components/navbar.tsx"
import { Patients } from "./components/patients.tsx"
import { DiagnosisHistory } from "./components/diagnosisHistory.tsx"
import { DiagnosticList } from "./components/diagnosticList.tsx"
import { PatientInfo } from "./components/patientInfo.tsx"
import { LabResults } from "./components/labResults.tsx"

const Home = async () => {
  try {
    const data = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          Authorization: `Basic ${btoa(
            process.env.USERNAME + ":" + process.env.PASSWORD,
          )}`,
        },
      },
    )

    const apiData = await data.json()

    const individualData = apiData.filter(
      ({ name }) => name === "Jessica Taylor",
    )[0]

    return (
      <div
        className="
      grid grid-cols-12 gap-8 m-[1.125rem_auto]
      max-w-[1600px] 
    ">
        <NavBar />

        <div className="col-span-3 bg-white pb-4 rounded-2xl shadow-sm">
          <Patients apiData={apiData} />
        </div>

        <div className="col-span-6">
          <DiagnosisHistory apiData={individualData} />
          <DiagnosticList apiData={individualData} />
        </div>

        <div className="col-span-3">
          <PatientInfo apiData={individualData} />
          <LabResults apiData={individualData} />
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className=" p-10">
        <h1 className="text-3xl mb-10">Error fetching data from API!</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }
}

export default Home
