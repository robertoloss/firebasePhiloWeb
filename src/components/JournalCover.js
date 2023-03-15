import { Link } from 'react-router-dom'

function JournalCover(prop) {

  return (
    <Link to={prop.cover?.link} target="_blank" >
      <img 
        alt={prop.cover?.alt} 
        src={prop.cover?.img}
        style={{
          width: '64px',
          height: '96px',
        }}/>
    </Link>
  )
}
export default JournalCover