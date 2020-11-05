import React from 'react'

function Button({val, click}){

  return(
    <div >
      <button onClick={()=>click(val === 'x' ? '*' : val)} className={typeof val === 'number' ? 'button' : 'button notNumber'}>{val}</button>
    </div>
    
  )
}

export default Button