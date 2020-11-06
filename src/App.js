import React, { useState } from 'react'
import Button from './Button'
import  * as math from 'mathjs'

function App() {
  const [input,setInput]= useState('')
  const [keys,setKeys]=useState([])

  function enterEl(v){
    console.log(v)
    setKeys([...keys,v])
   
    // pressing '='  runs the calculate function, whenever a new val was pressed after '="  the setInput(input + v) function would automatically add the value to the result shown on the input. hence, i added a keys array in the state so that the if the last item in array is an equal sign, the next val will be a fresh val and will not automatically add nums. 

    if(v !== '=' && keys[keys.length - 1] !== '=' ){
      setInput(input + v)}
    else if(keys[keys.length - 1] === '='){
      setInput(v)
      setKeys([])
      
    }
    else if(v === '='){
      setKeys([...keys,v])
      calculate()
    }
  }

  function calculate(){
    const final = math.evaluate(input)
    setInput(final)
  }
 
  return (
    <div className="app">

      <div className='calculator'>
        <input className='input' readOnly={true} value={input} />
        <div className='row'>

          <Button val={7} click={enterEl}/>
          <Button val={8} click={enterEl}/>
          <Button val={9} click={enterEl}/>
          <Button val={'/'} click={enterEl}/>
        </div>
        <div className='row'>
          <Button val={4} click={enterEl}/>
          <Button val={5} click={enterEl}/>
          <Button val={6} click={enterEl}/>
          <Button val={'x'} click={enterEl} />
        </div>
        <div className='row'>
          <Button val={1} click={enterEl}/>
          <Button val={2} click={enterEl}/>
          <Button val={3} click={enterEl}/>
          <Button val={'+'} click={enterEl} />
        </div>
        <div className='row'>
          <Button val={'.'} click={enterEl}/>
          <Button val={0} click={enterEl}/>
          <Button val={'='}  click={enterEl}/>
          <Button val={'-'} click={enterEl}/>
        </div>
        <div className='row'>
          <button onClick={()=>setInput('')} className='clearButton'>Clear</button>
        </div>
        </div>
    
    </div>
  );
}
        
        

export default App;
