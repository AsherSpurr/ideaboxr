
export function fetchAppts() {
  return fetch('http://localhost:3001/appointments')
  .then(response => {
    if(!response.ok) {
        throw new Error('No appointments yet!')
    }
    return response.json()
  })
  .then(data => {
    return data
  })
  .catch(error => {
    console.log(error)
    throw error
  })
}
