import { Link } from 'react-router-dom'

function Lnk(props) {

  return (
    <Link 
      to={props.to}
      target={props.here ? '' : "_blank"}
      style={{
        color: '#6dc7d9',
      }}>
      {props.children} 
    </Link> 
  )
}

export default Lnk 