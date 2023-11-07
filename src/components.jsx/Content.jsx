import { useState } from "react";
import Cart from "./Cart";
import Menu from "./Menu";

const Content = ({ data }) => {
	const [cart, setCart] = useState([]);
	const addToCart = (meal) => {
		setCart([...cart, meal]);
	};
	return (
		<div className="Content">
			<div className="Content--center">
				<Menu menus={data} addToCart={addToCart} />
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default Content;
