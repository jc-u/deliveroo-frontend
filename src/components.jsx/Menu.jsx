import MenuCard from "./MenuCard";

const Menu = ({ menus }) => {
	console.log(menus);
	return (
		<div className="Menu">
			{menus.categories.map((menu) => (
				<div className="MenuItems" key={menu.name}>
					{menu.meals.length > 0 && <h2>{menu.name}</h2>}
					{menu.meals.length > 0 && (
						<div className="MenuItems--items">
							{menu.meals.map((meal) => (
								<MenuCard key={meal.id} meal={meal} />
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Menu;
