import { useState } from 'react';
import './Form.css'

function Form({addAppt}) {
    const [pet, setPet] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    function submitAppt(e) {
        e.preventDefault()
        const newAppt = {
            id: Date.now(),
            pet: pet,
            date: date,
            time: time
        }
        addAppt(newAppt)
        clearInput()
    }

    function clearInput() {
        setPet('')
        setDate('')
        setTime('')
    }

    return (
        <form>
            <input
            type='text'
            placeholder='Pet Name'
            name='pet'
            value={pet}
            onChange={e => setPet(e.target.value)}
            />
            <input
            type='date'
            placeholder='Date'
            name='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            />
             <input
            type='time'
            placeholder='Time'
            name='time'
            value={time}
            onChange={e => setTime(e.target.value)}
            />
            <button onClick={e => submitAppt(e)}>Submit</button>
        </form>
    )
}

export default Form;