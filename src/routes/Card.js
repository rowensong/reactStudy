import React from "react";

export default function Card({ data }) {
	return (
		<>
			<div className="col-md-4">
				<img
					src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`}
					width="80%"
					alt=""
				/>
				<h4>{data.title}</h4>
				<p>{data.price}</p>
			</div>
		</>
	);
}
