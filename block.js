function Block(props) {

  const { life } = props

    return (
      <div className={`block${life ? ' alive' : ''}`}>
      </div>
    );
  }
  
  export default Block;