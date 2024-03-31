"use client";
import BillInput from "@/components/BillInput";
import Buttons from "@/components/Buttons";
import CalculateBill from "@/components/CalculateBill";
import ServiceReview from "@/components/ServiceReview";
import React, { useState } from "react";

function TipeCalculator() {
  const [bill, setBill] = useState<number>(0);
  const [review1, setReview1] = useState<number>(0);
  const [review2, setReview2] = useState<number>(0);
  const tip = (bill * ((review1 + review2) / 2)) / 100;

  function ResetData() {
    setBill(0);
    setReview1(0);
    setReview2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />

      <ServiceReview review={review1} onSelect={setReview1}>
        {" "}
        How Did you like the service?
      </ServiceReview>
      <ServiceReview review={review2} onSelect={setReview2}>
        {" "}
        How Did your friend like the service?
      </ServiceReview>

      <CalculateBill bill={bill} tip={tip} />
      <Buttons bgColor="bg-gray-400" textColor="text-black" onClick={ResetData}>
        Reset
      </Buttons>
    </div>
  );
}

export default TipeCalculator;
