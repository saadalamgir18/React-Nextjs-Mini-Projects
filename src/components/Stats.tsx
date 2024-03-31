import React from 'react'
import { itemsList } from '@/app/Types/alltype'
function Stats({items}:{items:itemsList[]}) {
  if (!items.length){
    return (
      <p className='bg-[#76c7ad] text-center p-14 font-extrabold'>
        <em>
          Start adding some items to packing list.
        </em>
      </p>
    )
  }
  const numItems = items.length
  const numPacked = items.filter((item)=> item.packed).length
  const percentage = Math.round((numPacked/numItems)*100)
  return (
    <footer className='bg-[#76c7ad] text-center p-14 font-extrabold'>
      <em>
        {percentage ===100 ? "You got everything! Ready to go. ":
        `you have ${numItems} items on your list, and you already packed ${numPacked}(${percentage}%)`}
        
        </em>
    </footer>
  )
}

export default Stats