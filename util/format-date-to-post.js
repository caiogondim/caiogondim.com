
function formatDateToPost (date) {
  const dateObj = new Date(date)
  const dateFormated = `${dateObj.toLocaleString('en-us', { month: 'long' })} ${dateObj.getDate()}, ${dateObj.getFullYear()}`

  return dateFormated
}

export default formatDateToPost
