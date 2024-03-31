"use client";
import Form from "@/components/Form";
import Logo from "@/components/Logo";
import PackingList from "@/components/PackingList";
import Stats from "@/components/Stats";
import React, { useState } from "react";
import { itemsList } from "../Types/alltype";

function FarAway() {
  const [items, setItems] = useState<itemsList[]>([]);

  function handAddItems(item:itemsList) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id:number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleUpdate(id:number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(){
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    )
    if (confirmed) setItems([])

  }
  return (
    <div className="h-screen grid grid-rows-[auto_auto_1fr_auto]">
      <Logo />
      <Form onAddItems={handAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItem = {handleToggleUpdate} ClearList = {handleClearList}/>
      <Stats items = {items}/>
    </div>
  );
}

export default FarAway;
