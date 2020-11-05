import React, { useState } from 'react'
import Button from './Button'
import  * as math from 'mathjs'

function App() {
  const [input,setInput]= useState('')

  function enterEl(v){
    // enter a conditon which will clear the input screen if a val is entered
    if(v !== '='){
      setInput(input + v)}
    else{
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
