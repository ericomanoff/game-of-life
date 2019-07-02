import {useState} from 'react'
import Block from './block'

function App() {

    const [lives, setLife] = useState([1,0,1,0,1,1]);

    return (
      <div>
          {lives.map(life => <Block life={life}/>)}
        
        <style jsx global>{`
      .block {
          background-color: red;
          height: 100px;
          width: 100px;
      }
      .alive {
        background-color: blue;
      }
    `}</style>
      </div>
    );
  }
  
  export default App;