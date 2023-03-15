import calaita from '../assets/pics/calaita.jpg'

function Header(props) {
  
  const headerStyle = {
      display: 'flex',
      width: '100vw',
      height: '25vh',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.6)), url(${calaita})`,
      backgroundPosition: 'top 300px left 0px',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    }

  return (
    <header style={headerStyle}>
      {props.children}
    </header>
  )
}

export default Header 