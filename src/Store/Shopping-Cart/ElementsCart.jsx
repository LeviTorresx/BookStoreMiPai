import React from "react";

export default function ElementsCart({
  book,
  handleRemoveFromCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  return (
    <div>
      <ul className="px-3 py-1">
        <li className="text-black border border-2 border-black rounded p-2">
          <div className="flex">
            <div className="p-1"> 
              <img src={book.bookImage} alt="books" width={"100px"} />
            </div>
            <div>
              <h5 className="m-2">{book.bookName}</h5>
              <span> - ${book.price}</span>
              <span> - Quantity: {book.quantity}</span>
            </div>
          </div>
          <div>
            <button className="" onClick={() => handleIncreaseQuantity(book)}> + </button>
            <button className="" onClick={() => handleDecreaseQuantity(book)}> - </button>
            <button className="" onClick={() => handleRemoveFromCart(book)}> Delete </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
