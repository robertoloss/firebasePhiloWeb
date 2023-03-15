import { NavLink } from 'react-router-dom';
import classes from '../pages/main.module.css'
import arrow from '../assets/pics/arrow.png';
import { pagesPaths } from '../App'
import { v4 as uuidv4 } from 'uuid';
import { positionLogoAndNavBar } from '../App'

function MainNavigation(props) {
  
  const buttons = []

  for (const path of pagesPaths) {
    if (path==='/') buttons.push('Home');
    else if (path==='cv') buttons.push('CV');
    else buttons.push(path.charAt(0).toUpperCase() + path.slice(1));
  }
  function scrollDownHandler() {
    const navBar = document.getElementById('navBar');
    if (navBar) {
      navBar.scrollIntoView({ behavior: 'smooth' });
    }
  }
  //styles
  const navBarStyleOuter = {
    display: 'flex',
    padding: '0rem',
    position: 'sticky',
    top: '0px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '12vh',
    backgroundColor:  '#343333', // 'orange', //
    order: '0',
    borderStyle: 'solid',
    borderColor: '#343333 #343333 #535353 #343333', 
    zIndex: '1000',
  }
  const navBarStyleInner = {
    display: 'flex',
    position: 'relative',
    left: '0rem',
    width: `${positionLogoAndNavBar}`,
    justifyContent: 'space-between',
    padding: '0em 1em 0em 1em ',
  }
  const imgStyle = {
    position: 'relative',
    right: '0rem',
    top: '4px',
    alignItems: 'center' ,
    width: '30px',
    height: '30px',
  }

  return (
    <div id="navBar" style={navBarStyleOuter}>
      <div style={navBarStyleInner}>
        <nav className={classes.navLink} style={{  position: 'sticky',  left: '0rem', }}>
            {buttons.map(button => (
              <NavLink 
                className={({ isActive })=> isActive ? classes.active : ''}
                to={buttons.indexOf(button)===0 ? '/' : '/'+button}
                key={uuidv4()}
              >
                {button}
              </NavLink>
            ))}
        </nav>
        <img 
          onClick={scrollDownHandler}
          alt='scroll down' 
          src={arrow} 
          style={imgStyle}
        />
      </div>
    </div>
  )
}

export default MainNavigation 

