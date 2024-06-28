import { useEffect, useState } from "react";
import styled from "styled-components";

const Rick = () => {
	const [tasks, setTasks] = useState([]);
	console.log(tasks);
	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => {
				setTasks(data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const getStatusColor = (status) => {
		switch (status) {
			case "Alive":
				return "#18f000";
			case "Dead":
				return "#ff1900";
			default:
				return "#676767";
		}
	};

	const cardStyle = {
		backgroundColor: "#ffffff",
		border: "1px solid #dddddd",
		borderRadius: "10px",
		padding: "20px",
		margin: "10px",
		boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
		width: "300px",
		cursor: "pointer",
	};

	const imageStyle = {
		width: "100%",
		marginBottom: "10px",
		borderRadius: "5px",
	};

	const RickPages = styled.div`
		display: flex;
		flex-wrap: wrap;
		background-color: #010134;
	`;
	return (
		<div>
			<RickPages>
				{tasks.map((item) => (
					<div key={item.id} style={cardStyle}>
						<img src={item.image} alt={item.name} style={imageStyle} />
						<h2>{item.name}</h2>
						<p>
							Status:
							<span style={{ color: getStatusColor(item.status) }}>
								{item.status}
							</span>
						</p>
						<p>Species: {item.species}</p>
						<p>Gender: {item.gender}</p>
					</div>
				))}
			</RickPages>
		</div>
	);
};

export default Rick;
