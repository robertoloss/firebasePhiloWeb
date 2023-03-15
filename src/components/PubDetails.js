import Abstract from './Abstract'
import PubTitle from './PubTitle'
import Lnk from './Lnk'
import { v4 as uuidv4 } from 'uuid';


function PubDetails(props) {

  const pubKey = props.pub.key
  const blue = {color: '#6dc7d9'}
  const abstract = props.pub.abstract

  //styles
  const divOuter = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginRight: '4rem',
  }
  const pBottom = {
    marginBottom: '2em',
    lineHeight: '22px'
  }
 
  return (
    <> 
      <div style={divOuter} >
        <span   className={props.className}>
          <PubTitle pub={props.pub}/>
            {props.pub.details?.articles?.map((article, index) =>
              <span key={uuidv4()} style={blue}>
                {index !== 0 && <span>| &nbsp; </span>}
                <Lnk to={article.link} here={!article.link}>
                  {article?.kind} 
                </Lnk> &nbsp; 
              </span>)}  
            {props.pub.abstract && 
              <span> 
                <span style={blue}> | &nbsp; </span> 
                <Abstract abstractClass={props.abstractClass} abstract={props.abstract} key={pubKey} content={abstract}/>
              </span>} 
        </span>
        <p style={pBottom}/>
      </div>
    </>
  )
}

export default PubDetails 