import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge, changeNum } from "../Store";

export default function Cart() {
	let user = useSelector((state) => {
		return state.user;
	});
	let cartItem = useSelector((state) => {
		return state.cart;
	});
	let dispatch = useDispatch();
	console.log(user.name);
	return (
		<div>
			{user.name} 의 장바구니 {user.age}
			<button
				onClick={() => {
					// console.log(item.id);
					// dispatch(changeNum(item.count));
					dispatch(changeAge());
				}}
			>
				이름 바꾸기
			</button>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
					</tr>
				</thead>
				<tbody>
					{cartItem.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.count}</td>
								<td>
									<button
										onClick={() => {
											console.log(item.id);
											dispatch(changeNum(item.id));
											// dispatch(changeName());
										}}
									>
										수정하기
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
}
