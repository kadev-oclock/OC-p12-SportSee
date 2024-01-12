export async function getUserDetails(id) {
  // ici on fetch le backend et on renvois les données
  const result = await fetch(`http://localhost:3000/user/${id}`)
   const data = await result.json()
   return data.data
  
  
}
export async function getUserActivity(id) {
  // ici on fetch le backend et on renvois les données
  const result = await fetch(`http://localhost:3000/user/${id}/activity`)
   const data = await result.json()
   return data.data
}
export async function getUserPerformances(id) {
  // ici on fetch le backend et on renvois les données
  const result = await fetch(`http://localhost:3000/user/${id}/performance`)
   const data = await result.json()
   return data.data
}
export async function getUserAverageSession(id) {
  // ici on fetch le backend et on renvois les données
  const result = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
   const data = await result.json()
   return data.data
}
