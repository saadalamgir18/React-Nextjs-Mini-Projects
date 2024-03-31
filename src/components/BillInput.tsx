"use client";
import React, { useState } from "react";
import ServiceReview from "./ServiceReview";

type BillInputType = {
    bill: number,
    onSetBill: any
}
function BillInput({ bill, onSetBill }:BillInputType) {
  function handleInputBill(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(e.target.value);
    onSetBill(value);
  }
  console.log(bill);
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        className="border-4"
        type="text"
        value={bill}
        onChange={handleInputBill}
      />
    </div>
  );
}

export default BillInput;
