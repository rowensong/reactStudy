import React from "react";
import { Outlet } from "react-router-dom";
export default function Event() {
	return (
		<>
			<h2>오늘의 이벤트</h2>
			<Outlet></Outlet>
		</>
	);
}
