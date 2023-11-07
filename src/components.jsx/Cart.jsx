const Cart = ({
	cart,
	incrementQuantity,
	decrementQuantity,
	isValidateButtonDisabled,
	subtotal,
	deliveryFee,
	total,
}) => {
	const isCartEmpty = cart.every((item) => item.quantity === 0);

	return (
		<>
			<div className="Cart">
				<div className="Cart--card">
					<button
						className={`Cart-- ${
							isValidateButtonDisabled ? "disabled" : "validate"
						}`}
						disabled={isValidateButtonDisabled}>
						Valider le panier
					</button>
					{/* // désactive le bouton si nécessaire */}
					{isCartEmpty ? (
						<div className="Cart--empty">Votre panier est vide</div>
					) : (
						<>
							<div className="Cart-minus-cart-container">
								<div className="Cart-minus-cart-container">
									{cart.map((item, index) => (
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
									))}
									<div className="Cart--results">
										<div className="Cart--result-line">
											<span className="Cart--result-name">Sous-total</span>
											<span className="cart--amount">{subtotal}</span>
										</div>
										<div className="Cart--result-line">
											<span className="Cart--result-name">
												Frais de livraison
											</span>
											<span>{deliveryFee}</span>
										</div>
									</div>
									<div className="Cart--total">
										<span className="Cart--result-name">Total</span>
										<span className="span Cart--amount">{total}</span>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
