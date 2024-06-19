import { NavBar } from "./components/navbar.tsx"
import { Patients } from "./components/patients.tsx"
import { DiagnosisHistory } from "./components/diagnosisHistory.tsx"
import { DiagnosticList } from "./components/diagnosticList.tsx"
import { PatientInfo } from "./components/patientInfo.tsx"
import { LabResults } from "./components/labResults.tsx"

const Home = () => {
  return (
    <div
      className="
      grid grid-cols-12 gap-8 m-[1.125rem_auto]
      max-w-[1600px] 
    ">
      <NavBar />

      <div className="col-span-3 bg-white p-5 rounded-2xl">
        <Patients />
      </div>

      <div className="col-span-6">
        <DiagnosisHistory />
        <DiagnosticList />
      </div>

      <div className="col-span-3">
        <PatientInfo />
        <LabResults />
      </div>
    </div>
  )
}

export default Home
