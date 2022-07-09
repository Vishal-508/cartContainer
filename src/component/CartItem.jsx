import LabelPrice from "./LabelPrice";
import Quantity from "./Quantity";
function CartItem({ label, price, qty, id, handleChangeQty }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        padding: "2rem",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid tomato",
        margin: "0.5rem"
      }}
    >
      <LabelPrice label={label} price={price} />
      <Quantity
        qty={qty}
        incrementCount={() => handleChangeQty(id, 1)}
        decrementCount={() => handleChangeQty(id, -1)}
      />
    </div>
  );
}
export default CartItem;
