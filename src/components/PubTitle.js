function PubTitle(props) {
  
  const title = props.pub.details?.title
  const journal = props.pub.details?.journal
  const nonJournal = props.pub.details?.nonJournal
  const issuePages = props.pub.details?.issuePages
  const year = props.pub.details?.year
  const specialIssue = props.pub.details?.specialIssue
  const color = {color: '#f6bc9c'}

  return (
    <>
      <span style={color}> 
        {title} 
      </span>
      <br></br>
      <span >
        <i>{journal ? journal : nonJournal}</i>
        <br></br>
        {year}, {issuePages}
        <br></br>
        {specialIssue ? (specialIssue) : ''}
        {specialIssue && <br></br>}
      </span>
    </>
  )
}

export default PubTitle