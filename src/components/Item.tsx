import { itemsList } from "@/app/Types/alltype";

function Item({ item, onDeleteItems, onToggleItem }:{item:itemsList, onDeleteItems:any, onToggleItem: any }) {
  return (
    <li className="flex items-center gap-[1.2rem]">
      <input type="checkbox" checked={item.packed} onChange={()=>onToggleItem(item.id)}/>
      <span className={item.packed?`line-through`:""}>
        {item.quantity} {item.description}
      </span>

      <button onClick={() => onDeleteItems(item.id)}> &times;</button>
    </li>
  );
}

export default Item;
