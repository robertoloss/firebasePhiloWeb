import Lnk from '../components/Lnk'
import Section from '../components/Section'
import Hred from '../components/Hred'
import { publicationsList } from '../assets/PublicationsList'
import PubCard from '../components/PubCard'
import { v4 as uuidv4 } from 'uuid';
import classes from './main.module.css'
import useCards from '../custom-hooks/useCards';
import ExpandCollapseBar from '../components/ExpandCollapseBar'

function HomePage() {
  const papersKeys = [30,29,26,24] // see publicationsList in the 'assets' folder
  
  const divSummary = {
    display: 'flex',
    flexDirection: 'column',
    textIndent: '-1rem'
  }

  const [cardsState, cardsStateHandler, pinHandler, expandAll,  collapseAll ] = useCards(papersKeys)

  return (
    <div className={classes.homePage}>
      <p>
        Hi! I am Roberto. I work mainly in <Hred>analytic metaphysics. </Hred> 
      </p>
      <p>
        My current research interests lie in the philosophy of <Hred>time</Hred>, theories of <Hred>parthood</Hred> and <Hred>location</Hred>, and metaphysical <Hred>grounding</Hred>.  
      </p>
      <p>
        The following are four recent papers of mine I’m particularly fond of (for more publications, drafts etc. go to <Lnk to='/publications' here={true}>Publications</Lnk> ):  
      </p>
      <div style={{height: '1.6rem'}}></div>
      
        <div className={classes.expandCollapseBarHome} >
          <ExpandCollapseBar onClick={{ expandAll,  collapseAll }}/>
        </div>
      <div className={classes.sectionHome}>
        {papersKeys.map((paperKey,index) =>
          <div key={uuidv4()} >
          <Section
            card={cardsState[index]}
            onClick={{ cardsStateHandler, pinHandler }}
            id={index}
            key={uuidv4()}
            position='relative'
            tag='p'
            title={publicationsList[publicationsList.length-paperKey].details.title}
            sectionTitleColorNoShow='white'
            bgColorShow='#292929'
            bgColorNoShow='rgba(71, 71, 71, 0.6)'
            border='0.5px solid rgba(140, 140, 140, 0.71)'
            width= '90vw'
            maxWidth= '30rem'
            minWidth= '20rem'
            left='0rem'
            right='1rem'
            pinTop='-20px'
            pinLeft='5px'
            >
            <PubCard 
              key={uuidv4()}
              className={classes.pubDetailsMobileHome}
              pub={publicationsList[publicationsList.length-paperKey]}
              hideCover='true'
              hideNumber='true'
              width='100%'
              left='4vw'
              abstractClass={classes.abstractHome}
              />
          </Section>
          {/* <div key={uuidv4()} style={{height: '0.3rem'}}></div> */}
          </div>
        )}
      </div>
      <div style={{height: '1.3rem'}}></div>
      <p>
        So far, I’ve held academic positions at the following universities:
      </p>
      <div style={divSummary}>
        <ul key={uuidv4()}>
          <Hred>Complutense University of Madrid </Hred>(2021-2022) – Ramón y Cajal Fellow (roughly equivalent to Assistant Professor) at ​the <Lnk to='https://www.ucm.es/logicafilosofia/' >Department of Logic and Theoretical Philosophy</Lnk>
        </ul>
        <ul key={uuidv4()}>
          <Hred>University of Hamburg</Hred> (2017-2021) – Research Fellow and member of the <Lnk to='https://phloxgroup.wordpress.com/' >Phlox Group</Lnk>
        </ul>
        <ul key={uuidv4()}>
          <Hred>University of Barcelona</Hred> (2015-2017) – Beatriu de Pinós/Marie Curie Research Fellow and <Lnk to='http://www.ub.edu/grc_logos/roberto-loss' >senior member</Lnk> of the <Lnk to='http://www.ub.edu/grc_logos/' >LOGOS Research Group</Lnk>
        </ul>
        <ul key={uuidv4()}>
          <Hred>Universidad Nacional y Autónoma de México (UNAM)</Hred> (2013-2015) – Post-Doctoral Research Fellow at the <Lnk to='https://www.filosoficas.unam.mx/' >Instituto de Investigaciones Filosóficas</Lnk>
        </ul>
      </div>
      <p>
        I obtained my <Hred>PhD in Philosophy</Hred> from the <Hred>University of Nottingham</Hred> in 2012 with a thesis titled ‘The true future of the open future’. My supervisor was <Lnk to='https://stefanopredelli.wixsite.com/stefanopredelli' >Prof. Stefano Predelli</Lnk>.
      </p>
      <p>
      Here are my <Lnk to='https://scholar.google.co.uk/citations?user=v5eDnAsAAAAJ&hl=en' >Google Scholar</Lnk>, <Lnk to='https://philpeople.org/profiles/roberto-loss' >PhilPapers</Lnk>, and <Lnk to='https://ucm.academia.edu/RobertoLoss' >Academia.edu</Lnk> pages.
      </p>
      <p>
        You can contact me at <Hred>robertoloss</Hred> at <Hred>gmail</Hred> dot <Hred>com</Hred>
      </p>
    </div>  
  )
}

export default HomePage 