'use client'
import React, { useState } from 'react'

function Form({onAddItems}:any) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
    

    
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        if (!description) return; 
        e.preventDefault();
        const newItem = {description, quantity, packed: false, id: Date.now()}
        console.log(newItem)
        setDescription('')
        setQuantity(1)
        onAddItems(newItem)

         
    }
  return (
    <form onSubmit={handleSubmit} className='bg-[#e5771f] p-9 flex items-center justify-center gap-3'>
        <h3 className='mr-[1.6rem text-4xl]'>What do you need for your trip?</h3>
        <select className='rounded-lg px-2' name="" id="" value={quantity} onChange={(e)=>setQuantity(Number(e.target.value)) }>
            {Array.from({length:20}, (_, i)=>i+1).map(
                (num)=> (
                    <option value={num} key={num}> {num}</option>
                )
            )}
        </select>
        <input className='rounded-lg' type="text" value = {description} onChange={(e)=>setDescription(e.target.value)}  name="" id=""  placeholder='item...'/>
        <button className='rounded-lg bg-[#76c7ad] px-2'>Add</button>
    </form>
  )
}

export default Form