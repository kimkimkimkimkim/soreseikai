export function dateFormat(date,separate="/"){
  let d = new Date(date)
  return d.getFullYear()+separate+(d.getMonth()+1)+separate+d.getDate()
}
