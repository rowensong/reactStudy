import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let Divs = styled.button`
	background: ${(props) => props.color};
	color: black;
	padding: 10px;
`;

export default function Detail({ shoes }) {
	let { id } = useParams();
	let getItem = shoes.find((e) => {
		return parseInt(id) === e.id;
	});
	// console.log(id, getItem);

	let [count, setCount] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setCount(!count);
		}, 2000);
	}, []);

	return (
		<>
			<div className="container">
				{count === false ? (
					<div className="alert alert-warning">2초 이내 구매시 할인</div>
				) : null}
				<div className="row">
					<div className="col-md-6">
						<img
							src={`https://codingapple1.github.io/shop/shoes${getItem.id + 1}.jpg`}
							width="80%"
							alt=""
						/>
					</div>

					<div className="col-md-6">
						<h4 className="pt-5">{getItem.title}</h4>
						<h4>{getItem.content}</h4>
						<p>{getItem.price}</p>
						<button className="btn btn-danger">주문하기</button>
					</div>
					<Divs color="blue">123123</Divs>
				</div>
			</div>
		</>
	);
}
