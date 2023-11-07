import { useState } from "react";

const CartMinus = ({
	cart,
	incrementQuantity,
	decrementQuantity,
	subtotal,
	deliveryFee,
	total,
	isValidateButtonDisabled,
}) => {
	const isCartEmpty = cart.every((item) => item.quantity === 0);
	const [isCartOpen, setIsCartOpen] = useState(false); // État local pour suivre si le panier est ouvert

	const openCart = () => {
		setIsCartOpen(true);
	};

	const closeCart = () => {
		setIsCartOpen(false);
	};

	return (
		<div className="Cart-minus-container">
			{isCartEmpty ? (
				<>
					<button
						className={`Cart-minus-button${
							isValidateButtonDisabled ? " disabled" : ""
						}`}
						disabled={isValidateButtonDisabled}>
						Voir le panier
					</button>
				</>
			) : (
				<>
					{isCartOpen && (
						<div className="Cart-minus-cart-container">
							<div className="Cart-minus-close-cart-modal" onClick={closeCart}>
								X
							</div>
							{cart.map(
								(item, index) =>
									item.quantity > 0 && (
										<div key={index} className="Cart--items">
											<div className="Cart--line">
												<div className="Cart--counter">
													<span
														className="icon-minus"
														onClick={() => decrementQuantity(item.id)}></span>
													<span>{item.quantity}</span>
													<span
														className="icon-plus"
														onClick={() => incrementQuantity(item.id)}></span>
												</div>
												<span className="Cart--item-name">{item.title}</span>
												<span className="Cart--amount">{item.price}</span>
											</div>
										</div>
									)
							)}
							<div className="Cart--results">
								<div className="Cart--result-line">
									<span className="Cart--result-name">Sous-total</span>
									<span className="cart--amount">{subtotal}</span>
								</div>
								<div className="Cart--result-line">
									<span className="Cart--result-name">Frais de livraison</span>
									<span>{deliveryFee}</span>
								</div>
							</div>
							<div className="Cart--total">
								<span className="Cart--result-name">Total</span>
								<span className="span Cart--amount">{total}</span>
							</div>
						</div>
					)}
					{cart.some((item) => item.quantity > 0) && (
						<button
							className={`Cart-minus-button${
								isValidateButtonDisabled ? " disabled" : ""
							}`}
							disabled={isValidateButtonDisabled}
							onClick={openCart}>
							{/* // Ouvrir le panier au clic sur le bouton */}
							<span className="Cart-minus-number-of-products">
								{cart.reduce((total, item) => total + item.quantity, 0)}
							</span>
							Voir le panier
							<span>{total} €</span>
						</button>
					)}
				</>
			)}
		</div>
	);
};

export default CartMinus;
