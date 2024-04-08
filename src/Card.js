import './Card.css'

function Card({pet, date, time, deleteAppt, id}) {

    function formatTime(time) {
        const splitTime = time.split(':')
        if(splitTime[0] !== '12') {
            return splitTime.toSpliced(0, 1, splitTime[0] - 12).join(':')
        } else {
            return time
        }
    }

    return (
        <div className="card">
            <h1>{pet}</h1>
            <p>{date}</p>
            <p>{formatTime(time)}</p>
            <button onClick={() => deleteAppt(id)}>🗑️</button>
        </div>
    )
}

export default Card;