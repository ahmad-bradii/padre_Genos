import { useContext } from "react";
import { Link } from "@tanstack/react-router";
import { CartContext } from "./contexts";

export default function Header() {
  const cart = useContext(CartContext);
  // console.log("hey the length is ", cart);
  return (
    <nav>
      <Link to={"/"}>
        <h1 className="logo">Padre Gino's Pizza</h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart["0"].length}</span>
      </div>
    </nav>
  );
}
