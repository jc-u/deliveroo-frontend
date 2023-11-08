import { useState } from "react";
import Cart from "./Cart";
import CartMinus from "./CartMinus";
import Menu from "./Menu";

const Content = ({ data }) => {
	const [cart, setCart] = useState([]);
	const deliveryFee = 2.5; // Frais de livraison

	const addToCart = (meal) => {
		// Vérifie si l'élément est déjà dans le panier
		const existingItem = cart.find((item) => item.id === meal.id);

		if (existingItem) {
			// Si l'élément existe, incrémenter la quantité
			existingItem.quantity += 1;
			setCart([...cart]);
		} else {
			// Sinon, ajouter un nouvel élément avec une quantité de 1
			setCart([...cart, { ...meal, quantity: 1 }]);
		}
	};

	const incrementQuantity = (itemId) => {
		const updatedCart = cart.map((item) => {
			if (item.id === itemId) {
				item.quantity += 1;
			}
			return item;
		});
		setCart(updatedCart);
	};

	const decrementQuantity = (itemId) => {
		const updatedCart = cart
			.map((item) => {
				if (item.id === itemId && item.quantity > 0) {
					item.quantity -= 1;
				}
				return item;
			})
			.filter((item) => item.quantity > 0); // Supprime les éléments avec quantité 0

		setCart(updatedCart);
	};

	// Fonction pour vérifier si le bouton "Valider mon panier" doit être désactivé
	const isValidateButtonDisabled = () => {
		return !cart.some((item) => item.quantity > 0);
	};

	// Fonction pour calculer le sous-total
	const calculateSubtotal = () => {
		const subtotal = cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
		return subtotal.toFixed(2); // Formatage à 2 chiffres après la virgule
	};

	// Fonction pour calculer le total avec frais de livraison
	const calculateTotal = () => {
		const subtotal = parseFloat(calculateSubtotal()); // Conversion en nombre
		const total = (subtotal + deliveryFee).toFixed(2); // Formatage à 2 chiffres après la virgule
		return total;
	};

	return (
		<>
			<div className="Content">
				<div className="Content--center">
					<Menu menus={data} addToCart={addToCart} />
					<Cart
						cart={cart}
						incrementQuantity={incrementQuantity}
						decrementQuantity={decrementQuantity}
						subtotal={calculateSubtotal()}
						deliveryFee={deliveryFee}
						total={calculateTotal()}
						isValidateButtonDisabled={isValidateButtonDisabled()} // Passer l'état du bouton "Valider mon panier" en props
					/>
				</div>
			</div>
			<CartMinus
				cart={cart}
				incrementQuantity={incrementQuantity}
				decrementQuantity={decrementQuantity}
				subtotal={calculateSubtotal()}
				deliveryFee={deliveryFee}
				total={calculateTotal()}
				isValidateButtonDisabled={isValidateButtonDisabled()}
			/>
		</>
	);
};

export default Content;
