'use client'
import Buttons from "@/components/Buttons"
import { useState } from "react"

const message = [
    'Learn React',
    'Apply for jobs',
    'Invest your new income'
]

function StepsUpdate() {
    const [step, setSteps] = useState(1)
    const [isOpen, setOpen] = useState(true)
    function handleNext (){
        if (step<3) setSteps((step)=>step + 1)
    } 

    function handlePrevious(){
        if (step >1) setSteps((step)=> step- 1)
    } 

  return (
    <div className="mx-auto flex flex-col items-center mt-5">
    <button className="bg-gray-400 px-2 rounded-full mb-3" onClick={()=>setOpen((isOpen)=>!isOpen)}>&times;</button>
    {isOpen &&
    <div className='container rounded-md bg-gray-300 w-[400px] flex flex-col justify-around p-4'>
    <div className='flex justify-between'>
        <div className={step >= 1 ? "bg-blue-500 rounded-full px-2": "bg-gray-400 rounded-full px-2"}>1</div>
        <div className={step >= 2 ? "bg-blue-500 rounded-full px-2": "bg-gray-400 rounded-full px-2"}>2</div>
        <div className={step >= 3 ? "bg-blue-500 rounded-full px-2": "bg-gray-400 rounded-full px-2"}>3</div>
    </div>
 
    <p className='self-center m-3'>{message[step-1]}</p>
    <div className='flex justify-between'>
    <Buttons bgColor={'bg-blue-500'} textColor={'text-white'} onClick = {handlePrevious}>Previous </Buttons>

    <Buttons bgColor={'bg-blue-500'} textColor={'text-white'} onClick = {handleNext}> Next </Buttons>
    </div>
</div>
    }
    
    </div>
  )
}

export default StepsUpdate