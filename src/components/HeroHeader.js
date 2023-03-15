import calaita from '../assets/pics/calaita.jpg'


function HeroHeader(props) {

  const heroHeaderStyle = {
    display: 'flex',
    // position: 'relative',
    width: '100vw',
    height: '86vh',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundImage: `linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.6)), url(${calaita})`,
    backgroundPosition: 'top 0px left 0px',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }

  return (
    <header style={heroHeaderStyle}>
      {props.children}
    </header>
  )
}

export default HeroHeader 