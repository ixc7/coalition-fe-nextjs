import { NavBar } from "./components/navbar.tsx"
import { Patients } from "./components/patients.tsx"
import { DiagnosisHistory } from "./components/diagnosisHistory.tsx"
import { DiagnosticList } from "./components/diagnosticList.tsx"
import { PatientInfo } from "./components/patientInfo.tsx"
import { LabResults } from "./components/labResults.tsx"

const Home = async () => {
  const data = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: `Basic ${btoa("coalition:skills-test")}`,
      },
    },
  )
  const apiData = await data.json()

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
        <DiagnosisHistory apiData={apiData} />
        <DiagnosticList apiData={apiData} />
      </div>

      <div className="col-span-3">
        <PatientInfo apiData={apiData} />
        <LabResults apiData={apiData} />
      </div>
    </div>
  )
}

export default Home
