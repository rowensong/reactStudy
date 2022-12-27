import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data.js";
import Card from "./routes/Card.js";
import Detail from "./routes/Detail.js";
import About from "./routes/About.js";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Event from "./routes/Event";
import axios from "axios";

function App() {
	let [shoes, setShoes] = useState(data);
	let navigate = useNavigate();

	return (
		<div className="App">
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">짝퉁몰</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link
								onClick={() => {
									navigate("/");
								}}
							>
								Home
							</Nav.Link>
							<Nav.Link
								onClick={() => {
									navigate("/detail");
								}}
							>
								Detail
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="main-bg"></div>
							<div className="container">
								<div className="row">
									{shoes.map((data) => {
										return <Card data={data} key={data.id} />;
									})}
								</div>
							</div>
							<button
								onClick={() => {
									axios
										.get("https://codingapple1.github.io/shop/data2.json")
										.then(({ data }) => {
											let getShoes = [...shoes, ...data];
											setShoes(getShoes);
										});
								}}
							>
								request
							</button>
						</>
					}
				></Route>
				<Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
				<Route path="/about" element={<About />}>
					<Route path="member" element={<div>member</div>}></Route>
					<Route path="location" element={<div>location</div>}></Route>
				</Route>
				<Route path="/event" element={<Event />}>
					<Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
					<Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
				</Route>
				<Route path="*" element={<div>404 error</div>}></Route>
			</Routes>
		</div>
	);
}

export default App;
