import './Appointment.css'
import Card from './Card'

function Appointment({ appts, deleteAppt }) {

    const mappedAppts = appts.map((appt) => {
        return (
            <Card
                id={appt.id}
                pet={appt.pet}
                date={appt.date}
                time={appt.time}
                deleteAppt={deleteAppt}
                key={appt.id}
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


