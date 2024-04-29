import React from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdRemoveCircleOutline } from "react-icons/io";

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
          <div className="d-flex mb-1">
            <div className="flex p-1"> 
              <img src={book.bookImage} alt="books" width={"120px"} />
            </div>
            <div className="">
              <h5 className="text-start m-2 fs-6">{book.bookName}</h5>
              <span className="flex justify-content-start px-2 py-2"> ${book.price}</span>
              <div className="flex justify-content-start px-1 py-2">
                <button className="btn-shopping-cart" onClick={() => handleIncreaseQuantity(book)}> <MdOutlineAddCircleOutline size={"25px"}/> </button>
                <span className="px-2">{book.quantity}</span>
                <button className="btn-shopping-cart" onClick={() => handleDecreaseQuantity(book)}> <IoMdRemoveCircleOutline size={"25px"}/> </button>
              </div>
            </div>
            <div className="ms-auto p-2">
              <button className="btn-shopping-cart" onClick={() => handleRemoveFromCart(book)}> 
              <FaRegTrashCan size={"20px"} /> </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
