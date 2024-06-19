const ProfileDetail = ({ className, children }) => (
  <div className="flex mt-8 px-5">
    <div className={`aspect-square w-[2.625rem] mr-4 ${className}`} />
    <div>{children}</div>
  </div>
)

export const PatientInfo = () => (
  <div className="bg-white rounded-2xl px-5 py-8 shadow-sm">
    <div className="flex flex-col items-center">
      <div
        className="w-[12.5rem] h-[12.5rem] rounded-full"
        style={{
          backgroundImage: "url('./Layer 2.png')",
          backgroundSize: "cover",
        }}
      />
      <h1 className="text-2xl font-extrabold mt-6">Jessica Taylor</h1>
    </div>

    <div>
      <ProfileDetail className="birth-icon">
        <p>Date Of Birth</p>
        <p className="font-bold">August 23, 1996</p>
      </ProfileDetail>
      <ProfileDetail className="female-icon">
        <p>Gender</p>
        <p className="font-bold">Female</p>
      </ProfileDetail>
      <ProfileDetail className="phone-icon">
        <p>Contact Info</p>
        <p className="font-bold">(415) 555-1234</p>
      </ProfileDetail>
      <ProfileDetail className="phone-icon">
        <p>Emergency Contacts</p>
        <p className="font-bold">(415) 555-5678</p>
      </ProfileDetail>
      <ProfileDetail className="insurance-icon">
        <p>Insurance Provider</p>
        <p className="font-bold">Sunrise Health Assurance</p>
      </ProfileDetail>
    </div>

    <div className="w-[12.5rem] mt-10 mx-auto py-2.5 rounded-full text-center font-bold bg-active-1">
      Show All Information
    </div>
  </div>
)
