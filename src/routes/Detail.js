import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import { Context1 } from "./../App.js";

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
	let [string, setString] = useState(0);
	let [tab, setTab] = useState(0);

	useEffect(() => {
		if (isNaN(string)) {
			alert("고마해라 많이무따이가");
		}
	}, [string]);

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
					<input
						type=""
						onChange={(e) => {
							setString(e.target.value);
						}}
					/>
				</div>
			</div>
			<Nav justify variant="tabs" defaultActiveKey="link-0">
				<Nav.Item>
					<Nav.Link
						eventKey="link-0"
						onClick={() => {
							setTab(0);
						}}
					>
						tab1
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						eventKey="link-1"
						onClick={() => {
							setTab(1);
						}}
					>
						tab2
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						eventKey="link-2"
						onClick={() => {
							setTab(2);
						}}
					>
						tab3
					</Nav.Link>
				</Nav.Item>
			</Nav>
			<TabContent tab={tab}></TabContent>
		</>
	);
}

function TabContent({ tab }) {
	if (tab === 0) {
		return <div>내용1</div>;
	} else if (tab === 1) {
		return <div>내용2</div>;
	} else {
		return <div>내용3</div>;
	}
}
