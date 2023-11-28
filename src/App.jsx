import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components.jsx/Header";
import Content from "./components.jsx/Content";

function App() {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"https://site--deliveroo--x8j5n6vjq4tz.code.run/"
			);
			setData(response.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return isLoading ? (
		<span>En cours de chargement...</span>
	) : (
		<>
			<Header data={data} />
			<Content data={data} />
		</>
	);
}

export default App;
