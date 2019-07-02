import {useState, useEffect} from 'react'
import Block from './block'

function App() {

    const [lives, setLife] = useState([false,false,true,false,true,false]);

    useEffect(() => {
        setTimeout(function(){ setLife(calculateNewLife(lives)) }, 3000);
      });

    const calculateNewLife = (lives) => {
        let newLives = [...lives]
        for(let i=0; i<lives.length; i++){
            if(i === 0 && lives[i+1] === true){
                newLives[i] = true;
            }
            if(i === lives.length - 1 && lives[i-1] === true){
                newLives[i] = true;
            }
            if(lives[i-1] === true && lives[i+1] === true){
                newLives[i] = true;
            }
        }
        return newLives 
    }

    return (
      <div>
          {lives.map((life, index) => <Block key={index} life={life}/>)}
        <style jsx global>{`
        .block {
            background-color: red;
            height: 100px;
            width: 100px;
        }
        .alive {
            background-color: blue;
        }
        `}
        </style>
      </div>
    );
  }
  
  export default App;