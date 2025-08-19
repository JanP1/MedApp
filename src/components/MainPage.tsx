import "../assets/styles/MainPage.css"

export default function MainPage() {
  return (
    <div className="main-page-grid">
      <div className="grid-col-1">
        <div className="current-date-container main-page-middle-container">
          <text className="date-label">12.02.2002</text>
        </div>
        <div className="doctor-label">
          This is the doctor label

        </div>
      </div>
      <div className="grid-col-2">

        <div className="meetings-planned-container main-page-middle-container">
          Meetings 
        </div>
      </div>

      <div className="grid-col-3">

        <div className="registered-patients-container main-page-middle-container">
          Patients
        </div>
      </div>
    

    </div>
  )
}

