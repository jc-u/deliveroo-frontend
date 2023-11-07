import MenuCard from "./MenuCard";

const Menu = ({ menus, addToCart }) => {
	console.log(addToCart);
	return (
		<div className="Menu">
			{menus.categories.map((menu) => (
				<div className="MenuItems" key={menu.name}>
					{menu.meals.length > 0 && <h2>{menu.name}</h2>}
					{menu.meals.length > 0 && (
						<div className="MenuItems--items">
							{menu.meals.map((meal) => (
								<div key={meal.id} className="MenuItem">
									<MenuCard meal={meal} onClick={() => addToCart(meal)} />
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Menu;
