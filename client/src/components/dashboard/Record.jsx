function Records (props) {
  return (
    <div>
      <span>{props.firstName}</span>
      <span>{props.lastName}</span>
      <span>{props.uid}</span>
      <span>{props.date}</span>
      <span>{props.profission}</span>
    </div>
  )
}

export default Records;