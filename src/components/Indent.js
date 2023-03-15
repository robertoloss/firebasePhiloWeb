

function Indent(props) {
  const Tag = props.tag
  
  return (
    <div
      className={props.indent}
      style={{ maxWidth: `${props?.maxWidth || 'auto'}`, cursor: 'pointer' }}>
      <Tag>
        {props.children}
      </Tag>
    </div>
  )
}

export default Indent