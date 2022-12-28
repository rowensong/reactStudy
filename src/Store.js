import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
	name: "user",
	initialState: { name: "kim", age: 20 },
	reducers: {
		changeName(state) {
			state.name = "park";
		},
		changeAge(state) {
			console.log(state.age);
			state.age = state.age + 1;
		},
	},
});

export let { changeName, changeAge } = user.actions;

let temp = createSlice({
	name: "temp",
	initialState: [1, 2, 3],
});

let cart = createSlice({
	name: "cart",
	initialState: [
		{ id: 0, name: "White and Black", count: 2 },
		{ id: 2, name: "Grey Yordan", count: 1 },
	],
	reducers: {
		changeNum(state, action) {
			let index = state.findIndex((e) => {
				return e.id === action.payload;
			});
			state[index].count++;
		},

		setItem(state, action) {
			console.log("actions", action.payload);
			state.push(action.payload);
			console.log("actions", state[0], state[1], state[2]);
		},
	},
});

export let { changeNum, setItem } = cart.actions;

export default configureStore({
	reducer: {
		user: user.reducer,
		temp: temp.reducer,
		cart: cart.reducer,
	},
});
