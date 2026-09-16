import React from "react";

const Card = ({ imgUrl, itemName, onButtonClick }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={itemName} />
      <p>{itemName}</p>
      <button type="button" onClick={() => onButtonClick(itemName)}>
        제품 페이지로 가기
      </button>
    </div>
  );
};

export default Card;
