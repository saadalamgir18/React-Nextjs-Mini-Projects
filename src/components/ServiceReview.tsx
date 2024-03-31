import React, { ReactNode, useState } from "react";
type ServiceReviewType = {
    review: number, onSelect:any,children:ReactNode 
}
function ServiceReview({ review, onSelect, children }: ServiceReviewType) {
  return (
    <div>
      <label>{children}</label>
      <select value={review} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">I was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutly amazing! (20%)</option>
      </select>
    </div>
  );
}

export default ServiceReview;
