import Menu from "./Menu";

const Content = ({ data }) => {
	return (
		<div className="Content">
			<div className="Content--center">
				<Menu menus={data} />
			</div>
		</div>
	);
};

export default Content;
