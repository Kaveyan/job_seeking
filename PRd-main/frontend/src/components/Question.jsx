import React from 'react'

function Question({questiion,}) {
  return (
    <div className='question'>
        <div>Question: {questiion}</div>
        <div className='question-input'>
            <input type='text' placeholder='answer here...' />
            <button type='submit'>Submit</button>
        </div>

    </div>
  )
}

export default Question
