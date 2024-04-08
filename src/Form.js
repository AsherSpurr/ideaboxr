import { useState } from 'react';
import './Form.css'

function Form({addAppt}) {
    const [pet, setPet] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [id, setId] = useState(1)

    function submitAppt(e) {
        e.preventDefault()
        let counter = 1;
        counter++
        setId(counter)
        const newAppt = {
            id: id,
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