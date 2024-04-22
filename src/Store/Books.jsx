
import { FaShoppingCart } from "react-icons/fa";


export default function Books({ book, addToCart }) {


  return (
    <div>
      <div className="bg-white img-book rounded border border-2 border-black">
        <div className="flex justify-content-center border-bottom border-2 border-black p-2">
          <img src={book.bookImage} width={"300px"} alt="x" />
        </div>
        <div className="p-2 rounded-bottom text-bg-light">
          <p>precio: $ {book.price.toFixed(2)}</p>
          <h2
            style={{
              fontSize: "18px",
              lineHeight: "1.2",
              maxHeight: "60px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {book.bookName}
          </h2>
          <p>{book.author}</p>
          <div className="text-center">
            <button className="btn-cart w-100 p-2" onClick={() => addToCart(book)}>
              <FaShoppingCart className="mx-2" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
