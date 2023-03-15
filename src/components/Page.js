import { useLocation } from 'react-router-dom'
import reactImg from '../assets/pics/react.png'

function Page(props) {
  const location = useLocation()
  
  const divOuter = {
    display: 'flex',
    justifyContent: 'center',
  }
  const divInner = {
    display: 'flex',
    position: 'relative',
    left:'0rem',
    flexDirection: 'column',
    width: '40rem',
    alignItems: 'center',
    padding: '0em 1em 0em 1em ',
  }
  const footer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#7d7d7d',
    fontSize: '10px',
  }
  const h2style = { 
    fontVariant: 'small-caps', 
    textAlign: 'center'
  }
  const spacerTop = {
    display: 'flex', 
    height: '7rem',
  }
  const imgStyle = { 
    width: '16px',
    height: '16px',
  }
  const spacerBottom = { display: 'flex', height: '1em'}


  return (
    <div style={divOuter}>
      <div style={divInner}>
        <h2 style={h2style}>
          <span style={{ color: '#d9d9d9'}}>{props.hideTitle ? '' : location.pathname.slice(1)} </span>
        </h2>
        {props.children}
        
        <div style={spacerTop}/>
        <footer style={footer}>
          <img src={reactImg} alt='React-js' style={imgStyle}/>
          © Roberto Loss 2023
          <div style={spacerBottom}/>
        </footer>
      </div>
    </div>
  )
}

export default Page 