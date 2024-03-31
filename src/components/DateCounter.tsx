'use client'
import React, { useState } from 'react'

function DateCounter() {
    const [jump, setJump] = useState(1)
    const [count, setCount] = useState(0)

    function DecreseJump(){
        if(jump>1) setJump((jump)=>jump-1);
    }
    function IncreaseJUmp(){
        if(jump<30) setJump((jump)=>jump+1);
    }
    function DecreaseCount(){
        setCount((count)=>count-jump);
    }
    function IncreaseCount(){
        setCount((count)=>count+jump);
    }
    const date = new Date("jan 10 2024")
    date.setDate(date.getDate()+count)

  return (
    <div className='m-5 mx-auto flex flex-col items-center gap-4'>
        <h1>Date Counter</h1>
        <div >
            <button className='bg-gray-300 px-2 rounded-full m-2' onClick={DecreseJump}> - </button>
            Step : {jump}
            <button className='bg-gray-300 px-2 rounded-full m-2' onClick={IncreaseJUmp}>+</button>
        </div>
        <div className='mt-3'>
        <button className='bg-gray-300 px-2 rounded-full m-2' onClick={DecreaseCount}> - </button>
            Count : {count}
        <button className='bg-gray-300 px-2 rounded-full m-2' onClick={IncreaseCount}>+</button>

        </div>
        <div>
            <span>{count === 0 ?
            "Today is ":
            count >0 ?
            `${count} day from today is `:
            `${Math.abs(count)} days ago was `
            }</span>
            {date.toDateString()}</div>
    </div>
  )
}

export default DateCounter