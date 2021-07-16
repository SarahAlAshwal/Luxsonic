import './Record.css';

function Record (props) {
  return (
    <div className='record-container'>
      <span>{props.firstName}</span>
      <span>{props.lastName}</span>
      <span>{props.uid}</span>
      <span>{props.date}</span>
      <span>{props.profission}</span>
    </div>
  )
}

export default Record;