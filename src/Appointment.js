import './Appointment.css'
import Card from './Card'

function Appointment({ appts, deleteAppt }) {

    const mappedAppts = appts.map((appt) => {
        return (
            <Card
                pet={appt.pet}
                date={appt.date}
                time={appt.time}
                deleteAppt={deleteAppt}
                id={Date.now()}
                key={Date.now()}
            />
        )
    })

    return (
        <div>
            {mappedAppts}
        </div>
    )
}

export default Appointment;


