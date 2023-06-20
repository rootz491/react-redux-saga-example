import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleData } from "./store/actions/example.action";

const ReduxDemo = () => {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector((state) => state.example);

	return (
		<div
			style={{
				padding: "1rem",
				display: "grid",
				gap: ".5rem",
				textAlign: "center",
			}}
		>
			<small>See console for observing real-time state change</small>
			<button onClick={() => dispatch(fetchExampleData())}>
				Fetch Example Data
			</button>
			<hr />
			{data && <p>Example Data: {data}</p>}
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
		</div>
	);
};

export default ReduxDemo;
