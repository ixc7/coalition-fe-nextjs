const ProfileDetail = ({ className, children }) => (
  <div className="flex mt-8 px-5">
    <div className={`aspect-square w-[2.625rem] mr-4 ${className}`} />
    <div>{children}</div>
  </div>
)

export const PatientInfo = ({ apiData }) => {
  const {
    name,
    gender,
    profile_picture,
    date_of_birth,
    phone_number,
    emergency_contact,
    insurance_type,
  } = apiData
  return (
    <div className="bg-white rounded-2xl px-5 py-8 shadow-sm">
      <div className="flex flex-col items-center">
        <div
          className="w-[12.5rem] h-[12.5rem] rounded-full"
          style={{
            backgroundImage: `url('${profile_picture}')`,
            backgroundSize: "cover",
          }}
        />
        <h1 className="text-2xl font-extrabold mt-6">{name}</h1>
      </div>

      <div>
        <ProfileDetail className="birth-icon">
          <p>Date Of Birth</p>
          <p className="font-bold mt-1">{date_of_birth}</p>
        </ProfileDetail>
        <ProfileDetail className="female-icon">
          <p>Gender</p>
          <p className="font-bold mt-1">{gender}</p>
        </ProfileDetail>
        <ProfileDetail className="phone-icon">
          <p>Contact Info</p>
          <p className="font-bold mt-1">{phone_number}</p>
        </ProfileDetail>
        <ProfileDetail className="phone-icon">
          <p>Emergency Contacts</p>
          <p className="font-bold mt-1">{emergency_contact}</p>
        </ProfileDetail>
        <ProfileDetail className="insurance-icon">
          <p>Insurance Provider</p>
          <p className="font-bold mt-1">{insurance_type}</p>
        </ProfileDetail>
      </div>

      <div className="w-[12.5rem] mt-10 mx-auto py-2.5 rounded-full text-center font-bold bg-active-1">
        Show All Information
      </div>
    </div>
  )
}
