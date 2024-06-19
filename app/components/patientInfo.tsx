const ProfileDetail = () => (
  <div className="flex mt-8 px-5">
    <div className="h-[2.625rem] w-[2.625rem] bg-active-1 rounded-full mr-4" />
    <div>
      <p>Profile Detail</p>
      <p>Lorem Ipsum</p>
    </div>
  </div>
)

export const PatientInfo = () => (
  <div className="bg-white rounded-2xl px-5 py-8">
    <div className="flex flex-col items-center">
      <div className="bg-active-1 w-[12.5rem] h-[12.5rem] rounded-full" />
      <h1 className="text-2xl font-extrabold mt-6">Jessica Taylor</h1>
    </div>

    <div>
      <ProfileDetail />
      <ProfileDetail />
      <ProfileDetail />
      <ProfileDetail />
      <ProfileDetail />
    </div>

    <div className="w-[12.5rem] mt-10 mx-auto py-2.5 rounded-full text-center bg-active-1">
      Show All Information
    </div>
  </div>
)
