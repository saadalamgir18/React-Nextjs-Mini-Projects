import { useState } from "react";
import Item from "./Item";
import { itemsList } from "@/app/Types/alltype";


function PackingList({ items, onDeleteItems, onToggleItem, ClearList }:{items:itemsList[], onDeleteItems:any, onToggleItem:any,ClearList:any}) {
  const [sortBy, setSortBy] = useState('input')
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed));




  return (
    <div className="bg-[#5a3e2b] text-[#ffebb3] p-10 flex justify-between items-center flex-col">
      <ul className="container grid grid-cols-3 gap-5 overflow:scroll justify-center items-start">
        {sortedItems?.map((item:itemsList) => (
          <Item onDeleteItems={onDeleteItems} onToggleItem = {onToggleItem} key={item.id} item={item} />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="bg-[#ffebb3] text-[#5a3e2b] text-lg rounded-lg mr-5">
          <option value="input">
            Sort by input order
          </option>
          <option value="description">
            Sort by description
          </option>
          <option value="packed">Sort by packed status</option>
        </select>

        <button className="bg-[#ffebb3] text-[#5a3e2b] text-lg rounded-lg mr-5" onClick={ClearList}>Clear list</button>

      </div>
    </div>
  );
}

export default PackingList;
