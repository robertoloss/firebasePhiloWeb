
import { Link } from 'react-router-dom'
import { positionLogoAndNavBar } from '../App'

function Logo() {
  const myColor = '#ffffff'
  
  // styles
  const myStyle = `
    .myLink {
      color: ${myColor};
      text-decoration: none; 
    }
    .myLink:hover {
      color: #d1d1d1; 
    }`
  const logoStyle = {
    display: 'flex',
    position: 'relative',
    left: '0rem',
    color: `${myColor}` ,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0em 1em 0em 1em ',
  }
  const pStyle = {
    marginTop: '0.5em',
    marginBottom: `2rem `,
  }
  const divOuter = {
    display: 'flex',
    position: 'sticky',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    left: '0rem',
  }
  const divInner = {
    display: 'flex',
    position: 'relative',
    left: '0rem',
    width: `${positionLogoAndNavBar}`, // 
    justifyContent: 'space-between',
    // padding: '0em 1em 0em 1em ',
  }
  
  return (
    <div style={divOuter}>
      <div style={divInner}>
        <div style={logoStyle}>
          <h1 style = {{ margin: '0em' }}> 
            <style>{myStyle}</style>
            <Link className='myLink' to="/">
              ROBERTO LOSS 
            </Link>
          </h1>
          <p style={pStyle}> 
            Philosopher | Metaphysics 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Logo 