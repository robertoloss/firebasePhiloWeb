import JournalCover from './JournalCover'
import PubDetails from './PubDetails'

function PubCard(props) {

  //styles
  const divOuter = {
    display: 'flex',
    position: 'relative',
    // top: '-8px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: `${props.left}`,
    width: `${props?.width}}`,
    maxWidth: `${props?.maxWidth}}`,
    minWidth: `${props?.minWidth}}`,
  }
  const divInner = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '0rem',
  }
  const divNumber = {
    minWidth: `${!props.hideNumber ? '2.5rem' : '0rem'}` ,
    maxWidth: `${!props.hideNumber ? '2.5rem': '0rem'}` ,
  }
  const spanStyle = {
    color: '#f6bc9c',
    display: 'flex',
    marginTop: '1.5px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }

  return (
      
    <div style={divOuter}>
      <div style={divInner}>
        <div style={divNumber}>
          <span style={spanStyle}>
            {!props.hideNumber && (props.pub.number +'.') }
          </span>
        </div>
        <PubDetails className={props.className} abstractClass={props.abstractClass} abstract={props.abstract} pub={props.pub}/>
      </div>
      {!props.hideCover && <JournalCover cover={props.pub.cover}/>}
    </div>
  )
}

export default PubCard